import { Route, Routes, NavLink } from 'react-router-dom'
import OrdersRoutes from './routes/Orders/OrdersRoutes'
import WaitersRoutes from './routes/Waiters/WaitersRoutes'
import TablesRoutes from './routes/Tables/TablesRoutes'
import DishesRoutes from "./routes/Dishes/DishesRoutes"
import NotFound from './routes/NotFound'
import { Layout, Menu } from 'antd'
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
  const active = ({ isActive }) => isActive ? "active" : ""
  const items = [
    {
      label: <NavLink to='order' className={active}>Orders</NavLink>,
      key: 'orders',
    },
    {
      label: <NavLink to='waiter' className={active}>Waiters</NavLink>,
      key: 'waiters',
    },
    {
      label: <NavLink to='table' className={active}>Tables</NavLink>,
      key: 'tables',
    },
    {
      label: <NavLink to='dish' className={active}>Dishes</NavLink>,
      key: 'dishes',
    },
  ]

  return (
  <Layout>
    <Layout.Header style={headerStyle} className='xxx'>
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
    <Layout.Content style={contentStyle}>
      <Routes>
        <Route path='/order/*' element={<OrdersRoutes />} />
        <Route path='/waiter/*' element={<WaitersRoutes />} />
        <Route path='/table/*' element={<TablesRoutes />} />
        <Route path='/dish/*' element={<DishesRoutes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Layout.Content>
  </Layout>
  );
}

export default App