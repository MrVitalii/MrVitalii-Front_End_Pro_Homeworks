import { Route, Routes, NavLink } from 'react-router-dom'
import NotFound from './routes/NotFound'
import UsersRoutes from './routes/Users/UsersRoutes'
import AlbumRoutes from './routes/Albums/AlbumRoutes'
import PhotosRoutes from './routes/Photos/PhotosRoutes'
import Home from './routes/Home'
import './index.module.css'

function App() {
    return (
        <div className="App">
            <nav className='navigation'>
                <NavLink to='/'>
                    Home
                </NavLink>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/users/*' element={<UsersRoutes />}></Route>
                <Route path='/users/albums/*' element={<AlbumRoutes />}></Route>
                <Route path='/users/:id/albums/:userId/photos/*' element={<PhotosRoutes />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App