import {
    ACTION_TABLE_CREATE,
    ACTION_TABLE_REMOVE,
    ACTION_TABLE_EDIT,
    ACTION_TABLE_UPDATE,
    ACTION_SET_TABLE_LIST,
    ACTION_CLEAR_TABLE_EDIT, ACTION_SET_FILTER
} from '../actions/tables'

export const DEFAULT_TABLE = { done: false, title: '' };



const initialState = {
    list: [],
    tableEdit: DEFAULT_TABLE,

}

export default function tablesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_TABLE_CREATE: return {
            ...state,
            list: [
                ...state.list,
                {
                    ...payload,
                },
            ],
        }
        case ACTION_TABLE_REMOVE:
            const newList = state.list.filter(table => table.id !== payload)

            return { ...state, list: newList }
        case ACTION_TABLE_EDIT: return { ...state, tableEdit: payload }
        case ACTION_CLEAR_TABLE_EDIT: return { ...state, tableEdit: DEFAULT_TABLE }
        case ACTION_SET_TABLE_LIST: return { ...state, list: payload }
        case ACTION_SET_FILTER: return { ...state, filter: payload }
        case ACTION_TABLE_UPDATE: return {
            ...state,
            list: state.list.map(table => table.id === payload.id ? payload: table),
            tableEdit: DEFAULT_TABLE,
        }
        default: return state
    }
}