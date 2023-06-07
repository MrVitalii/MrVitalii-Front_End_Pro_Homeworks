import { Routes, Route } from 'react-router-dom'
import UsersList from './UserList'
import Albums from '../Albums/AlbumsItem'
import NotFound from '../NotFound'

export default function UsersRoutes() {
    return (
        <Routes>
            <Route path='/' element={<UsersList />}></Route>
            <Route path='/:id/albums/*' element={<Albums />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
        </Routes>
    )
}