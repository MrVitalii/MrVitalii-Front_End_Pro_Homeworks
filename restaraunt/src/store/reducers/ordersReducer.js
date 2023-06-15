import {
    ACTION_ORDER_CREATE,
    ACTION_ORDER_REMOVE,
    ACTION_ORDER_EDIT,
    ACTION_ORDER_UPDATE,
    ACTION_SET_ORDER_LIST,
    ACTION_CLEAR_ORDER_EDIT, ACTION_SET_FILTER
} from '../actions/orders'

export const DEFAULT_ORDER = {};

const initialState = {
    list: [],
    ordersEdit: DEFAULT_ORDER,

}

export default function ordersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_ORDER_CREATE: return {
            ...state,
            list: [
                ...state.list,
                {
                    ...payload,
                },
            ],
        }
        case ACTION_ORDER_REMOVE:
            const newList = state.list.filter(orders => orders.id !== payload)

            return { ...state, list: newList }
        case ACTION_ORDER_EDIT: return { ...state, ordersEdit: payload }
        case ACTION_CLEAR_ORDER_EDIT: return { ...state, ordersEdit: DEFAULT_ORDER }
        case ACTION_SET_ORDER_LIST: return { ...state, list: payload }
        case ACTION_SET_FILTER: return { ...state, filter: payload }
        case ACTION_ORDER_UPDATE: return {
            ...state,
            list: state.list.map(orders => orders.id === payload.id ? payload: orders),
            ordersEdit: DEFAULT_ORDER,
        }
        default: return state
    }
}