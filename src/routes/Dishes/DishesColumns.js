import { Button, Space } from 'antd';
import { clearDishEdit, remove } from '../../store/actions/dishes'

export function dishesColumns (dispatch, navigate) {
  function onDeleteBtnClick (dish) {
    dispatch(remove(dish.id))
  }

  function onEditBtnClick (dish) {
    dispatch(clearDishEdit())
    navigate(`/dish/${dish.id}/edit`)
  }

  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'title',
      render: (price) => `$${price.toLocaleString()}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, dish) => (
        <Space >
          <Button onClick={() => onEditBtnClick(dish)} type="primary">Edit</Button>
          <Button onClick={() => onDeleteBtnClick(dish)} type="primary" danger>Delete</Button>
        </Space>
      )
    },
  ]
}