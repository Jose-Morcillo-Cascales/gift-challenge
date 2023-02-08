import React from 'react'
import { Home } from '../pages'
import {BrowserRouter,Routes,Route} from "react-router-dom"
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/home' element ={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router