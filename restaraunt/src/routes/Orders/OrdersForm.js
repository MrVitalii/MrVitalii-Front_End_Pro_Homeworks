import {Button, Form, Input, Select, Space} from 'antd'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import {fetchOneOrder, save} from "../../store/actions/orders"
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {selectOrderEdit, selectOrdersOptions} from '../../store/selectors/restaurantSelector'
import {fetchCommonOrderList} from "../../store/actions/common"

export default function OrdersForm() {
    let {id} = useParams()
    const orderEdit = useSelector(selectOrderEdit)
    const {Option} = Select
    const options = useSelector(selectOrdersOptions)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm()

    useEffect(() => {
        if (id && !orderEdit?.id) {
            dispatch(fetchOneOrder(id))
        }
    }, [dispatch, id, orderEdit?.id])

    useEffect(() => {
        dispatch(fetchCommonOrderList())
    }, [dispatch])

    function onFormSubmit(value) {
        let i = 1
        const dishList = value.dishes.map((dish) => {
            return {
                id: i++,
                count: parseInt(dish.count),
                dishId: dish.dishId
            }
        })
        const order = {
            ...orderEdit,
            ...value,
            "dishes": dishList
        }
        dispatch(save(order))
        navigate('/order')
    }

    if (id && !orderEdit?.id) {
        return <div>Loading...</div>
    }

    return (
        <Form
            className='margin-top-30'
            form={form}
            layout="horizontal"
            onFinish={onFormSubmit}
            initialValues={orderEdit}>
            <Form.Item
                name="tableId"
                label="Chose Table"
                rules={[
                    {
                        required: true,
                        message: 'You have to chose Table',
                    },

                ]}
            >
                <Select
                    style={{
                        width: 200,
                    }}
                    options={options.table}
                />
            </Form.Item>
            <Form.Item
                name="waiterId"
                label="Chose Waiter"
                rules={[
                    {
                        required: true,
                        message: 'You have to chose Waiter',
                    },

                ]}
            >
                <Select
                    style={{
                        width: 200,
                    }}
                    options={options.waiter}
                />
            </Form.Item>
            <h5> Chose Dishes </h5>

            <Form.List
                name="dishes"
            >
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <Space key={field.key} align="baseline" wrap>
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.waiterId === curValues.waiterId
                                    }
                                >
                                    {() => (
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'dishId']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing sight',
                                                },

                                            ]}
                                        >
                                            <Select
                                                placeholder='choose dishes'
                                                style={{
                                                    width: 200,
                                                }}
                                            >
                                                {(options.dish).map((item) => (
                                                    <Option key={item.value} value={item.value}>
                                                        {item.label}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    )}
                                </Form.Item>
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'count']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing count',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Input dish count' />
                                </Form.Item>

                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Dish
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Form.Item >
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>

        </Form>
    )
}