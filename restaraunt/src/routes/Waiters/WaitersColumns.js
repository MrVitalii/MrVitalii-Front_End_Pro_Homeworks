import { Button, Space } from 'antd';
import { clearWaiterEdit, remove } from '../../store/actions/waiters'

export function waitersColumns (dispatch, navigate) {
  function onDeleteBtnClick (waiter) {
    dispatch(remove(waiter.id))
  }

  function onEditBtnClick (waiter) {
    dispatch(clearWaiterEdit())
    navigate(`/waiter/${waiter.id}/edit`)
  }
  
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'title',
    },
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'title',
    },

    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'title',
    },

    {
      title: 'Actions',
      key: 'actions',
      render: (_, waiter) => (
        <Space >
          <Button onClick={() => onEditBtnClick(waiter)} type="primary">Edit</Button>
          <Button onClick={() => onDeleteBtnClick(waiter)} type="primary" danger>Delete</Button>
        </Space>
      )
    },
  ]
}