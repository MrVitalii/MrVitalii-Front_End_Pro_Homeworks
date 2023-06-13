import { Route, Routes } from 'react-router-dom'
import NotFound from '../NotFound'
import WaitersList from './WaitersList'
import WaitersForm from './WaitersForm'

export default function WaitersRoutes() {
  return (
    <Routes>
      <Route path='/' element={<WaitersList />} />
      <Route path='/create' element={<WaitersForm />} />
      <Route path='/:id/edit' element={<WaitersForm />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}