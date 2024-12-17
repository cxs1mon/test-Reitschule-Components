class RTSLayout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(`Layout was loaded on page ${window.location.href}`);

        const template = document.createElement('template');
        template.innerHTML = `
        <link href="/css/style.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet">
        <div class="page container-fluid">
            <rts-header></rts-header>
            <main class="main row g-0">
                <!--Nav-->
                <div class="col col-lg-2">
                    <rts-nav></rts-nav>
                </div>
                <div class="col-sm-12 col-lg-10">
                    <section class="text-block">
                        <slot name="content"></slot>
                    </section>
                </div>
            </main>
            <rts-footer></rts-footer>
        </div>
        `;

        // Attach the shadow DOM and clone the template content into it
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        // Optional: Log slot content to debug
        const slot = shadowRoot.querySelector('slot[name="content"]');
        slot.addEventListener('slotchange', () => {
            console.log('Slot content changed:', slot.assignedNodes());
        });
    }

    disconnectedCallback() {
        console.log(`Layout was unloaded on page ${window.location.href}`);
    }
}

customElements.define("rts-layout", RTSLayout);