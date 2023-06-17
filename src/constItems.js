import {NavLink} from "react-router-dom"

 const items = [
    {
        label: <NavLink to='order' >Orders</NavLink>,
        key: 'orders',
    },
    {
        label: <NavLink to='waiter' >Waiters</NavLink>,
        key: 'waiters',
    },
    {
        label: <NavLink to='table' >Tables</NavLink>,
        key: 'tables',
    },
    {
        label: <NavLink to='dish' >Dishes</NavLink>,
        key: 'dishes',
    },
]

export { items }