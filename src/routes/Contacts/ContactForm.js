import {Button, Form, Input} from 'antd';
import {fetchOneContact, save} from '../../store/actions/contact'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {selectContactEdit} from '../../store/selectors/contact'

export default function ContactForm() {
    let {id} = useParams();
    const contactEdit = useSelector(selectContactEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id && !contactEdit?.id) {
            dispatch(fetchOneContact(id))
        }
    }, [dispatch, id, contactEdit?.id])

    function onFinish(value) {
        const contact = {
            ...contactEdit,
            ...value,
        }

        dispatch(save(contact))
        navigate('/contact')
    }

    if (id && !contactEdit?.id) {
        return <div>Loading...</div>
    }

    return (
        <Form
            initialValues={contactEdit}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
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
                label="Last Name"
                name="lastName"
                rules={[
                    {
                        pattern: /^[A-Za-zА-Яа-я]+$/,
                        message: 'Must be just letters',
                    },
                    {
                        required: true,
                        message: 'Please input your Last Name!',
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
                        pattern: /^\d{3}-\d{3}-\d{4}$/,
                        message: 'Phone number should be in the format 000-000-0000',
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