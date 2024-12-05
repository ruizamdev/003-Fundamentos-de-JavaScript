// TEMPLATE

const template = document.createElement('div');
template.innerHTML = `
<style>
    .texto {
    color: red;
    }
    p {
    color: blue;
    }
</style>
<p class="texto">Bueeeeenos Diaaaaas Night City!!!</p>
<p>Texto ejemplo para la clase!</p>`


// CUSTOM TAG

class myElement extends HTMLElement {
    // Primer ciclo de vida del componente
    constructor() {
        super();
        // console.log('Hola mundo');

        this.p = document.createElement('p');
    }; 
    connectedCallback() {
        // segundo ciclo de vida del componente.
        this.p.textContent = "Hola Mundo!!";
        this.appendChild(this.p);
        this.appendChild(template);
    }
};
customElements.define('my-element', myElement);

