import {WaitersApi} from "../../api/WaitersApi"

export const ACTION_WAITER_CREATE = 'ACTION_WAITER_CREATE'
export const ACTION_WAITER_REMOVE = 'ACTION_WAITER_REMOVE'
export const ACTION_WAITER_EDIT = 'ACTION_WAITER_EDIT'
export const ACTION_WAITER_UPDATE = 'ACTION_WAITER_UPDATE'
export const ACTION_SET_WAITER_LIST = 'ACTION_SET_WAITER_LIST'
export const ACTION_CLEAR_WAITER_EDIT = 'ACTION_CLEAR_WAITER_EDIT'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'

export function fetchWaiters () {
  return (dispatch) => {
    WaitersApi.getList().then((newList) => {
      dispatch(setWaiterList(newList))
    })
  }
}

export function fetchOneWaiter (id) {
  return (dispatch) => {
    WaitersApi.getOne(id).then((waiter) => {
      dispatch(setWaiterEdit(waiter))
    })
  }
}

export function create (waiter) {
  return { type: ACTION_WAITER_CREATE, payload: waiter }
}

export function remove (id) {
  return (dispatch) => {
    WaitersApi.delete(id).then(() => {
      dispatch({ type: ACTION_WAITER_REMOVE, payload: id })
    })
  }
}

export function setWaiterEdit (waiter) {
  return { type: ACTION_WAITER_EDIT, payload: waiter }
}

export function setFilter (filter) {
  return { type: ACTION_SET_FILTER, payload: filter }
}

export function clearWaiterEdit () {
  return { type: ACTION_CLEAR_WAITER_EDIT }
}

export function update (waiter) {
  return { type: ACTION_WAITER_UPDATE, payload: waiter }
}

export function setWaiterList (list) {
  return { type: ACTION_SET_WAITER_LIST, payload: list }
}

export function save (waiter) {
  return (dispatch) => {
    if (waiter.id) { // update
      WaitersApi.update(waiter.id, waiter).then(() => {
        dispatch(update(waiter))
      })
    } else { // create
      WaitersApi.create(waiter).then((waiterWithId) => {
        dispatch(create(waiterWithId))
      })
    }
  }
}