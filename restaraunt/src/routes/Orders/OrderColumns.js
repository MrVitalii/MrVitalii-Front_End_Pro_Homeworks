import { Button, Space } from 'antd';
import {clearOrderEdit, remove} from "../../store/actions/orders";

export function orderColumns (dispatch, navigate, totalPrice) {
  function onDeleteBtnClick (order) {
    dispatch(remove(order.id))
  }

  function onEditBtnClick (order) {
    dispatch(clearOrderEdit())
    navigate(`/order/${order.id}/edit`)
  }
  
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Waiter',
      dataIndex: 'waiterId',
      key: 'waiterId',
      render: (_, record) => record.waiter.firstName
    },
    {
      title: 'Table',
      dataIndex: 'tableId',
      key: 'tableId',
      render: (_, record) => record.table.number
    },

    {
      title: 'For Payment',
      dataIndex: 'totalPrice',
      key: 'title',
      render: (_, dish) => totalPrice,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, order) => (
        <Space wrap>
          <Button onClick={() => onEditBtnClick(order)} type="primary">Edit</Button>
          <Button onClick={() => onDeleteBtnClick(order)} type="primary" danger>Delete</Button>
        </Space>
      )
    },
  ]
}