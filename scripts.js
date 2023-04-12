const ul = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const button = document.querySelector('#msgButton')

button.addEventListener('click', onButtonClick)
ul.addEventListener('click', onUlClick)
input.addEventListener('keyup', onInputKeyup)

init()

function init() {
    TodoApi
        .getList()
        .then((list) => {
            renderTodoList(list)
        })
        .catch(err => showError(err))
}

function onButtonClick() {
    const todo = getTodoData()

    if (!isTodoValid(todo)) {
        showError(new Error('Поле сообщение не должно быть пустым'))
        return
    }

    TodoApi
        .create(todo)
        .then((newTodo) => {
            renderTodo(newTodo)
            clear()
        })
        .catch(err => showError(err))
}

function onUlClick(e) {
    const li = e.target.closest('li')
    const id = li.getAttribute('id')

    if (e.target.classList.contains('deleteButton')) {

        TodoApi
            .delete(id)
            .then(() => {
                deleteUl(li)
            })
            .catch(err => showError(err))
    }

    if (li.style.backgroundColor === 'transparent') {
        li.style.backgroundColor = 'aquamarine'
    } else {
        li.style.backgroundColor = 'transparent'
    }
}

function onInputKeyup(e) {
    if (e.key === 'Enter') {
        onButtonClick()
    }
}

function getTodoData() {
    return {title: input.value}
}

function isTodoValid(todo) {
    return todo.title !== ''
}

function showError(error) {
    alert(error.message)
}

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('')

    ul.innerHTML = html
}

function renderTodo(todo) {
    const html = generateTodoHtml(todo)

    ul.insertAdjacentHTML('beforeend', html)
}

function generateTodoHtml(todo) {
    return `
        <li style="background-color: transparent" id="${todo.id}">
        <span class="todo-message">${todo.title}</span>
        <button class="deleteButton">Delete</button>
        </li>
    `
}

function deleteUl(li) {
    ul.removeChild(li)
}

function clear() {
    input.value = ''
}