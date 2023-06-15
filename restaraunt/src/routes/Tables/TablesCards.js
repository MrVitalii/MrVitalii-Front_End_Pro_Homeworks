import { Button, Space, Card } from 'antd'
import { clearTableEdit, remove } from '../../store/actions/tables'

export function TablesCards (dispatch, navigate) {
  function onDeleteBtnClick (table) {
    dispatch(remove(table.id))
  }

  function onEditBtnClick (table) {
    dispatch(clearTableEdit())
    navigate(`/table/${table.id}/edit`)
  }

  return [
    {
      render: (_, table) => (
          <Space>
            <Card
                className="ant-table-tbody my-custom-style"
                title={`Table number ${table.number}`}
                style={{
                    width: 300,
                }}
            >
              <Button onClick={() => onEditBtnClick(table)} type="primary" className='TableEditBtn'>Edit</Button>
              <Button onClick={() => onDeleteBtnClick(table)} type="primary" danger>Delete</Button>
            </Card>
          </Space>
      )
    }
  ]
}