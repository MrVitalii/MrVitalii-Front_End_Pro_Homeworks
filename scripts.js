const CLASS_TODO_ITEM = 'todoItem'
const CLASS_DONE = 'done'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_EDIT_BTN = 'editBtn'
const listEl = document.querySelector('#todoList')
const form = document.querySelector('#todoForm')
let todoList = []

form.addEventListener('submit', onFormSubmit)
form.addEventListener('keyup', onToDoListKeyup)
listEl.addEventListener('click', onTodoListClick)

TodoApi
    .getList()
    .then((list) => {
        renderTodoList(list)
        todoList = list
    })
    .catch(e => showError(e))

function onFormSubmit(e) {
    e.preventDefault()

    const todo = getTodoData()

    if (!isTodoValid(todo)) {
        showError(new Error('Поле сообщение не должно быть пустым'))
        return
    }

    if (todo.id) { // update
        TodoApi
            .update(todo.id, todo)
            .then((newTodo) => {
                replaceTodo(todo.id, newTodo)
                clearForm()
                todoList = todoList.map(todoItem => todoItem.id === todo.id ? newTodo : todoItem)
            })
            .catch(e => showError(e))
    } else { // create
        TodoApi
            .create(todo)
            .then((newTodo) => {
                renderTodo(newTodo)
                clearForm()
                todoList.push(newTodo)
            })
            .catch(e => showError(e))
    }
}

function onTodoListClick(e) {
    const target = e.target
    const todoEl = findTodoEl(target)

    if (!todoEl) {
        return
    }
    if (isDeleteBtn(target)) {
        deleteTodoEl(todoEl)
        return;
    } else if (isEditBtn(target)) {
        editTodoEl(todoEl)
        return;
    }

    toggleDone(todoEl)
}


function onToDoListKeyup(e) {
    if (e.key === 'Enter') {
        onFormSubmit()
    }
}

function isDeleteBtn(el) {
    return el.classList.contains(CLASS_DELETE_BTN)
}

function isEditBtn(el) {
    return el.classList.contains(CLASS_EDIT_BTN)
}

function findTodoEl(el) {
    return el.closest('.' + CLASS_TODO_ITEM)
}

function getTodoData() {
    const id = form.id.value
    const todo = findTodoById(id) || {} // undefined || {}

    return {
        ...todo,
        title: form.title.value,
    }
}

function deleteTodoEl(el) {
    const id = getTodoElId(el)

    TodoApi
        .delete(id)
        .catch(e => showError(e))

    el.remove()
    todoList = todoList.filter(todoItem => todoItem.id !== id)
}

function toggleDone(el) {
    const id = getTodoElId(el)
    const todo = findTodoById(id)

    todo.done = !todo.done

    TodoApi
        .update(id, todo)
        .catch(e => showError(e))

    el.classList.toggle(CLASS_DONE)
}

function editTodoEl(el) {
    const id = getTodoElId(el)
    const todo = findTodoById(id)

    fillForm(todo)
}

function isTodoValid(todo) {
    return todo.title !== ''
}

function renderTodoList(list) {
    const html = list.map(generatTodoHtml).join('')

    listEl.innerHTML = html
}

function replaceTodo(id, todo) {
    const oldTodoEl = document.querySelector(`[data-id="${id}"]`)
    const newTodoEl = generatTodoHtml(todo)

    oldTodoEl.outerHTML = newTodoEl
}

function renderTodo(todo) {
    const html = generatTodoHtml(todo)

    listEl.insertAdjacentHTML('beforeend', html)
}

function generatTodoHtml(todo) {
    const done = todo.done ? ' done' : ''

    return `
    <li
      class="todoItem${done}"
      data-id="${todo.id}"
    >
      <span>${todo.title}</span>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </li>
  `
}

function clearForm() {
    form.reset()
    form.id.value = ''
}

function fillForm(todo) {
    form.id.value = todo.id
    form.title.value = todo.title
}

function showError(error) { // instanceof Error
    alert(error.message)
}

function getTodoElId(el) {
    return el.dataset.id
}

function findTodoById(id) {
    return todoList.find(todo => todo.id === id)
}