import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css';
import Home from './routes/Home'
import About from './routes/About'
import NotFound from './routes/NotFound'
import ContactRoutes from './routes/Contacts/ContactRoutes'
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
      label: <NavLink to='/' className={active}>Home</NavLink>,
      key: 'home',
    },
    {
      label: <NavLink to='/about' className={active}>About</NavLink>,
      key: 'about',
    },
    {
      label: <NavLink to='contact' className={active}>Contact List</NavLink>,
      key: 'contact-list',
    }
  ]

  return (
  <Layout>
    <Layout.Header style={headerStyle} className='xxx'>
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
    <Layout.Content style={contentStyle}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/*' element={<ContactRoutes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Layout.Content>
  </Layout>
  );
}

export default App
