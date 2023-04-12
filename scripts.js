const ul = $('#todoList')
const input = $('#msgInput')
const button = $('#msgButton')

button.on('click', onButtonClick)
ul.on('click', onUlClick)
input.on('keyup', onInputKeyup)

init()

function init() {
    TodoApi.getList()
        .then((list) => {
            renderTodoList(list)
        })
        .catch((err) => showError(err))
}

function onButtonClick() {
    const todo = getTodoData()

    if (!isTodoValid(todo)) {
        showError(new Error('Поле сообщение не должно быть пустым'))
        return
    }

    TodoApi.create(todo)
        .then((newTodo) => {
            renderTodo(newTodo)
            clear()
        })
        .catch((err) => showError(err))
}

function onUlClick(e) {
    const li = $(e.target).closest('li')
    const id = li.attr('id')

    if ($(e.target).hasClass('deleteButton')) {
        TodoApi.delete(id)
            .then(() => {
                deleteUl(li)
            })
            .catch((err) => showError(err))
        return
    }

    if (li.css('background-color') === 'rgba(0, 0, 0, 0)') {
        li.css('background-color', 'aquamarine')
    } else {
        li.css('background-color', 'transparent')
    }
}

function onInputKeyup(e) {
    if (e.key === 'Enter') {
        onButtonClick()
    }
}

function getTodoData() {
    return { title: input.val() }
}

function isTodoValid(todo) {
    return todo.title !== ''
}

function showError(error) {
    alert(error.message)
}

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('')

    ul.html(html)
}

function renderTodo(todo) {
    const html = generateTodoHtml(todo)

    ul.append(html)
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
    li.remove()
}

function clear() {
    input.val('')
}