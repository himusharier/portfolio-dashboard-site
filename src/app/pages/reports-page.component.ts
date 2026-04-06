import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  template: `
    <p class="kicker">About me</p>
    <h2>Java and microservices engineer with full-stack execution</h2>
    <p class="copy">
      Software Engineer experienced in Spring Boot web applications, RESTful APIs, and Angular frontends.
      I focus on maintainable architecture and practical delivery.
    </p>

    <section class="grid">
      <article class="card">
        <h3>My journey</h3>
        <ul>
          <li><strong>2026:</strong> 25 public repositories with active work across Java and Angular.</li>
          <li><strong>2025:</strong> Delivered end-to-end systems using Spring Boot, Angular, PostgreSQL, and Docker.</li>
          <li><strong>2021:</strong> Started GitHub journey and continuously built production-style projects.</li>
        </ul>
      </article>

      <article class="card">
        <h3>What clients value</h3>
        <ul>
          <li>Domain-driven, decoupled service design for scalable backends</li>
          <li>Secure API implementation with authentication best practices</li>
          <li>Clear handoff and documentation for team collaboration</li>
          <li>Balanced backend robustness with user-friendly frontend interfaces</li>
        </ul>
      </article>
    </section>
  `,
  styles: `
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

    .copy {
      color: var(--color-muted);
      margin: 0 0 0.85rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 0.8rem;
    }

    .card {
      border: 1px solid var(--color-border);
      background: #fff;
      border-radius: 14px;
      padding: 0.9rem;
    }

    h3 {
      margin: 0;
      font: 700 1rem/1.2 var(--font-display);
    }

    ul {
      margin: 0.7rem 0 0;
      padding-left: 1rem;
      color: var(--color-muted);
      display: grid;
      gap: 0.5rem;
      line-height: 1.45;
    }
  `
})
export class ReportsPageComponent {}
