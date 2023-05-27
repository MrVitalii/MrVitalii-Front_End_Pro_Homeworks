import TodoApi from "../../api/TodoApi"

export const ACTION_TODO_CREATE = 'create'
export const ACTION_TODO_REMOVE = 'remove'
export const ACTION_TODO_EDIT = 'edit'
export const ACTION_TODO_UPDATE = 'update'
export const ACTION_SET_TODO_LIST = 'set-todo-list'

export function create(todo) {
    return {type: ACTION_TODO_CREATE, payload: todo}
}

export function remove(id) {
    return {type: ACTION_TODO_REMOVE, payload: id}
}

export function edit(todo) {
    return {type: ACTION_TODO_EDIT, payload: todo}
}

export function update(todo) {
    return {type: ACTION_TODO_UPDATE, payload: todo}
}

export function setTodoList(list) {
    return {type: ACTION_SET_TODO_LIST, payload: list}
}

export function fetchTodos() {
    return (dispatch) => {
        TodoApi.getList().then((newList) => {
            dispatch(setTodoList(newList))
        })
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        TodoApi.delete(id).then(() => {
            dispatch(remove(id))
        })
    }
}

export function updateTodoStatus (todo) {
    const newTodo = {
        ...todo,
        done: !todo.done,
    };

    return save(newTodo)
}

export function save(todo) {
    return (dispatch) => {
        if (todo.id) {
            TodoApi.update(todo.id, todo).then(() => {
                dispatch(update(todo))
            })
        } else {
            TodoApi.create(todo).then((todoWithId) => {
                dispatch(create(todoWithId))
            })
        }
    }
}