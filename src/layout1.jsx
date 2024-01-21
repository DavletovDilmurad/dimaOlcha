import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Navbar1 from './navbar/navbar1'
import Footer from './foooter/foorer'
import { Container } from '@chakra-ui/react'





function Layout() {
  return (
    <div>
       
       <Navbar/> 
      <Navbar1/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout