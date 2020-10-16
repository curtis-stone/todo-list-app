// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
// import uuidv4 from 'uuid/v4'
// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage
// did in notes-app

import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo } from './todos'
renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()
    createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    })

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})