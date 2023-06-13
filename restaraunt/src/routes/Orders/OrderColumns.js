import { Button, Space } from 'antd';

export function orderColumns (dispatch, navigate) {
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
      title: 'Actions',
      key: 'actions',
      render: (_, order) => (
        <Space wrap>
          <Button type="primary">Edit</Button>
        </Space>
      )
    },
  ]
}