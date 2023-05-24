import {
    ACTION_TODO_CREATE,
    ACTION_TODO_REMOVE,
    ACTION_TODO_EDIT
} from '../actions/todo'

const DEFAULT_TODO = { done: false }

const initialState = {
    list: [
        { "title": "facere blanditiis illumvddv", "status": true, "done": false, "id": "96", "toDo": "" },
        { "title": "itaque eveniet rationevdvdsvds", "status": true, "done": true, "id": "98", "toDo": "" },
        { "title": "molestiae nemo minus", "status": true, "done": true, "id": "99", "toDo": "" },
    ],
    todoEdit: DEFAULT_TODO,
}

export default function todoReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_TODO_CREATE: return {
            ...state,
            list: [
                ...state.list,
                {
                    ...payload,
                    id: Math.random()
                },
            ],
        }
        case ACTION_TODO_REMOVE:
            const newList = state.list.filter(todo => todo.id !== payload)

            return { ...state, list: newList }

        // Запиши в стейт туду який редагуєш, подумай як це
        // правильно зробити: todoEdit: payload
        case ACTION_TODO_EDIT:
            return {...state, todoEdit: payload}
        default: return state
    }
}