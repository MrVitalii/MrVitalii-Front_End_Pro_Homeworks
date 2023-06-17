import React, {useEffect} from "react"
import { Route, Routes, NavLink} from 'react-router-dom'
import { Layout, Menu } from 'antd'
import OrdersRoutes from './routes/Orders/OrdersRoutes'
import WaitersRoutes from './routes/Waiters/WaitersRoutes'
import TablesRoutes from './routes/Tables/TablesRoutes'
import DishesRoutes from "./routes/Dishes/DishesRoutes"
import NotFound from './routes/NotFound'
import './index.module.css'

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ffffff',
};

const contentStyle = {
  lineHeight: '40px',
  color: '#000000',
  backgroundColor: '#ebeff6',
};

function App() {
  const storedCurrent = localStorage.getItem('current')
  const [current, setCurrent] = React.useState(storedCurrent || 'orders')

  useEffect(() => {
    localStorage.setItem('current', current)
  }, [current])

  const handleMenuClick = ({key}) => {
    setCurrent(key)
  }

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

  return (
      <Layout>
        <Layout.Header style={headerStyle}>
          <Menu mode="horizontal" items={items} selectedKeys={[current]} onClick={handleMenuClick}/>
        </Layout.Header>
        <Layout.Content style={contentStyle}>
          <Routes>
            <Route path='/*' element={<OrdersRoutes />} />
            <Route path='/waiter/*' element={<WaitersRoutes />} />
            <Route path='/table/*' element={<TablesRoutes />} />
            <Route path='/dish/*' element={<DishesRoutes />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Layout.Content>
      </Layout>
  )
}

export default App