// API Promises Fetch & Asynchronous Programming

// API
/*
    Application Programming Interface
        - Code that communicates our client requests with the server
        - The server then sends our responses
        - Done using HTTP Requests
    HTTP Requests
        - Action to be performed on a given resource
        - Occurs between client and server
        - Client sends a request
            - GET
            - POST
            - PUT
            - DELETE
        - Server sends a response back
            - Response body
            - Status code
        - requires a URL which is a route to access info
*/

// Asynchronous Programming
/*
    - Allows our code to run concurrently with other requets, including responses we wait on from an API.
    - Fetch() method is an asynchronous method, and is part of the browser window, not JavaScript (will not run on Node.js)
*/

// Promises
/*
    Promise represents a value that is uknown when the promise is created, but represents the eventual fulfilled value or rejection.
    Three states:
        - Pending: initial state (not fulfilled nor rejected)
        - Fulfilled: completed successfully
        - Rejected: Operation failed
*/

const baseURL = `https://api.spacexdata.com/v2/rockets`

const searchForm = document.querySelector("form")
const spaceShips = document.querySelector("ul")
const button = document.querySelector("#submit")
console.log(button)

button.addEventListener("click", fetchSpace)

function fetchSpace(event) {
    event.preventDefault()
    fetch(baseURL)
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
            displayRockets(json)
        })
}

function displayRockets(rockets) {
    // console.log(`Results: ${rockets}`)
    rockets.forEach(r => {
        let rocket = document.createElement("li")
        rocket.innerText = r.name
        spaceShips.appendChild(rocket)
    })
}
