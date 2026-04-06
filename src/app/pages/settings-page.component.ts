import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  template: `
    <p class="kicker">Start a project</p>
    <h2>Contact</h2>
    <p class="copy">Tell me what you are building and I will reply as soon as possible.</p>

    <section class="contact-grid">
      <article class="card">
        <h3>Preferred channels</h3>
        <ul>
          <li><strong>GitHub:</strong> github.com/himusharier</li>
          <li><strong>Website:</strong> himusharier.site</li>
          <li><strong>Location:</strong> Dhaka, Bangladesh</li>
        </ul>
        <div class="actions">
          <a href="https://github.com/himusharier" target="_blank" rel="noreferrer">Open GitHub</a>
          <a href="https://himusharier.site" target="_blank" rel="noreferrer">Visit website</a>
        </div>
      </article>

      <article class="card form-card">
        <h3>Quick inquiry</h3>
        <form (submit)="submitContact($event, name.value, email.value, details.value)">
          <label>
            Name
            <input #name type="text" placeholder="Your full name" required />
          </label>
          <label>
            Email
            <input #email type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Project details
            <textarea
              #details
              rows="4"
              placeholder="Budget, timeline, and goals"
              required
            ></textarea>
          </label>
          <button type="submit">Send inquiry</button>
        </form>

        @if (feedbackMessage) {
          <p class="feedback" [class.error]="feedbackIsError">{{ feedbackMessage }}</p>
        }
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
      margin: 0 0 0.8rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 0.8rem;
    }

    .card {
      border: 1px solid var(--color-border);
      border-radius: 14px;
      background: #fff;
      padding: 0.9rem;
    }

    h3 {
      margin: 0;
      font: 700 1rem/1.2 var(--font-display);
    }

    ul {
      margin: 0.75rem 0;
      padding-left: 1rem;
      color: var(--color-muted);
      display: grid;
      gap: 0.45rem;
      line-height: 1.45;
    }

    .actions {
      display: flex;
      gap: 0.6rem;
    }

    .actions a,
    button {
      text-decoration: none;
      border: 1px solid var(--color-border);
      border-radius: 10px;
      background: #fff;
      color: var(--color-text);
      font: inherit;
      font-size: 0.82rem;
      font-weight: 700;
      padding: 0.45rem 0.7rem;
      cursor: pointer;
    }

    .actions a:first-child,
    button {
      background: var(--color-accent);
      border-color: transparent;
      color: #fff;
    }

    form {
      margin-top: 0.75rem;
      display: grid;
      gap: 0.55rem;
    }

    label {
      display: grid;
      gap: 0.35rem;
      font-size: 0.82rem;
      color: var(--color-muted);
      font-weight: 600;
    }

    input,
    textarea {
      border: 1px solid var(--color-border);
      border-radius: 10px;
      padding: 0.55rem 0.65rem;
      font: inherit;
      color: var(--color-text);
      resize: vertical;
      background: #fffdfa;
    }

    .feedback {
      margin: 0.7rem 0 0;
      color: #1d6e55;
      font-size: 0.82rem;
      font-weight: 600;
    }

    .feedback.error {
      color: #ab3d2d;
    }
  `
})
export class SettingsPageComponent {
  feedbackMessage = '';
  feedbackIsError = false;

  submitContact(event: Event, name: string, email: string, details: string): void {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanDetails = details.trim();

    if (!cleanName || !cleanEmail || !cleanDetails) {
      this.feedbackIsError = true;
      this.feedbackMessage = 'Please complete all fields before sending.';
      return;
    }

    this.feedbackIsError = false;
    this.feedbackMessage =
      'Inquiry captured. Please continue on GitHub or website links while direct email is being configured.';
  }
}
