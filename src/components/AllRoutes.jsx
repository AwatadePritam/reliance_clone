import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import LayOut from './LayOut'
import HomePage from './Hompage/HomePage'
import SingleProductDetailsPage from './SingleProduct/SingleProductDetailsPage'
import PrivateRoute from './SingleProduct/PrivateRoute'
import Cart from './SingleProduct/Cart'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LayOut/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/products/:partOne/:partTwo/:url' element={<SingleProductDetailsPage/>} />
                <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>

            </Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes