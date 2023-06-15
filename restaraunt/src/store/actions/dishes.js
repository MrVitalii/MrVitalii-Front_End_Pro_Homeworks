import {DishesApi} from "../../api/DishesApi"

export const ACTION_DISH_CREATE = 'ACTION_DISH_CREATE'
export const ACTION_DISH_REMOVE = 'ACTION_DISH_REMOVE'
export const ACTION_DISH_EDIT = 'ACTION_DISH_EDIT'
export const ACTION_DISH_UPDATE = 'ACTION_DISH_UPDATE'
export const ACTION_SET_DISH_LIST = 'ACTION_SET_DISH_LIST'
export const ACTION_CLEAR_DISH_EDIT = 'ACTION_CLEAR_DISH_EDIT'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'

export function fetchDishes () {
    return (dispatch) => {
        DishesApi.getList().then((newList) => {
            dispatch(setDishList(newList))
        })
    }
}

export function fetchOneDish (id) {
    return (dispatch) => {
        DishesApi.getOne(id).then((dish) => {
            dispatch(setDishEdit(dish))
        })
    }
}

export function create (dish) {
    return { type: ACTION_DISH_CREATE, payload: dish }
}

export function remove (id) {
    return (dispatch) => {
        DishesApi.delete(id).then(() => {
            dispatch({ type: ACTION_DISH_REMOVE, payload: id })
        })
    }
}

export function setDishEdit (dish) {
    return { type: ACTION_DISH_EDIT, payload: dish }
}

export function setFilter (filter) {
    return { type: ACTION_SET_FILTER, payload: filter }
}

export function clearDishEdit () {
    return { type: ACTION_CLEAR_DISH_EDIT }
}

export function update (dish) {
    return { type: ACTION_DISH_UPDATE, payload: dish }
}

export function setDishList (list) {
    return { type: ACTION_SET_DISH_LIST, payload: list }
}

export function save (dish) {
    return (dispatch) => {
        if (dish.id) { // update
            DishesApi.update(dish.id, dish).then(() => {
                dispatch(update(dish))
            })
        } else { // create
            DishesApi.create(dish).then((dishWithId) => {
                dispatch(create(dishWithId))
            })
        }
    }
}