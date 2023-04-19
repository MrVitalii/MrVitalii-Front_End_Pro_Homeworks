class Controller {
    constructor($rootEl) {
        this.todoCollection = new Collection()
        this.todoFormView = new TodoFormView({onSubmit: this.save.bind(this)})
        this.todoListView = new TodoListView(
            {
                onDelete: this.deleteTodoEl.bind(this),
                onEdit: (id) => {
                    const todo = this.todoCollection.find(id)

                    this.todoFormView.setFormData(todo)
                },

                onToggle: this.toggleDone.bind(this)
            }
        )

        this.todoFormView.appendTo($rootEl)
        this.todoListView.appendTo($rootEl)

        this.todoCollection.fetch().then(() => {
            this.todoListView.renderTodoList(this.todoCollection.getList())
        })

    }

    save(todo) {
        if (todo.id) { // update
            this.todoCollection.update(todo.id, todo)
                .then((newTodo) => {
                    this.todoListView.replaceTodo(todo.id, newTodo)
                    this.todoFormView.clearFormData()
                })
                .catch(e => showError(e))

        } else { // create
            this.todoCollection.create(todo)
                .then((newTodo) => {
                    this.todoListView.renderTodo(newTodo)
                    this.todoFormView.clearFormData()
                })
                .catch(e => showError(e))
        }
    }

    deleteTodoEl(id) {
        this.todoCollection.delete(id).catch(e => showError(e))

        this.todoListView.removeTodo(id)
    }

    toggleDone(id) {
        const todo = this.todoCollection.find(id)

        todo.done = !todo.done

        this.todoCollection
            .update(id, todo)
            .catch(e => showError(e))

        this.todoListView.replaceTodo(id, todo)
    }
}