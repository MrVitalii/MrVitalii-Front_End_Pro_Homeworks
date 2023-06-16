import { Row, Table, Button } from 'antd';
import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams} from 'react-router-dom'
import { selectCommonOrders, selectDishes } from '../../store/selectors/restaurantSelector'
import { useDispatch, useSelector } from 'react-redux'
import { orderColumns } from './OrderColumns'
import { fetchCommonOrders } from '../../store/actions/common'
import {setFilter} from "../../store/actions/dishes";

export default function Orders () {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')
  const list = useSelector(selectCommonOrders)
  const dishesList = useSelector(selectDishes)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const columns = orderColumns(dispatch, navigate,  dishesList)

  useEffect(() => {
    dispatch(fetchCommonOrders())
  }, [dispatch])

    useEffect(() => {
        if (filter) {
            dispatch(setFilter(filter))
        }
    }, [dispatch, filter])

    return (
      <div>
        <Row justify={"center"}>
            <Button type="primary">
              <Link to='order/create'>Add New</Link>
            </Button>
        </Row>
        <Table rowKey={'id'} columns={columns} dataSource={list} />
      </div>
  )
}