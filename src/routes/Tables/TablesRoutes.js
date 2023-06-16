import { Route, Routes } from 'react-router-dom'
import NotFound from '../NotFound'
import TablesForm from './TablesForm'
import TablesList from "./TablesList"

export default function TablesRoutes() {
  return (
    <Routes>
      <Route path='/' element={<TablesList />} />
      <Route path='/create' element={<TablesForm />} />
      <Route path='/:id/edit' element={<TablesForm />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}