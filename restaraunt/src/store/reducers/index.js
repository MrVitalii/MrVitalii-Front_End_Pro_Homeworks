import { combineReducers } from 'redux'
import waitersReducer from './waitersReducer'
import tablesReducer from './tablesReducer'
import ordersReducer from './ordersReducer'


export const rootReducer = combineReducers({
  waiter: waitersReducer,
  table: tablesReducer,
  order: ordersReducer,
})