import { Button, Space } from 'antd';
import { clearContactEdit, remove } from '../../store/actions/contact'

export function getColumns (dispatch, navigate) {
  function onDeleteBtnClick (contact) {
    dispatch(remove(contact.id))
  }

  function onEditBtnClick (contact) {
    dispatch(clearContactEdit())
    navigate(`/contact/${contact.id}/edit`)
  }


  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'title',
    },
    {
      title: 'Lastname',
      dataIndex: 'lastName',
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
      render: (_, contact) => (
        <Space wrap>
          <Button onClick={() => onEditBtnClick(contact)} type="primary">Edit</Button>
          <Button onClick={() => onDeleteBtnClick(contact)} type="primary" danger>Delete</Button>
        </Space>
      )
    },
  ]
}