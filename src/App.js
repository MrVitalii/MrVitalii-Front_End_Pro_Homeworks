import { Route, Routes, NavLink } from 'react-router-dom'
import './index.module.css'
import NotFound from './routes/NotFound'
import UsersRoutes from './routes/Users/UsersRoutes'
import AlbumRoutes from './routes/Albums/AlbumRoutes'
import PhotosRoutes from './routes/Photos/PhotosRoutes'

function App() {
    const active = ({ isActive }) => isActive ? "active" : ""

    return (
        <div className="App">
            <nav className='navigation'>
                <NavLink to='/users' className={active}>Users List</NavLink> | {' '}
                <NavLink to='/albums' className={active}>Albums</NavLink> | {' '}
                <NavLink to='/photos' className={active}>Photos</NavLink>

            </nav>

            <Routes>
                <Route path='/users/*' element={<UsersRoutes />} />
                <Route exact path="/albums/*" element={<AlbumRoutes />} />
                <Route exact path="/albums/:userId/*" element={<AlbumRoutes />} />
                <Route exact path="/photos/*" element={<PhotosRoutes/>} />
                <Route exact path="/photos/:userId/*" element={<PhotosRoutes />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App
