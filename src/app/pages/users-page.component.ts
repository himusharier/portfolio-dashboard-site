import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

interface GithubRepo {
  name: string;
  visibility: 'public' | 'private';
  description: string | null;
  language: string | null;
  topics?: string[];
  updated_at: string;
}

interface RepoProject {
  name: string;
  visibility: 'Public' | 'Private';
  summary: string;
  tags: string[];
  updated: string;
  repoUrl: string;
  repoPath: string;
}

@Component({
  selector: 'app-users-page',
  standalone: true,
  template: `
    <section class="head">
      <div>
        <p class="kicker">Repository-driven portfolio</p>
        <h2>Projects and Repositories</h2>
        <p class="intro">
          Curated from your listed repositories with direct focus on real work, training modules, and client systems.
        </p>
      </div>
    </section>

    <section class="section-block">
      <h3>Featured Public Repositories</h3>
      <section class="project-grid">
        @for (project of publicProjects; track project.name) {
          <article class="project-card">
            <div class="card-main">
              <p class="tag">{{ project.visibility }}</p>
              <h4>{{ project.name }}</h4>
              <p>{{ project.summary }}</p>
              <div class="tags">
                @for (tag of project.tags; track tag) {
                  <span>{{ tag }}</span>
                }
              </div>
              <a class="repo-link" [href]="project.repoUrl" target="_blank" rel="noreferrer">{{ project.repoPath }}</a>
            </div>
            <div class="card-side">
              <small>Updated: {{ project.updated }}</small>
            </div>
          </article>
        }
      </section>
    </section>
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

    .intro {
      margin: 0.35rem 0 0;
      color: var(--color-muted);
      line-height: 1.5;
      max-width: 70ch;
    }

    .section-block {
      margin-top: 1rem;
    }

    .section-block h3 {
      margin: 0 0 0.8rem;
      color: var(--color-text);
      font-size: 1.04rem;
      font-family: var(--font-display);
    }

    .project-grid {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .project-card {
      border: 1px solid var(--color-border);
      border-radius: 14px;
      background: #fff;
      padding: 0.9rem;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: start;
    }

    .card-main {
      display: grid;
      gap: 0.55rem;
      min-width: 0;
    }

    .card-side {
      display: grid;
      gap: 0.35rem;
      align-content: start;
      justify-items: end;
      text-align: right;
    }

    .tag {
      margin: 0;
      color: var(--color-accent);
      font-size: 0.74rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    h4 {
      margin: 0;
      font-size: 1.08rem;
      color: var(--color-text);
      line-height: 1.35;
    }

    .project-card p {
      margin: 0;
      color: var(--color-muted);
      line-height: 1.45;
    }

    .repo-link {
      color: var(--color-accent);
      text-decoration: none;
      font-size: 0.86rem;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    .repo-link:hover {
      text-decoration: underline;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tags span {
      border: 1px solid var(--color-border);
      background: #fef2e9;
      color: var(--color-text);
      border-radius: 999px;
      padding: 0.22rem 0.55rem;
      font-size: 0.75rem;
      font-weight: 700;
    }

    .project-card small {
      color: var(--color-muted);
      font-size: 0.78rem;
      font-weight: 700;
    }

    @media (max-width: 760px) {
      .project-card {
        grid-template-columns: 1fr;
      }

      .card-side {
        justify-items: start;
        text-align: left;
      }
    }
  `
})
export class UsersPageComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly githubUsername = 'himusharier';

  publicProjects: RepoProject[] = [];

  ngOnInit(): void {
    this.loadPublicProjects();
  }

  private loadPublicProjects(): void {
    const url = `https://api.github.com/users/${this.githubUsername}/repos?sort=updated&per_page=100`;

    this.http.get<GithubRepo[]>(url).subscribe({
      next: (repos) => {
        this.publicProjects = repos
          .filter((repo) => repo.visibility === 'public')
          .map((repo) => this.toRepoProject(repo));
      },
      error: () => {
        this.publicProjects = [];
      }
    });
  }

  private toRepoProject(repo: GithubRepo): RepoProject {
    const repoPath = `github.com/${this.githubUsername}/${repo.name}`;

    return {
      name: repo.name,
      visibility: 'Public',
      summary: repo.description ?? 'Public GitHub repository with implementation details and source code.',
      tags: this.toTags(repo),
      updated: this.toDisplayDate(repo.updated_at),
      repoUrl: `https://${repoPath}`,
      repoPath
    };
  }

  private toTags(repo: GithubRepo): string[] {
    const tags: string[] = [];

    if (repo.language) {
      tags.push(repo.language);
    }

    for (const topic of repo.topics ?? []) {
      const formatted = topic
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

      if (formatted && !tags.includes(formatted)) {
        tags.push(formatted);
      }

      if (tags.length >= 5) {
        break;
      }
    }

    return tags.length > 0 ? tags : ['Repository'];
  }

  private toDisplayDate(value: string): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
