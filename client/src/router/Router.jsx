import React from 'react'
import { Home } from '../pages'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GeneralProvider } from '../utils'
const Router = () => {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  )
}

export default Router