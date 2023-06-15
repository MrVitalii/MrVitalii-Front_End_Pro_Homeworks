import {TablesApi} from "../../api/TablesApi"

export const ACTION_TABLE_CREATE = 'ACTION_TABLE_CREATE'
export const ACTION_TABLE_REMOVE = 'ACTION_TABLE_REMOVE'
export const ACTION_TABLE_EDIT = 'ACTION_TABLE_EDIT'
export const ACTION_TABLE_UPDATE = 'ACTION_TABLE_UPDATE'
export const ACTION_SET_TABLE_LIST = 'ACTION_SET_TABLE_LIST'
export const ACTION_CLEAR_TABLE_EDIT = 'ACTION_CLEAR_TABLE_EDIT'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'

export function fetchTables () {
    return (dispatch) => {
        TablesApi.getList().then((newList) => {
            dispatch(setTableList(newList))
        })
    }
}

export function fetchOneTable (id) {
    return (dispatch) => {
        TablesApi.getOne(id).then((table) => {
            dispatch(setTableEdit(table))
        })
    }
}

export function create (table) {
    return { type: ACTION_TABLE_CREATE, payload: table }
}

export function remove (id) {
    return (dispatch) => {
        TablesApi.delete(id).then(() => {
            dispatch({ type: ACTION_TABLE_REMOVE, payload: id })
        })
    }
}

export function setTableEdit (table) {
    return { type: ACTION_TABLE_EDIT, payload: table }
}

export function setFilter (filter) {
    return { type: ACTION_SET_FILTER, payload: filter }
}

export function clearTableEdit () {
    return { type: ACTION_CLEAR_TABLE_EDIT }
}

export function update (table) {
    return { type: ACTION_TABLE_UPDATE, payload: table }
}

export function setTableList (list) {
    return { type: ACTION_SET_TABLE_LIST, payload: list }
}

export function save (table) {
    return (dispatch) => {
        if (table.id) { // update
            TablesApi.update(table.id, table).then(() => {
                dispatch(update(table))
            })
        } else { // create
            TablesApi.create(table).then((tableWithId) => {
                dispatch(create(tableWithId))
            })
        }
    }
}