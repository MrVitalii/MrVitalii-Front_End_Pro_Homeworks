import {
    ACTION_TODO_CREATE,
    ACTION_TODO_REMOVE,
    ACTION_TODO_EDIT, ACTION_TODO_UPDATE, ACTION_SET_TODO_LIST,
} from '../actions/todo'

const DEFAULT_TODO = {done: false}

const initialState = {
    list: [],
    todoEdit: DEFAULT_TODO
}

export default function todoReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_TODO_CREATE:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...payload,
                    }
                ]
            }

        case ACTION_TODO_REMOVE:
            const newList = state.list.filter((todo) => todo.id !== payload)

            return {...state, list: newList}

        case ACTION_TODO_EDIT: return {...state, todoEdit: payload}
        case ACTION_SET_TODO_LIST: return {...state, list: payload}
        case ACTION_TODO_UPDATE:
            return {
                ...state,
                list: state.list.map(todo => todo.id === payload.id ? payload : todo),
                todoEdit: DEFAULT_TODO
            }

        default: return state
    }
}