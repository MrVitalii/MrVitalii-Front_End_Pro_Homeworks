import {Button, Form, Input} from 'antd';
import {fetchOneWaiter, save} from '../../store/actions/waiters'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {selectWaiterEdit} from '../../store/selectors/restaurantSelector'

export default function WaitersForm() {
    let {id} = useParams();
    const waiterEdit = useSelector(selectWaiterEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id && !waiterEdit?.id) {
            dispatch(fetchOneWaiter(id))
        }
    }, [dispatch, id, waiterEdit?.id])

    function onFinish(value) {
        const waiter = {
            ...waiterEdit,
            ...value,
        }

        dispatch(save(waiter))
        navigate('/waiter')
    }

    if (id && !waiterEdit?.id) {
        return <div>Loading...</div>
    }

    return (
        <Form
            initialValues={waiterEdit}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="firstName"
                rules={[
                    {
                        pattern: /^[A-Za-zА-Яа-я]+$/,
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
                label="Phone"
                name="phone"
                rules={[
                    {
                        pattern: /^\d{3}-\d{2}-\d{2}$/,
                        message: 'Phone number should be in the format 000-00-00',
                    },
                    {
                        required: true,
                        message: 'Please input your Phone!',
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