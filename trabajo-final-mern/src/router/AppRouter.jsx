import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../auth/Login'
import { Registro } from '../auth/Registro'
import { CRUD } from '../Home/CRUD'
import { SobreNosotros } from '../Home/SobreNosotros'
import { Admin } from '../Home/Admin'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/registro" element={<Registro/>}></Route>
      <Route path="/crud" element={<CRUD/>}></Route>
      <Route path="/sobrenosotros" element={<SobreNosotros/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
