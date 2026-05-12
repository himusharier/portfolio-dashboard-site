import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <div class="container">
      <h2 class="main-heading">Professional background, training, and delivery strengths</h2>
      <p class="description">
        Associate Software Engineer with practical delivery experience across Java/Spring Boot, Angular, PHP,
        and SQL platforms, backed by structured enterprise training from IsDB-BISEW.
      </p>

      <div class="content-grid">
        <div class="section">
          <h3 class="section-title">Timeline</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="year">2025 - Now</div>
              <p>Associate Software Engineer at Nirupon Limited, building scalable backend microservices and Angular integrations.</p>
            </div>
            <div class="timeline-item">
              <div class="year">2024 - 2025</div>
              <p>
                Completed IsDB-BISEW IT Scholarship Programme with coursework in Java OOP, Oracle 19c,
                Servlet, JSP, JSF, Hibernate, Angular, Spring Boot, UML, and Android.
              </p>
            </div>
            <div class="timeline-item">
              <div class="year">2019 - 2023</div>
              <p>Completed B.Sc (Botany) from the University of Barishal.</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">What I Deliver</h3>
          <ul class="values-list">
            <li>
              <span class="checkmark">✓</span>
              <span>Scalable backend services using Java, Spring Boot, and REST APIs</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Optimized and reliable SQL workflows in PostgreSQL, Oracle, and MySQL</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>API-connected Angular frontends with role-based dashboard experiences</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>PHP and WordPress plugin development for practical business and content use cases</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Mobile client implementation with Android and API-driven local data workflows</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Team collaboration through Agile process, Git workflow, code reviews, and continuous debugging</span>
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
      font-size: 0.96rem;
      color: var(--color-accent);
      min-width: 7rem;
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
export class AboutPageComponent {}