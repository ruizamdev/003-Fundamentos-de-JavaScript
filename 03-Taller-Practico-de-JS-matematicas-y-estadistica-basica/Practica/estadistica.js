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
    <p>Agrega cada elemento uno por uno, ingresandolo en el recuadro y dando click en agregar elemento</p>
    <form id="list-input">
        <label for="elements-input">Elemento:</label>
        <input type="text" id="elements-input" required>
        <button type="click" id="agregar">Agregar elemento</button>
        <button type="click" id="calcular">Calcular</button>
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
      list-input {
        display: var(--List-Input-Display);
        flex-direction: var(--List-Input-Flex-Direction);
      }

    </style>
    `
  }
  
  // Others functions
  startGame(){
    const form = this.shadowRoot.getElementById('list-input');
    const paragraphResults = this.shadowRoot.getElementById('resultados');
    
    let myArray = [];

    form.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target
      if (target.id === 'agregar'){
        let formInput = Number(this.shadowRoot.getElementById('elements-input').value);
        myArray.push(formInput);
        form.reset()
        paragraphResults.innerHTML = `
          Estos son los objetos de la lista (array):
          ${myArray}
        `
      } else if (target.id === 'calcular') {
        const secondParagraph = document.createElement('p')
        const list = myArray.sort((a,b)=>a-b);
        secondParagraph.innerText = `
          Lista ordenada automaticamente: ${list}.
          Cantidad de elementos en la lista: ${list.length}

          La media (Promedio) es de: ${Math.round(calcularPromedio(myArray))}
          La mediana es de: ${calcularMediana(myArray)}
          La moda es de: ${calcularModa(myArray)}
        `
        paragraphResults.appendChild(secondParagraph)
      } else {
        return;
      }
    })
  }


  // Render
  render(){
    document.head.appendChild(this.putVariables());
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    this.startGame();
  }
  connectedCallback(){
    this.render();
  }
}
customElements.define('list-input', ListInput);

// PROMEDIO
function calcularPromedio(listArray){
    // suma de los elementos de un array
    const sumaLista = listArray.reduce((a,b) => a + b);

    // promedio
    const promedio = sumaLista / listArray.length;
    return promedio;
}

// MEDIANA
function esPar(list){
  return !(list.length % 2);
}
function calcularMediana(list){
  const listSorted = list.sort((a,b)=>a-b)
  console.log(listSorted)
  const listEsPar = esPar(list);
  
  if (listEsPar){
    // ...
    const Mitad1ListaPar = list[(list.length / 2) - 1];
    const Mitad2ListaPar = list[list.length / 2];
    const listMitades = [Mitad1ListaPar, Mitad2ListaPar];
    calcularPromedio(listMitades)
  } else {
    // ...
    const indexMitadListaImpar = Math.floor(list.length / 2);
    const medianaListaImpar = list[indexMitadListaImpar];
    
    return medianaListaImpar;
  }
}

// MODA
function calcularModa(list){
  const listCount = {};
  for (let i = 0; i < list.length; i++){
    const element = list[i];
    if (listCount[element]){
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }
  console.log(listCount); 
  
}

