import { Todo } from "./classes/Todo.js";

// Select Elements form DOM
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const todoListItem = document.querySelector('#listItem');
const todoMessage = document.querySelector('#todoMessage')

// Functions
// getTodosFromLocalStorage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem('mytodos')? JSON.parse(localStorage.getItem('mytodos')): [];
}

//showMessage
const showMessage = (text, status) => {
    todoMessage.textContent = text;
    todoMessage.classList.add(`bg-${status}`); // dynamic add class 'bg-success & bg-danger'
    setTimeout(() => {
        todoMessage.textContent = '';
        todoMessage.classList.remove(`bg-${status}`);
    }, 1000)
    
}

//deleteTodo
const deleteTodo = (event) => {
    const selectedItem = event.target.parentElement.parentElement.parentElement;
    todoListItem.removeChild(selectedItem);
    showMessage('todo is deleted', 'danger');
    let todos = getTodosFromLocalStorage(); //get all todos form local storage
    todos = todos.filter((todo) => {
        return todo.todoID !== selectedItem.id; // return all todos except selected todo 
    });
    localStorage.setItem('mytodos', JSON.stringify(todos));
}

// createTodo
const createTodo = (newTodo) => {
    const listItem = document.createElement('li');
    listItem.id = newTodo.todoID;
    listItem.classList.add('li-item');
    listItem.innerHTML = `
        <span>${newTodo.todoValue}</span>
        <span><button id="deleteButton" class="btn"><i class="fa-solid fa-trash"></i></button></span>
    `;
    todoListItem.appendChild(listItem);
    const deleteButton = listItem.querySelector('#deleteButton');
    deleteButton.addEventListener('click', deleteTodo);
}

// addTodo
const addTodo = (event) => {
    event.preventDefault();   
    // todoVlaue 
    const todoValue = todoInput.value;
    // Create Unique ID
    const todoID = Date.now().toString();

    const newTodo = new Todo(todoID, todoValue);

    // Create Todo
    createTodo(newTodo);
    showMessage('todo is added', 'success');

    // Store todo to localStorage
    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    localStorage.setItem('mytodos', JSON.stringify(todos));

    // Empty Input value
    todoInput.value = '';
}

const loadTodo = () => {
    const todo = getTodosFromLocalStorage();
    todo.map(todo => createTodo(todo));
}

// Add Listerer
todoForm.addEventListener('submit', addTodo);
window.addEventListener('DOMContentLoaded', loadTodo);