import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/footer/Footer'
import Navbar from '../pages/shared/navbar/Navbar'

function Main() {

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main