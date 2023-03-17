
const ul = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const button = document.querySelector('#msgButton')

button.addEventListener('click', onButtonClick)

function onButtonClick () {
    const todo = getTodoData()

    if (!isTodoValid(todo)) {
        showError()
        return
    }

    renderTodo(todo)
    clear()
}

function getTodoData () {
    return { message: input.value }
}

function isTodoValid (todo) { // is + validation target?
    return todo.message !== ''
}

function showError () {
    alert('Поле сообщение не должно быть пустым')
}

function renderTodo (todo) {
    const li = document.createElement('li')
    li.textContent = todo.message

    ul.append(li)
}

function clear () {
    input.value = ''
}