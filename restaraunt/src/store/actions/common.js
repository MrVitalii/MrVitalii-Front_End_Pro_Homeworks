import { OrdersApi } from '../../api/OrdersApi'
import { TablesApi } from '../../api/TablesApi'
import { WaitersApi } from '../../api/WaitersApi'
import { setOrderList } from './orders'
import { setTableList } from './tables'
import { setWaiterList } from './waiters'

export function fetchCommonOrders () {
  return (dispatch) => {
    Promise.all([
      OrdersApi.getList(),
      TablesApi.getList(),
      WaitersApi.getList(),
    ]).then((res) => {
      dispatch(setOrderList(res[0]))
      dispatch(setTableList(res[1]))
      dispatch(setWaiterList(res[2]))
    })
  }
}