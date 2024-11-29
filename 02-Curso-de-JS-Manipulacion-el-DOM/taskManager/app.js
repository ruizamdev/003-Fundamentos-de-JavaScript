// Se crea una constante con el elemento form con id 'task-form'
const taskForm = document.getElementById('task-form');
// Se crea una constante con el elemento ul con id 'task-list'
const taskList = document.getElementById('task-list');

// Se cargan las tareas almacenadas en caché con localStorage mediante la función loadtasks()
loadTasks()

// Generando el evento para tomar la entrada del input
taskForm.addEventListener('submit', (event) => {
    // Previene que se recarge la pagina al enviar los datos con submit
    event.preventDefault();
    // Se obtiene el elemento input
    const taskInput = document.getElementById('task-input');
    // Se obtienen los datos ingresados en input
    const task = taskInput.value;
    // Se muestran los datos obtenidos en consola
    console.log(task);
    // Si se obtiene algún dato...
    if (task) {
        // ...se agrega a la lista de tareas mediante la función createTaskElement()
        taskList.append(createTaskElement(task));
        // Se guardan los datos también en localStorage
        storeTaskInLocalStorage(task);
        // Se borra el contenido de la constante taskInput para obtener un nuevo dato.
        taskInput.value="";
    }

})

// Función para crear el elemento de tarea
function createTaskElement(task) {
    // Se declara una constante que almacena la creación de un elemento li
    const li = document.createElement('li');
    // Se le agrega el contenido con los datos obtenidos en el evento submit en taskForm
    li.textContent = task;
    // Se agregan los botones mediante la función createButton
    li.append(createButton("❌", "delete-btn"), createButton("✏️", 'edit-btn'));
    // retorna el elemento li creado
    return li;
}

// Función para crear los botones, ingresando dos parámetros: text y className
function createButton(text, className) {
    // Se crea una constante btn que almacena la creación de un elemento span
    const btn = document.createElement('span');
    // Se le agrega texto al botón
    btn.textContent = text;
    // Se le agrega una clase
    btn.className = className;
    // retorna el botón
    return btn;
}

// Evento para detectar si se quiere editar o eliminar alguna tarea
taskList.addEventListener('click', (event) => {
    // Si el target que desencadeno el evento contiene una clase llamada 'delete-btn'...
    if(event.target.classList.contains('delete-btn')) {
        // ...entonces se elimina la tarea mediante la función deleteTask()...
        deleteTask(event.target.parentElement)
        // ...pero si el target que desencadeno el evento contiene una clase llamada 'edit-btn'...
    } else if (event.target.classList.contains('edit-btn')) {
        // ...entonces se edita la tarea mediante la función editTask()
        editTask(event.target.parentElement);
    }
})

// Función para borrar una tarea
function deleteTask(taskItem) {
    // Si se confirma que se desea borrar la tarea...
    if(confirm('Are you sure?')){
        // ...entonces se borra
        taskItem.remove();
        // y se actualiza el localStorage
        updateLocalStorage();
    }
}

// Función para editar una tarea
function editTask(taskItem) {
    // Se crea una constante que almacena un prompt para editar la tarea
    const newTask = prompt('Edita la tarea:', taskItem.firstChild.textContent);
    if(newTask !== null) {
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    }
}

// API (Application Programming Interface) LocalStorage

function storeTaskInLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Inyectar datos almacenados en localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task))
    })
}

// Actualizar localStorage al editar o eliminar tareas
function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 
const themeToggleButton = document.getElementById('toggle-theme-btn');
const currentTheme = localStorage.getItem('theme');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme)
})

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}