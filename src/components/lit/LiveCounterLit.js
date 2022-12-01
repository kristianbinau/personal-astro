import { LitElement, html, css } from 'lit';

const tagName = 'live-counter';

export class LitLiveCounter extends LitElement {
    static styles = css`
    .card {
        list-style: none;
        display: flex;
        padding: 0.15rem;
        background-color: white;
        background-image: var(--accent-gradient);
        background-size: 400%;
        border-radius: 0.5rem;
        background-position: 100%;
        transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }

    .card.lit {
        background-image: var(--lit-accent-gradient);
    }

    .card.lit:is(:hover, :focus-within) h2 {
        color: rgb(var(--lit-accent));
    }

    .card > a {
        width: 100%;
        text-decoration: none;
        line-height: 1.4;
        padding: 1rem 1.3rem;
        border-radius: 0.35rem;
        color: #111;
        background-color: white;
        opacity: 0.8;
    }
    h2 {
        margin: 0;
        font-size: 1.25rem;
        transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    p {
        margin-top: 0.5rem;
        margin-bottom: 0;
        color: #444;
    }
    .card:is(:hover, :focus-within) {
        background-position: 0;
    }
    .card:is(:hover, :focus-within) h2 {
        color: rgb(var(--accent));
    }

    h2 {
        font-weight: inherit;
    }
    `;

    static get properties() {
        return {
            seconds: { state: true }
        }
    }

    constructor() {
        super();
        this.seconds = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.seconds++;
    }


    render() {
        return html`
        <div class="card lit">
        <a>
            <h2>
                Lit
                <span>&rarr;</span>
            </h2>
            <p class="flex justify-center items-center">
                Has been counting for: ${this.seconds} seconds.
            </p>
        </a>
    </div>
        `;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.timerId);
    }
}

customElements.define(tagName, LitLiveCounter);