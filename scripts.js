const rootDiv = document.querySelector('#rootDiv')
const ul = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const button = document.querySelector('#msgButton')

button.addEventListener('click', onButtonClick)
ul.addEventListener('click', onDeleteButtonClick)
rootDiv.addEventListener('click', onRootDivClick)


function onButtonClick() {
    const todo = getTodoData()

    if (!isTodoValid(todo)) {
        showError()
        return
    }

    renderTodo(todo)
    clear()
}

function onDeleteButtonClick(e) {
    if (e.target.classList.contains('deleteButton')) {
        const li = e.target.closest('li')
        ul.removeChild(li)
    }
}

function onRootDivClick(e) {
    const li = e.target.closest('li')
    if (li.style.backgroundColor === 'transparent') {
        li.style.backgroundColor = 'aquamarine'
    } else {
        li.style.backgroundColor = 'transparent'
    }

}

function getTodoData() {
    return {message: input.value}
}

function isTodoValid(todo) {
    return todo.message !== ''
}

function showError() {
    alert('Поле сообщение не должно быть пустым')
}

function renderTodo(todo) {
    const li = document.createElement('li')
    li.textContent = todo.message

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('deleteButton')
    li.appendChild(deleteButton)
    ul.append(li)
}

function clear() {
    input.value = ''
}




