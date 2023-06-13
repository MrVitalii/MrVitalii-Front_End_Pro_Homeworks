import { Route, Routes, NavLink } from 'react-router-dom'
import './index.module.css';
import Orders from './routes/Orders'
import Tables from './routes/Tables/Tables'
import NotFound from './routes/NotFound'
import WaitersRoutes from './routes/Waiters/WaitersRoutes'
import { Layout, Menu } from 'antd';

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
      label: <NavLink to='/' className={active}>Orders</NavLink>,
      key: 'orders',
    },
    {
      label: <NavLink to='waiter' className={active}>Waiters</NavLink>,
      key: 'waiters',
    },
    {
      label: <NavLink to='/about' className={active}>Tables</NavLink>,
      key: 'about',
    },
// {
    //   label: <NavLink to='/' className={active}>Dishes</NavLink>,
    //   key: 'dishes',
    // },
  ]

  return (
  <Layout>
    <Layout.Header style={headerStyle} className='xxx'>
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
    <Layout.Content style={contentStyle}>
      <Routes>
        <Route path='/waiter/*' element={<WaitersRoutes />} />
        <Route path='/' element={<Orders />} />
        <Route path='/about' element={<Tables />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Layout.Content>
  </Layout>
  );
}

export default App