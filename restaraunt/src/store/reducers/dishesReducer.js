import {
    ACTION_DISH_CREATE,
    ACTION_DISH_REMOVE,
    ACTION_DISH_EDIT,
    ACTION_DISH_UPDATE,
    ACTION_SET_DISH_LIST,
    ACTION_CLEAR_DISH_EDIT, ACTION_SET_FILTER
} from '../actions/dishes'

export const DEFAULT_DISH = {}


const initialState = {
    list: [],
    dishEdit: DEFAULT_DISH,

}

export default function dishesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_DISH_CREATE: return {
            ...state,
            list: [
                ...state.list,
                {
                    ...payload,
                },
            ],
        }
        case ACTION_DISH_REMOVE:
            const newList = state.list.filter(dish => dish.id !== payload)

            return { ...state, list: newList }
        case ACTION_DISH_EDIT: return { ...state, dishEdit: payload }
        case ACTION_CLEAR_DISH_EDIT: return { ...state, dishEdit: DEFAULT_DISH }
        case ACTION_SET_DISH_LIST: return { ...state, list: payload }
        case ACTION_SET_FILTER: return { ...state, filter: payload }
        case ACTION_DISH_UPDATE: return {
            ...state,
            list: state.list.map(dish => dish.id === payload.id ? payload: dish),
            dishEdit: DEFAULT_DISH,
        }
        default: return state
    }
}