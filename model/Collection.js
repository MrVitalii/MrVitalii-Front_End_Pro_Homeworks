class Collection {
    static DEFAULT_TODO = {
        done: false,
    }

    #todoList = []

    fetch() {
        return TodoApi
            .getList()
            .then((list) => {
                this.#todoList = list
            })
    }

    create(todo) {
        return TodoApi
            .create({
                ...Collection.DEFAULT_TODO,
                ...todo,
            })
            .then((newTodo) => {
                this.addListItem(newTodo)

                return newTodo
            })
    }

    update(id, todo) {
        return TodoApi
            .update(id, todo)
            .then((newTodo) => {
                this.editListItem(id, newTodo)

                return newTodo
            })
    }

    delete(id) {
        this.deleteListItem(id)
        TodoApi.delete(id)

        return Promise.resolve()
    }

    getList() {
        return this.#todoList
    }

    deleteListItem(id) {
        this.#todoList = this.#todoList
            .filter(todoItem => todoItem.id !== id)
    }

    editListItem(id, todo) {
        this.#todoList = this.#todoList
            .map(todoItem => todoItem.id === id ? todo : todoItem)
    }

    addListItem(todo) {
        this.#todoList.push(todo)
    }

    find(id) {
        return this.#todoList.find(todo => todo.id === id)
    }
}