import { Row, Col, Table, Button } from 'antd';
import { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'

import { selectCommonOrders } from '../../store/selectors/restaurantSelector'
import { useDispatch, useSelector } from 'react-redux'
import { orderColumns } from './OrderColumns'
import { fetchCommonOrders } from '../../store/actions/common'

export default function Orders () {
  const list = useSelector(selectCommonOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const columns = orderColumns(dispatch, navigate)

  useEffect(() => {
    dispatch(fetchCommonOrders())
  }, [dispatch])


  return (
      <div>
        <Row justify={"center"}>
          <Col span={1}>
            <Button type="primary">
              <Link to='/order/create'>Add New</Link>
            </Button>
          </Col>
        </Row>
        <Table rowKey={'id'} columns={columns} dataSource={list} />
      </div>
  )
}