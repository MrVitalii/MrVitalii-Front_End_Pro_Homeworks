import {
  ACTION_WAITER_CREATE,
  ACTION_WAITER_REMOVE,
  ACTION_WAITER_EDIT,
  ACTION_WAITER_UPDATE,
  ACTION_SET_WAITER_LIST,
  ACTION_CLEAR_WAITER_EDIT, ACTION_SET_FILTER
} from '../actions/waiters'

export const DEFAULT_WAITER = {}


const initialState = {
  list: [],
  waiterEdit: DEFAULT_WAITER
}

export default function waitersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_WAITER_CREATE: return {
      ...state,
      list: [
        ...state.list,
        {
          ...payload,
        },
      ],
    }
    case ACTION_WAITER_REMOVE:
      const newList = state.list.filter(waiter => waiter.id !== payload)

      return { ...state, list: newList }
    case ACTION_WAITER_EDIT: return { ...state, waiterEdit: payload }
    case ACTION_CLEAR_WAITER_EDIT: return { ...state, waiterEdit: DEFAULT_WAITER }
    case ACTION_SET_WAITER_LIST: return { ...state, list: payload, waiterEdit: DEFAULT_WAITER }
    case ACTION_SET_FILTER: return { ...state, filter: payload }
    case ACTION_WAITER_UPDATE: return {
      ...state,
      list: state.list.map(waiter => waiter.id === payload.id ? payload: waiter),
      waiterEdit: DEFAULT_WAITER,
    }
    default: return state
  }
}