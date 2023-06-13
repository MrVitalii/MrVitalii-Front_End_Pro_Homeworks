import {Row, Table, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchWaiters, setFilter } from '../../store/actions/waiters'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {selectWaiters} from '../../store/selectors/restaurantSelector'
import { waitersColumns } from './WaitersColumns'

export default function WaitersList () {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter')
  const list = useSelector(selectWaiters);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const columns = waitersColumns(dispatch, navigate)

  useEffect(() => {
    dispatch(fetchWaiters())
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
            <Link to='/waiter/create'>Add New</Link>
          </Button>


      </Row>

      <Table rowKey={'id'} columns={columns} dataSource={list} />
    </div>
  )
}