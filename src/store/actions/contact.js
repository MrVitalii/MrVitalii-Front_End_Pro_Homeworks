import {ContactApi} from "../../api/ContactApi"

export const ACTION_CONTACT_CREATE = 'ACTION_CONTACT_CREATE'
export const ACTION_CONTACT_REMOVE = 'ACTION_CONTACT_REMOVE'
export const ACTION_CONTACT_EDIT = 'ACTION_CONTACT_EDIT'
export const ACTION_CONTACT_UPDATE = 'ACTION_CONTACT_UPDATE'
export const ACTION_SET_CONTACT_LIST = 'ACTION_SET_CONTACT_LIST'
export const ACTION_CLEAR_CONTACT_EDIT = 'ACTION_CLEAR_CONTACT_EDIT'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'

export function fetchContacts () {
  return (dispatch) => {
    ContactApi.getList().then((newList) => {
      dispatch(setTodoList(newList))
    })
  }
}

export function fetchOneContact (id) {
  return (dispatch) => {
    ContactApi.getOne(id).then((todo) => {
      dispatch(setTodoEdit(todo))
    })
  }
}

export function create (todo) {
  return { type: ACTION_CONTACT_CREATE, payload: todo }
}

export function remove (id) {
  return (dispatch) => {
    ContactApi.delete(id).then(() => {
      dispatch({ type: ACTION_CONTACT_REMOVE, payload: id })
    })
  }
}

export function setTodoEdit (todo) {
  return { type: ACTION_CONTACT_EDIT, payload: todo }
}

export function setFilter (filter) {
  return { type: ACTION_SET_FILTER, payload: filter }
}

export function clearContactEdit () {
  return { type: ACTION_CLEAR_CONTACT_EDIT }
}

export function update (todo) {
  return { type: ACTION_CONTACT_UPDATE, payload: todo }
}

export function setTodoList (list) {
  return { type: ACTION_SET_CONTACT_LIST, payload: list }
}

export function save (todo) {
  return (dispatch) => {
    if (todo.id) { // update
      ContactApi.update(todo.id, todo).then(() => {
        dispatch(update(todo))
      })
    } else { // create
      ContactApi.create(todo).then((todoWithId) => {
        dispatch(create(todoWithId))
      })
    }
  }
}