import { Routes, Route } from 'react-router-dom'
import PhotosList from './PhotosList'
import NotFound from '../NotFound'

export default function PhotosRoutes() {
    return (
        <Routes>
            <Route path='/' element={<PhotosList />} />
            <Route path='/:userId/*' element={<PhotosList />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}