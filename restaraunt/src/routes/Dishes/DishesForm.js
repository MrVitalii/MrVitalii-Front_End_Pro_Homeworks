import {Button, Form, Input} from 'antd';
import {fetchOneDish, save} from '../../store/actions/dishes'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {selectDishesEdit} from '../../store/selectors/restaurantSelector'

export default function DishesForm() {
    let {id} = useParams();
    const dishEdit = useSelector(selectDishesEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id && !dishEdit?.id) {
            dispatch(fetchOneDish(id))
        }
    }, [dispatch, id, dishEdit?.id])

    function onFinish(value) {
        const dish = {
            ...dishEdit,
            ...value,
        }

        dispatch(save(dish))
        navigate('/dish')
    }

    if (id && !dishEdit?.id) {
        return <div>Loading...</div>
    }

    return (
        <Form
            initialValues={dishEdit}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Dish"
                name="name"
                rules={[
                    {
                        pattern:  /^[A-Za-zА-Яа-я\s.,]+$/,
                        message: 'Must be just letters',
                    },
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        pattern:  /^[A-Za-zА-Яа-я\s.,]+$/,
                        message: 'Must be just letters',
                    },
                    {
                        required: true,
                        message: 'Please input your Description!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[
                    {
                        pattern: /^[0-9]+$/,
                        message: 'Must be just numbers',
                    },
                    {
                        required: true,
                        message: 'Please input your Price!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}