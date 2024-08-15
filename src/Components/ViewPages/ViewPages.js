import React from 'react'
import './ViewPage.css'
import { Outlet } from 'react-router-dom'

const ViewPages = () => {
  return (
    <div className='MainDash'>

       <Outlet />
       
    </div>
  )
}

export default ViewPages
