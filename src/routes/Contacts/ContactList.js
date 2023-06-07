import { Row, Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts, setFilter } from '../../store/actions/contact'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {selectContacts} from '../../store/selectors/contact'
import { getColumns } from './getColumns'

export default function ContactList () {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter')
  const list = useSelector(selectContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const columns = getColumns(dispatch, navigate)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    if (filter) {
      dispatch(setFilter(filter))
    }
  }, [dispatch, filter])

  return (
    <div>
      <Row justify="end">

          <Button type="primary">
            <Link to='/contact/create'>Add New</Link>
          </Button>

      </Row>
      <Table rowKey={'id'} columns={columns} dataSource={list} />

    </div>
  )
}