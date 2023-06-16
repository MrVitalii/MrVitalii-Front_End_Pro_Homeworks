import {OrdersApi} from "../../api/OrdersApi"

export const ACTION_ORDER_CREATE = 'ACTION_ORDER_CREATE'
export const ACTION_ORDER_REMOVE = 'ACTION_ORDER_REMOVE'
export const ACTION_ORDER_EDIT = 'ACTION_ORDER_EDIT'
export const ACTION_ORDER_UPDATE = 'ACTION_ORDER_UPDATE'
export const ACTION_SET_ORDER_LIST = 'ACTION_SET_ORDER_LIST'
export const ACTION_CLEAR_ORDER_EDIT = 'ACTION_CLEAR_ORDER_EDIT'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'

export function fetchOneOrder (id) {
    return (dispatch) => {
        OrdersApi.getOne(id).then((order) => {
            dispatch(setOrderEdit(order))
        })
    }
}

export function create (order) {
    return { type: ACTION_ORDER_CREATE, payload: order }
}

export function remove (id) {
    return (dispatch) => {
        OrdersApi.delete(id).then(() => {
            dispatch({ type: ACTION_ORDER_REMOVE, payload: id })
        })
    }
}

export function setOrderEdit (order) {
    return { type: ACTION_ORDER_EDIT, payload: order }
}

export function clearOrderEdit () {
    return { type: ACTION_CLEAR_ORDER_EDIT }
}

export function update (order) {
    return { type: ACTION_ORDER_UPDATE, payload: order }
}

export function setOrderList (list) {
    return { type: ACTION_SET_ORDER_LIST, payload: list }
}

export function save (order) {
    return (dispatch) => {
        if (order.id) { // update
            OrdersApi.update(order.id, order).then(() => {
                dispatch(update(order))
            })
        } else { // create
            OrdersApi.create(order).then((orderWithId) => {
                dispatch(create(orderWithId))
            })
        }
    }
}