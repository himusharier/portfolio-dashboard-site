import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  template: `
    <div class="container">
      <h2 class="main-heading">Java and microservices engineer with full-stack execution</h2>
      <p class="description">
        I build scalable, maintainable systems using Spring Boot and Angular with a strong focus on clean architecture and practical delivery.
      </p>

      <div class="content-grid">
        <!-- My Journey Section -->
        <div class="section">
          <h3 class="section-title">My Journey</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="year">2026</div>
              <p>25 public repositories with active contributions in Java and Angular</p>
            </div>
            <div class="timeline-item">
              <div class="year">2025</div>
              <p>Delivered end-to-end systems using Spring Boot, Angular, PostgreSQL & Docker</p>
            </div>
            <div class="timeline-item">
              <div class="year">2021</div>
              <p>Began GitHub journey building production-style projects</p>
            </div>
          </div>
        </div>

        <!-- What Clients Value Section -->
        <div class="section">
          <h3 class="section-title">What Clients Value</h3>
          <ul class="values-list">
            <li>
              <span class="checkmark">✓</span>
              <span>Domain-driven microservices architecture for scalable backends</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Secure REST APIs with JWT authentication best practices</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Clean, well-documented code and smooth team handover</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Balanced focus on robust backend and intuitive frontend UX</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: `
    .container {
      max-width: 1080px;
      margin: 0;
      padding: 0 1rem;
    }

    .main-heading {
      margin: 0 0 1.5rem;
      font: 700 clamp(2.5rem, 5vw, 3.5rem) / 1.2 var(--font-display);
      letter-spacing: -0.02em;
      color: var(--color-text);
      max-width: 55ch;
    }

    .description {
      font-size: clamp(1rem, 2vw, 1.125rem);
      color: var(--color-muted);
      line-height: 1.6;
      margin: 0 0 3rem;
      max-width: 70ch;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }

    .section {
      display: flex;
      flex-direction: column;
    }

    .section-title {
      margin: 0 0 1.75rem;
      font: 700 1.5rem / 1.3 var(--font-display);
      color: var(--color-text);
    }

    .timeline {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }

    .timeline-item {
      display: flex;
      gap: 1.5rem;
    }

    .year {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--color-accent);
      min-width: 3.5rem;
      flex-shrink: 0;
      font-family: 'Courier New', monospace;
    }

    .timeline-item p {
      margin: 0;
      color: var(--color-text);
      line-height: 1.5;
      font-weight: 500;
    }

    .values-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .values-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.95rem;
    }

    .checkmark {
      color: var(--color-accent);
      font-weight: 700;
      font-size: 1.25rem;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    .values-list li span:last-child {
      color: var(--color-text);
      line-height: 1.5;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .content-grid {
        gap: 2.5rem;
      }

      .main-heading {
        margin-bottom: 1rem;
      }

      .description {
        margin-bottom: 2rem;
      }
    }
  `
})
export class ReportsPageComponent {}
