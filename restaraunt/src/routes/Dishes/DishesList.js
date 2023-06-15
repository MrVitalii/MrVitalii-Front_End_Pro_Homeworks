import {Row, Table, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDishes, setFilter } from '../../store/actions/dishes'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {selectDishes} from '../../store/selectors/restaurantSelector'
import { dishesColumns } from './DishesColumns'

export default function DishesList () {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter')
  const list = useSelector(selectDishes);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const columns = dishesColumns(dispatch, navigate)

  useEffect(() => {
    dispatch(fetchDishes())
  }, [dispatch])

  useEffect(() => {
    if (filter) {
      dispatch(setFilter(filter))
    }
  }, [dispatch, filter])

  return (
    <div className='DishesSection'>
      <Row justify={"center"}>
          <Button type="primary">
            <Link to='/dish/create'>Add New</Link>
          </Button>
      </Row>

      <Table rowKey={'id'} columns={columns} dataSource={list} />
    </div>
  )
}