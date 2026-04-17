import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="contact-page">
      <div class="content-grid">
        <article class="left-panel">
          <h2>Start a Project</h2>
          <p class="lead">Tell me what you are building and I will reply as soon as possible.</p>

          <div class="channels-block">
            <h4>Preferred Channels</h4>
            <ul>
              <li>
                <span class="material-symbols-outlined" aria-hidden="true">mail</span>
                <div>
                  <p>Email</p>
                  <a href="mailto:himusharier&#64;gmail.com">
                    himusharier&#64;gmail.com
                  </a>
                </div>
              </li>
              <li>
                <span class="material-symbols-outlined" aria-hidden="true">phone</span>
                <div>
                  <p>WhatsApp</p>
                  <a href="https://wa.me/+8801867849219" target="_blank" rel="noreferrer">
                    +880 1867 849219
                  </a>
                </div>
              </li>
              <li>
                <span class="material-symbols-outlined" aria-hidden="true">share</span>
                <div>
                  <p>Facebook</p>
                  <a href="https://fb.com/sharier.himu" target="_blank" rel="noreferrer">
                    facebook.com/sharier.himu
                  </a>
                </div>
              </li>
              <li>
                <span class="material-symbols-outlined" aria-hidden="true">work</span>
                <div>
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sharier-himu" target="_blank" rel="noreferrer">
                    linkedin.com/in/sharier-himu
                  </a>
                </div>
              </li>
              <li>
                <span class="material-symbols-outlined" aria-hidden="true">code</span>
                <div>
                  <p>GitHub</p>
                  <a href="https://github.com/himusharier" target="_blank" rel="noreferrer">
                    github.com/himusharier
                  </a>
                </div>
              </li>
              <li>
                <span class="material-symbols-outlined" aria-hidden="true">location_on</span>
                <div>
                  <p>Location</p>
                  <span>Merul Badda, Dhaka, Bangladesh</span>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: `
    .contact-page {
      min-height: 100%;
      padding: 0.45rem;
    }

    .content-grid {
      max-width: 1080px;
      margin: 0;
      display: block;
      align-items: start;
    }

    .left-panel {
      padding: clamp(0.25rem, 1vw, 0.7rem);
    }

    .left-panel h2 {
      margin: 0;
      font: 700 clamp(2rem, 6vw, 3.25rem) / 0.98 var(--font-display);
      letter-spacing: -0.045em;
      color: var(--color-text);
    }

    .lead {
      margin: 1rem 0 0;
      max-width: 46ch;
      color: var(--color-muted);
      font-size: clamp(1rem, 2vw, 1.08rem);
      line-height: 1.58;
    }

    .channels-block {
      margin-top: 2.25rem;
    }

    .channels-block h4 {
      margin: 0 0 1rem;
      color: var(--color-text);
      font-size: 0.92rem;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .channels-block ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .channels-block li {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.9rem;
      border-radius: 18px;
      background: linear-gradient(145deg, rgb(255 255 255 / 92%), rgb(255 248 242 / 96%));
      border: 1px solid var(--color-border);
      min-width: 0;
    }

    .channels-block .material-symbols-outlined {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 0.95rem;
      display: grid;
      place-items: center;
      color: var(--color-accent);
      background: linear-gradient(140deg, rgb(22 116 145 / 14%), rgb(255 127 80 / 20%));
      font-size: 1.25rem;
      flex-shrink: 0;
    }

    .channels-block p {
      margin: 0;
      color: var(--color-text);
      font-size: 0.94rem;
      font-weight: 700;
    }

    .channels-block a,
    .channels-block span {
      color: var(--color-muted);
      text-decoration: none;
      font-size: 0.9rem;
      line-height: 1.45;
      overflow-wrap: anywhere;
    }

    .channels-block a:hover {
      color: var(--color-accent);
    }

    @media (max-width: 920px) {
      .channels-block {
        margin-top: 1.6rem;
      }
    }

    @media (max-width: 640px) {
      .channels-block ul {
        grid-template-columns: 1fr;
      }

      .channels-block li {
        align-items: flex-start;
      }
    }
  `
})
export class ContactPageComponent {}