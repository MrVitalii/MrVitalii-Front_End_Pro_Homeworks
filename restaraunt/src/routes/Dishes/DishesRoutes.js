import { Route, Routes } from 'react-router-dom'
import NotFound from '../NotFound'
import DishesList from './DishesList'
import DishesForm from './DishesForm'

export default function DishesRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DishesList />} />
      <Route path='/create' element={<DishesForm />} />
      <Route path='/:id/edit' element={<DishesForm />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}