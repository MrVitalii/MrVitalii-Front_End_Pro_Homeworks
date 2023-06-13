import {OrdersApi} from "../../api/OrdersApi"

export const ACTION_ORDER_CREATE = 'ACTION_ORDER_CREATE'
export const ACTION_ORDER_REMOVE = 'ACTION_ORDER_REMOVE'
export const ACTION_ORDER_EDIT = 'ACTION_ORDER_EDIT'
export const ACTION_ORDER_UPDATE = 'ACTION_ORDER_UPDATE'
export const ACTION_SET_ORDER_LIST = 'ACTION_SET_ORDER_LIST'
export const ACTION_CLEAR_ORDER_EDIT = 'ACTION_CLEAR_ORDER_EDIT'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'

export function fetchOrders () {
    return (dispatch) => {
        OrdersApi.getList().then((newList) => {
            dispatch(setOrderList(newList))
        })
    }
}

export function fetchOneOrder (id) {
    return (dispatch) => {
        OrdersApi.getOne(id).then((waiter) => {
            dispatch(setOrderEdit(waiter))
        })
    }
}

export function create (waiter) {
    return { type: ACTION_ORDER_CREATE, payload: waiter }
}

export function remove (id) {
    return (dispatch) => {
        OrdersApi.delete(id).then(() => {
            dispatch({ type: ACTION_ORDER_REMOVE, payload: id })
        })
    }
}

export function setOrderEdit (waiter) {
    return { type: ACTION_ORDER_EDIT, payload: waiter }
}

export function setFilter (filter) {
    return { type: ACTION_SET_FILTER, payload: filter }
}

export function clearOrderEdit () {
    return { type: ACTION_CLEAR_ORDER_EDIT }
}

export function update (waiter) {
    return { type: ACTION_ORDER_UPDATE, payload: waiter }
}

export function setOrderList (list) {
    return { type: ACTION_SET_ORDER_LIST, payload: list }
}

export function save (waiter) {
    return (dispatch) => {
        if (waiter.id) { // update
            OrdersApi.update(waiter.id, waiter).then(() => {
                dispatch(update(waiter))
            })
        } else { // create
            OrdersApi.create(waiter).then((waiterWithId) => {
                dispatch(create(waiterWithId))
            })
        }
    }
}