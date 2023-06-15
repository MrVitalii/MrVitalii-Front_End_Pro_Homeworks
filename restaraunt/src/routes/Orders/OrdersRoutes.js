import { Route, Routes } from 'react-router-dom'
import NotFound from '../NotFound'
import OrdersList from './OrderList'
import OrdersForm from './OrdersForm'

export default function OrdersRoutes() {
  return (
    <Routes>
      <Route path='/' element={<OrdersList />} />
      <Route path='/create' element={<OrdersForm />} />
      <Route path='/:id/edit' element={<OrdersForm />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}