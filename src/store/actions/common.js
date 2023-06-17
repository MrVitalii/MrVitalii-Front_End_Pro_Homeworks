import { OrdersApi} from '../../api/OrdersApi'
import { TablesApi } from '../../api/TablesApi'
import { WaitersApi } from '../../api/WaitersApi'
import {DishesApi} from "../../api/DishesApi"
import { setOrderList } from './orders'
import { setTableList  } from './tables'
import { setDishList } from "./dishes"
import { setWaiterList } from './waiters'

export function fetchCommonOrders () {
  return (dispatch) => {
    Promise.all([
      OrdersApi.getList(),
      WaitersApi.getList(),
      TablesApi.getList(),
      DishesApi.getList(),
    ])
     .then((res) => {
      dispatch(setOrderList(res[0]))
      dispatch(setWaiterList(res[1]))
      dispatch(setTableList(res[2]))
      dispatch(setDishList(res[3]))
    })
     .catch(() => {
      throw new Error('Error fetching common orders')
    })
  }
}

export function fetchCommonOrderList () {
  return (dispatch) => {
    Promise.all([
      TablesApi.getList(),
      WaitersApi.getList(),
      DishesApi.getList(),
    ])
     .then((res) => {
      dispatch(setTableList(res[0]))
      dispatch(setWaiterList(res[1]))
      dispatch(setDishList(res[2]))
  })
    .catch(() => {
     throw new Error('Error fetching common order list')
  })
 }
}