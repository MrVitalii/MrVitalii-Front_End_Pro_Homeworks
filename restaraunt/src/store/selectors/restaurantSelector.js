import { createSelector } from 'reselect'

export const selectWaiters = state => state.waiter.list
export const selectWaiterEdit = state => state.waiter.waiterEdit

export const selectTables = state => state.table.list
export const selectTableEdit = state => state.table.tableEdit

export const selectOrders = state => state.order.list
export const selectOrderEdit = state => state.order.ordersEdit

export const selectDishes = state => state.dish.list
export const selectDishesEdit = state => state.dish.dishEdit

export const selectCommonOrders = createSelector(
    selectOrders,
    selectWaiters,
    selectTables,
    selectDishes,
    (orders, waiters, tables, dishes) => {

        const waitersMap = waiters.reduce((acc, waiter) => {
            acc[waiter.id] = waiter

            return acc
        }, {})
        const tablesMap = tables.reduce((acc, table) => {
            acc[table.id] = table

            return acc
        }, {})
        const dishesMap = dishes.reduce((acc, dish) => {
            acc[dish.id] = dish

            return acc
        }, {})

        return orders.map((order) => ({
            ...order,
            table: tablesMap[order.tableId],
            waiter: waitersMap[order.waiterId],
            dish: dishesMap[order.dishId]
        }))
    }
)

export const selectOrdersOptions = createSelector(
    selectTables,
    selectWaiters,
    selectDishes,
    (tableList, waiterList, dishList) => {
        const newTableList = tableList.map((table) => {
            return {
                'label' : `Table number ${table.number}` ,
                'value' : table.id
            }
        })

        const newWaiterList = waiterList.map((waiter) => {
            return {
                'label' : waiter.firstName ,
                'value' : waiter.id
            }
        })

        const newDishList = dishList.map((dish) => {
            return {
                'label' : dish.name ,
                'value' : dish.id
            }
        })

        return {
            table: newTableList,
            waiter: newWaiterList,
            dish : newDishList
        }
    }
)