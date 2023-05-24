export const ACTION_TODO_CREATE = 'create'
export const ACTION_TODO_REMOVE = 'remove'
export const ACTION_TODO_EDIT = 'edit'

export function create(todo) {
    return {type: ACTION_TODO_CREATE, payload: todo}
}

export function remove(id) {
    return {type: ACTION_TODO_REMOVE, payload: id}
}

export function edit(todo) {
    return {type: ACTION_TODO_EDIT, payload: todo}
}