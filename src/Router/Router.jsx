import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signin from '../components/screens/Auth/Signin';
import Signup from '../components/screens/Auth/Signup'
import Account from '../components/screens/Account/Account'
import { AuthContextProvider } from "../context/AuthContext";
import Home from '../components/screens/Home/Home'
import AllHotels from '../components/screens/Home/allHotels/AllHotels'
import Admin from '../components/screens/Admin/Admin'
import AddHotel from '../components/screens/Admin/AddHotel'
import EditHotel from '../components/screens/Admin/EditHotel'
const Router = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup/>  }/>
          <Route path='/' element={<Home/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/all-hotel' element={<AllHotels />} />
          <Route path='/adminPage' element={<Admin />} />
          <Route path='/add' element={<AddHotel/>} />
          <Route path='/edit/:id' element={<EditHotel/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default Router
