import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  template: `
    <section class="hero">
      <div>
        <p class="kicker">Software Engineer</p>
        <h2>Building production-focused systems across Java, Angular, PHP, and Flutter.</h2>
        <p class="copy">
          I work across backend APIs, full-stack web apps, database systems, and mobile clients.
          My portfolio spans Spring Boot microservices, Angular dashboards, Oracle/PostgreSQL SQL projects,
          PHP platforms, and Flutter user clients.
        </p>
        <div class="cta-row">
          <a href="/B_M_Sharier_Kabir_Resume.pdf" download target="_blank">Download CV</a>
          <a class="ghost" href="https://github.com/himusharier" target="_blank">View GitHub</a>
          <a class="ghost" href="mailto:himusharier@gmail.com">Email Me</a>
        </div>
      </div>

      <aside class="profile-card" aria-label="GitHub profile snapshot">
        <img
          src="https://avatars.githubusercontent.com/u/94462595?v=4"
          alt="Sharier Himu GitHub profile picture"
          loading="lazy"
        />
        <h3>&#64;himusharier</h3>
        <p>Java | Spring Boot | Microservices | Angular</p>
      </aside>
    </section>

    <section class="highlights-grid">
      @for (stat of highlights; track stat.label) {
        <article class="card">
          <p>{{ stat.label }}</p>
          <h3>{{ stat.value }}</h3>
          <small>{{ stat.detail }}</small>
        </article>
      }
    </section>

    <section class="skills">
      <h3>Core capabilities</h3>
      <div class="pill-wrap">
        @for (skill of skills; track skill) {
          <span>{{ skill }}</span>
        }
      </div>
    </section>
  `,
  styles: `
    .hero {
      display: grid;
      grid-template-columns: 1fr 220px;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border: 1px solid var(--color-border);
      border-radius: 16px;
      background: linear-gradient(130deg, #ffffff, #fff5ec);
    }

    .kicker {
      margin: 0;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.7rem;
    }

    h2 {
      margin: 0.5rem 0;
      font: 700 clamp(1.45rem, 4vw, 2rem)/1.2 var(--font-display);
      color: var(--color-text);
    }

    .copy {
      margin: 0;
      max-width: 62ch;
      color: var(--color-muted);
      line-height: 1.5;
    }

    .cta-row {
      margin-top: 1rem;
      display: flex;
      gap: 0.65rem;
      flex-wrap: wrap;
    }

    .cta-row a {
      text-decoration: none;
      color: #fff;
      background: var(--color-accent);
      border: 1px solid transparent;
      border-radius: 10px;
      padding: 0.55rem 0.85rem;
      font-weight: 700;
    }

    .cta-row a.ghost {
      color: var(--color-text);
      background: #fff;
      border: 1px solid var(--color-border);
    }

    .profile-card {
      border: 1px solid var(--color-border);
      border-radius: 14px;
      padding: 0.75rem;
      background: #fff;
      text-align: center;
    }

    .profile-card img {
      width: 100%;
      border-radius: 10px;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    .profile-card h3 {
      margin: 0.6rem 0 0.2rem;
      color: var(--color-text);
      font-size: 1rem;
    }

    .profile-card p {
      margin: 0;
      font-size: 0.8rem;
      color: var(--color-muted);
      line-height: 1.4;
    }

    .highlights-grid {
      margin-top: 0.9rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0.8rem;
    }

    .card {
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 0.95rem;
      background: #fff;
    }

    .card p {
      margin: 0;
      color: var(--color-muted);
      font-size: 0.85rem;
    }

    .card h3 {
      margin: 0.4rem 0;
      font-size: 1.2rem;
      color: var(--color-text);
    }

    .card small,
    .skills h3 {
      color: var(--color-accent);
      font-weight: 600;
    }

    .skills {
      margin-top: 1rem;
      border: 1px solid var(--color-border);
      border-radius: 14px;
      padding: 0.9rem;
      background: #fff;
    }

    .skills h3 {
      margin: 0;
      font-size: 1rem;
    }

    .pill-wrap {
      margin-top: 0.75rem;
      display: flex;
      gap: 0.45rem;
      flex-wrap: wrap;
    }

    .pill-wrap span {
      border: 1px solid var(--color-border);
      background: #fef2e9;
      border-radius: 999px;
      padding: 0.35rem 0.65rem;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--color-text);
    }

    @media (max-width: 760px) {
      .hero {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class DashboardPageComponent {
  readonly highlights = [
    { label: 'Experience', value: '08/2025 - Present', detail: 'Nirupon Limited, Mirpur-15, Dhaka' },
    { label: 'Training', value: 'IsDB-BISEW', detail: 'IT Scholarship Programme (09/2024 - 07/2025)' },
    { label: 'Education', value: 'B.Sc (Botany)', detail: 'University of Barishal (2019 - 2023)' },
    { label: 'Location', value: 'Merul Badda', detail: 'Dhaka, Bangladesh' }
  ];

  readonly skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Dart',
    'Spring Boot',
    'Spring',
    'JPA',
    'Hibernate',
    'Servlet',
    'JSP',
    'JSF',
    'REST APIs',
    'PHP',
    'WordPress Plugin',
    'Flutter',
    'Bootstrap',
    'jQuery',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'Angular',
    'JasperReports',
    'GitHub',
    'GitLab'
  ];
}
