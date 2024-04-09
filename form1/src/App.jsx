import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignCompo from './SignCompo'
import Dashboard from './Dashboard'
import Register from './Component/Register'
import ResetCompo from './Component/ResetCompo'
import { ToastContainer } from 'react-toastify'
import Forgetmail from './Component/Forgetmail'
import DashCompo from './Component/DashCompo'
import Formpage1 from './FormQues/Formpage1'
import Formpage2 from './FormQues/Formpage2'
import Formpage3 from './FormQues/Formpage3'

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer theme='dark' />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/signin' element={<SignCompo />} />
          <Route path='/forget' element={<Forgetmail />} />
          <Route path='/resetpage' element={<ResetCompo />} />
          <Route path='/dashboard' element={<DashCompo />} />
          <Route path='/form1' element={<Formpage1 />} />
          <Route path='/form2' element={<Formpage2 />} />
          <Route path='/form3' element={<Formpage3 />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
