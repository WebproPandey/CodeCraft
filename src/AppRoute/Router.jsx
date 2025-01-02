import React from 'react'
import {Route, Routes}  from 'react-router-dom'
import HomePage from '../Components/HomePage'
import StartPage from '../Components/StartPage'

const Router = () => {
  return (
    <>
       <Routes>
          <Route path='/' element={<StartPage/>} />
          <Route path='/home' element={<HomePage/>} />
       </Routes>
    </>
  )
}

export default Router