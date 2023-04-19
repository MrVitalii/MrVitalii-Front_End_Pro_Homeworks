class TodoListView {
    static DELETE_BTN = '.deleteBtn'
    static EDIT_BTN = '.editBtn'
    static SELECTOR_TODO_ITEM = '.todoItem'

    constructor(options) {
        this.$ListEl = this.init()
        this.options = options
    }

    init() {
        return $(`<ul id="todoList"></ul>`)
            .on('click', TodoListView.EDIT_BTN, this.onEditBtnClick.bind(this))
            .on('click', TodoListView.DELETE_BTN, this.onDeleteBtnClick.bind(this))
            .on('click', TodoListView.SELECTOR_TODO_ITEM, this.onTodoElClick.bind(this))
    }


    onDeleteBtnClick(e) {
        e.stopPropagation()

        const id = this.getTodoElId(e.target)

        this.options.onDelete(id)

    }

    onEditBtnClick(e) {
        e.stopPropagation()

        const id = this.getTodoElId(e.target)

        this.options.onEdit(id)

    }

    onTodoElClick(e) {
        e.stopPropagation()

        const id = this.getTodoElId(e.target)

        this.options.onToggle(id)
    }

    getTodoElId(el) {
        return el.closest(TodoListView.SELECTOR_TODO_ITEM).dataset.id
    }

    appendTo($el) {
        $el.append(this.$ListEl)
    }

    renderTodoList(list) {
        const html = list.map(this.generateTodoHtml).join('')

        this.$ListEl.html(html)
    }

    replaceTodo(id, todo) {
        const oldTodoEl = this.$ListEl.find(`[data-id="${id}"]`)
        const newTodoEl = this.generateTodoHtml(todo)

        oldTodoEl.replaceWith(newTodoEl)
    }

    renderTodo(todo) {
        const html = this.generateTodoHtml(todo)

        this.$ListEl.append(html)
    }

    generateTodoHtml(todo) {
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

    removeTodo(id) {
        this.$ListEl.find(`[data-id="${id}"]`).remove()
    }
}