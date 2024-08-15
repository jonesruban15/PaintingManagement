import React from 'react'
import Sidebar from '../SideBar.js/Sidebar'
import './Maindashboard.css'
import ViewPages from '../Components/ViewPages/ViewPages'

const Maindashboard = () => {
  return (
    <div className='maindashborad'>
        <div className='maindashboradglass'>
        <Sidebar />
        <ViewPages/>
        </div>
    </div>
  )
}

export default Maindashboard