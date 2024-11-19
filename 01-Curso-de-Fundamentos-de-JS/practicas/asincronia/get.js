// Inicialización de variables
const listElement = document.querySelector(".posts")
const postTemplate = document.getElementById("single-post")
const form = document.querySelector("#new-post form")
const fetchButton = document.querySelector("#available-posts button")
const postList = document.querySelector("#posts-container")

/* Función para enviar peticiones HTTP mediante fetch, 
 configurando el método, la URL y los datos a enviar */
function sendHTTPRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then ((response) => {
        return response.json()
    })
}

// Función asíncrona para obtener los posts de la API y mostrarlos en el DOM
async function fetchPosts() {
    const responseData = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    console.log(responseData)
    const listOfPosts = responseData
    for (const post of listOfPosts) {
        const postContainer = document.createElement("article")
        postContainer.id = post.id
        postContainer.classList.add("post-item")

        const title = document.createElement("h2")
        title.textContent = post.title

        const body = document.createElement("p")
        body.textContent = post.body

        const button = document.createElement("button")
        button.textContent = "DELETE"

        postContainer.append(title)
        postContainer.append(body)
        postContainer.append(button)
        
        listElement.append(postContainer)
    }
}

// Evento click para obtener los posts de la API
fetchButton.addEventListener("click", fetchPosts)

// Función asíncrona para crear un nuevo post en la API
async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    }

    sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post)
}

// Evento submit para enviar el nuevo post a la API
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const title = event.currentTarget.querySelector("#title").value
    const content = event.currentTarget.querySelector("#content").value

    createPost(title, content)
})

// Evento click sobre el padre de los posts para eliminar un post en particular
postList.addEventListener("click", (event) => {
    console.log(event)
    if (event.target.tagName === "BUTTON") {
        const postId = event.target.closest("article").id
        console.log(postId)
        sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})