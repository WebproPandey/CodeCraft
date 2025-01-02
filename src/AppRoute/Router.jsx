import React from 'react'
import {Route, Routes}  from 'react-router-dom'
import HomePage from '../Components/HomePage'
import LoginPage from '../Components/LoginPage'

const Router = () => {
  return (
    <>
       <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
       </Routes>
    </>
  )
}

export default Router