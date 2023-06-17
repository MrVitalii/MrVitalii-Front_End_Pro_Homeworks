import React, {useEffect} from "react"
import { Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import OrdersRoutes from './routes/Orders/OrdersRoutes'
import WaitersRoutes from './routes/Waiters/WaitersRoutes'
import TablesRoutes from './routes/Tables/TablesRoutes'
import DishesRoutes from "./routes/Dishes/DishesRoutes"
import NotFound from './routes/NotFound'
import {items} from './constItems'
import style from './index.module.css'

function App() {
  const storedCurrent = localStorage.getItem('current')
  const [current, setCurrent] = React.useState(storedCurrent || 'orders')

  useEffect(() => {
    localStorage.setItem('current', current)
  }, [current])

  const handleMenuClick = ({key}) => {
    setCurrent(key)
  }

  return (
      <Layout>
        <Layout.Header className={style.headerStyle}>
          <Menu mode="horizontal" items={items} selectedKeys={[current]} onClick={handleMenuClick}/>
        </Layout.Header>
        <Layout.Content className={style.contentStyle}>
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