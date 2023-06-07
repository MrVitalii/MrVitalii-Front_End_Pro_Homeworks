import { Routes, Route } from 'react-router-dom'
import AlbumsList from './AlbumList'
import NotFound from '../NotFound'

export default function AlbumsRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AlbumsList />} />
            <Route path='/:userId/*' element={<AlbumsList />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}