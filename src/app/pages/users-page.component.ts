import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

type ProjectCategory = 'All' | 'Web apps' | 'Landing pages';

interface Project {
  category: Exclude<ProjectCategory, 'All'>;
  type: string;
  title: string;
  summary: string;
  stack: string;
  liveUrl: string;
  sourceUrl: string;
}

interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

@Component({
  selector: 'app-users-page',
  standalone: true,
  template: `
    <section class="head">
      <div>
        <p class="kicker">Selected work</p>
        <h2>Projects</h2>
      </div>
      <div class="filters">
        @for (category of categories; track category) {
          <button
            type="button"
            [class.active]="selectedCategory === category"
            (click)="selectCategory(category)"
          >
            {{ category }}
          </button>
        }
      </div>
    </section>

    @if (isLoading) {
      <p class="state-copy">Loading your latest GitHub projects...</p>
    }

    @if (errorMessage) {
      <p class="state-copy error">{{ errorMessage }}</p>
    }

    @if (!isLoading && !errorMessage) {
      <section class="project-grid">
        @for (project of filteredProjects; track project.sourceUrl) {
          <article class="project-card">
            <p class="tag">{{ project.type }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <div class="meta">{{ project.stack }}</div>
            <div class="links">
              <a [href]="project.liveUrl" target="_blank" rel="noreferrer">Live demo</a>
              <a [href]="project.sourceUrl" target="_blank" rel="noreferrer">Source</a>
            </div>
          </article>
        }
      </section>
    }
  `,
  styles: `
    .head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 0.75rem;
      margin-bottom: 0.9rem;
      flex-wrap: wrap;
    }

    .kicker {
      margin: 0;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.7rem;
    }

    h2 {
      margin: 0.2rem 0;
      font: 700 1.35rem/1.2 var(--font-display);
      color: var(--color-text);
    }

    .filters {
      display: flex;
      gap: 0.45rem;
      flex-wrap: wrap;
    }

    .filters button {
      border: 1px solid var(--color-border);
      border-radius: 999px;
      padding: 0.38rem 0.68rem;
      background: #fff;
      color: var(--color-muted);
      font: inherit;
      font-size: 0.82rem;
      cursor: pointer;
    }

    .filters button.active {
      color: var(--color-text);
      background: #ffecdf;
      border-color: #ffc8a5;
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0.8rem;
    }

    .state-copy {
      margin: 0.2rem 0 0.9rem;
      color: var(--color-muted);
      font-weight: 600;
    }

    .state-copy.error {
      color: #ab3d2d;
    }

    .project-card {
      border: 1px solid var(--color-border);
      border-radius: 14px;
      background: #fff;
      padding: 0.9rem;
      display: grid;
      gap: 0.55rem;
    }

    .tag {
      margin: 0;
      color: var(--color-accent);
      font-size: 0.74rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    h3 {
      margin: 0;
      font-size: 1.08rem;
    }

    .project-card p {
      margin: 0;
      color: var(--color-muted);
      line-height: 1.45;
    }

    .meta {
      font-size: 0.82rem;
      color: var(--color-text);
      font-weight: 600;
    }

    .links {
      display: flex;
      gap: 0.65rem;
    }

    .links a {
      color: var(--color-accent);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.82rem;
    }
  `
})
export class UsersPageComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly username = 'himusharier';

  readonly categories: ProjectCategory[] = ['All', 'Web apps', 'Landing pages'];
  selectedCategory: ProjectCategory = 'All';
  isLoading = true;
  errorMessage = '';

  projects: Project[] = [];

  ngOnInit(): void {
    this.loadProjectsFromGithub();
  }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === this.selectedCategory);
  }

  selectCategory(category: ProjectCategory): void {
    this.selectedCategory = category;
  }

  private loadProjectsFromGithub(): void {
    const endpoint = `https://api.github.com/users/${this.username}/repos?sort=updated&per_page=100`;

    this.http
      .get<GithubRepo[]>(endpoint)
      .pipe(
        map((repos) =>
          repos
            .filter((repo) => !repo.fork && !repo.archived)
            .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
            .slice(0, 12)
            .map((repo) => this.mapRepoToProject(repo))
        ),
        catchError(() => {
          this.errorMessage = 'Could not load GitHub projects right now. Please try again shortly.';
          return of([]);
        })
      )
      .subscribe((projects) => {
        this.projects = projects;
        this.isLoading = false;
      });
  }

  private mapRepoToProject(repo: GithubRepo): Project {
    const topics = repo.topics ?? [];
    const category: Exclude<ProjectCategory, 'All'> = this.toCategory(topics);

    return {
      category,
      type: this.toProjectType(repo),
      title: repo.name,
      summary: repo.description ?? 'Repository with implementation details, source code, and project documentation.',
      stack: this.toStackLabel(repo),
      liveUrl: repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : repo.html_url,
      sourceUrl: repo.html_url
    };
  }

  private toCategory(topics: string[]): Exclude<ProjectCategory, 'All'> {
    const lowerTopics = topics.map((topic) => topic.toLowerCase());
    const isLanding = lowerTopics.some(
      (topic) => topic.includes('landing') || topic.includes('portfolio') || topic.includes('website')
    );

    return isLanding ? 'Landing pages' : 'Web apps';
  }

  private toProjectType(repo: GithubRepo): string {
    const topics = (repo.topics ?? []).map((topic) => topic.toLowerCase());

    if (topics.some((topic) => topic.includes('microservice'))) {
      return 'Microservices';
    }

    if (topics.includes('angular') || topics.includes('angular19')) {
      return 'Angular Web App';
    }

    if ((repo.language ?? '').toLowerCase() === 'java') {
      return 'Backend Service';
    }

    return 'Web Project';
  }

  private toStackLabel(repo: GithubRepo): string {
    const language = repo.language ?? 'Multi-language';
    const topicPreview = (repo.topics ?? []).slice(0, 2).join(', ');
    const stars = repo.stargazers_count > 0 ? `, ${repo.stargazers_count} star${repo.stargazers_count > 1 ? 's' : ''}` : '';

    return topicPreview ? `${language}, ${topicPreview}${stars}` : `${language}${stars}`;
  }
}
