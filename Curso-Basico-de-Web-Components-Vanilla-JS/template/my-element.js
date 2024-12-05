// CUSTOM TAG
class myElement extends HTMLElement {
    // Primer ciclo de vida del componente
    constructor() {
        super();
    }; 
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
        <h2>Hola Mundo!</h2>
        <div>
            <p>soy mas texto ejemplo</p>
        </div>
    </section>
    ${this.getStyles()}
        `;
        return template
    }
    getStyles() {
        return `
        <style>
            h2 {color: red}
            p {color: blue}
        </style>
        `;
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
};
customElements.define('my-element', myElement);