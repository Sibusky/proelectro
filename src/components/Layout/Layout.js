import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout({ windowSize }) {
  return (
    <div className='layout'>
        <Header windowSize ={windowSize}/>
        <Outlet />
        <Footer />       
    </div>
  )
}
