import {Row, Table, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTables, setFilter } from '../../store/actions/tables'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {selectTables} from '../../store/selectors/restaurantSelector'
import { TablesCards } from './TablesCards'

export default function TablesList () {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter')
  const list = useSelector(selectTables);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const columns = TablesCards(dispatch, navigate)

  useEffect(() => {
    dispatch(fetchTables())
  }, [dispatch])

  useEffect(() => {
    if (filter) {
      dispatch(setFilter(filter))
    }
  }, [dispatch, filter])

  return (
    <div className='TablesSection'>
      <Row justify={"center"}>
          <Button type="primary">
            <Link to='/table/create'>Add New</Link>
          </Button>
      </Row>

      <Table rowKey={'id'} columns={columns} dataSource={list} />
    </div>
  )
}