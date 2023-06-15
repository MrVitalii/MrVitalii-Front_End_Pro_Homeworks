import {Button, Form, Input} from 'antd';
import {fetchOneTable, save} from '../../store/actions/tables'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {selectTableEdit} from '../../store/selectors/restaurantSelector'

export default function TablesForm() {
    let {id} = useParams();
    const tableEdit = useSelector(selectTableEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id && !tableEdit?.id) {
            dispatch(fetchOneTable(id))
        }
    }, [dispatch, id, tableEdit?.id])

    function onFinish(value) {
        const table = {
            ...tableEdit,
            ...value,
        }

        dispatch(save(table))
        navigate('/table')
    }

    if (id && !tableEdit?.id) {
        return <div>Loading...</div>
    }

    return (
        <Form
            initialValues={tableEdit}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Number"
                name="number"
                rules={[
                    {
                        pattern: /^[0-9]+$/,
                        message: 'Must be just numbers',
                    },
                    {
                        required: true,
                        message: 'Please input table number',
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