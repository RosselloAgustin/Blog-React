import { Routes, Route } from 'react-router-dom'
import Home from './layouts/home'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<h1>Not Found - Error 404</h1>}></Route>
    </Routes>
  )
}
