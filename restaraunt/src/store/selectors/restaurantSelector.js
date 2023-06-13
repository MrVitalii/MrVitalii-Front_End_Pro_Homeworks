import { createSelector } from 'reselect'
// import { FILTERS } from '../reducers/waitersReducer'

export const selectWaiters = state => state.waiter.list
export const selectWaiterEdit = state => state.waiter.waiterEdit

export const selectTables = state => state.table.list
export const selectTableEdit = state => state.table.tableEdit

export const selectOrders = state => state.order.list
export const selectOrderEdit = state => state.order.tableEdit


export const selectCommonOrders = createSelector(
    selectOrders,
    selectWaiters,
    selectTables,
    (orders, waiters, tables) => {
        const waitersMap = waiters.reduce((acc, waiter) => {
            acc[waiter.id] = waiter

            return acc
        }, {})
        const tablesMap = tables.reduce((acc, table) => {
            acc[table.id] = table

            return acc
        }, {})

        return orders.map((order) => ({
            ...order,
            table: tablesMap[order.tableId],
            waiter: waitersMap[order.waiterId]
        }))
    }
)

//NOT FORGET TO DELETE THIS!!!!!

// export const selectFilteredContactList = createSelector(
//   selectContacts,
//   (state) => state.contact.filter
//   (list, filter) => {
//     if (filter === FILTERS.Active) {
//       return list.filter(contact => contact.done === false)
//     }
//     if (filter === FILTERS.Done) {
//       return list.filter(contact => contact.done === true)
//     }
//
//     return list
//   }
// )