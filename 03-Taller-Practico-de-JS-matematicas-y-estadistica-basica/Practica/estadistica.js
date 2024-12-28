// INTRO
// hello friend... hello friend?...
// anyway...
class ListInput extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  // Making the custom element
  getTemplate(){
    const listInput = document.createElement('template');
    listInput.innerHTML = `
      <h1>Estadistica Basica</h1>
    <h2>Formulas de Estadística Básica</h2>
    <h3>Media, Mediana y Moda</h3>
    <p>Ingresa tu lista de numeros separados por comas</p>
    <form>
        <label for="list">Lista de números:</label>
        <input type="text" id="list">
        <button type="submit">Calcular</button>
    </form>
    <p id="resultados">

    </p>
    ${this.getStyles()}
    `
    return listInput;
  }
  putVariables(){
    const listInputVariables = document.createElement('link');
    listInputVariables.rel = 'stylesheet';
    listInputVariables.href = './listInput.css';
    return listInputVariables;
  }
  getStyles(){
    return `
    <style>
      * {
    text-align: var(--List-Input-Text-Align);
}
    </style>
    `
  }
  
  // Others functions

  // Render
  render(){
    document.head.appendChild(this.putVariables());
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback(){
    this.render();
  }
}
customElements.define('list-input', ListInput)

// 
document.addEventListener('DOMContentLoaded') {

}


// PROMEDIO
function calcularPromedio(lista){
    // suma de los elementos de un array
    const sumaLista = lista.reduce((a,b) => a + b);

    // promedio
    const promedio = sumaLista / lista.length;
    alert(`
      Lista de objetos: ${lista}
      Promedio: ${promedio}
      `)
}

// MEDIANA
function esPar(lista){
  return !(lista.length % 2);
}
function calcularMediana(lista){
  const listaSorted = lista.sort((a,b)=>a-b)
  console.log(listaSorted)
  const listaEsPar = esPar(lista);
  
  if (listaEsPar){
    // ...
    const Mitad1ListaPar = lista[(lista.length / 2) - 1];
    const Mitad2ListaPar = lista[lista.length / 2];
    const listaMitades = [Mitad1ListaPar, Mitad2ListaPar];
    calcularPromedio(listaMitades)
  } else {
    // ...
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    alert(`
      Lista de objetos: ${lista}.
      Mediana: ${medianaListaImpar}.
    `)
    return medianaListaImpar;
  }
}

