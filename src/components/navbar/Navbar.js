import React, { useEffect, useState } from 'react'
import DeskTopNavbar from './DeskTopNavbar'
import MobileNavbar from './MobileNavbar'

function Navbar({ theme }) {

    return (
        <>
            <div className='lg:block hidden sticky top-0 z-50 bg-white dark:bg-[#242424]'>
                <DeskTopNavbar theme={theme} />
            </div>
            <div className='lg:hidden block sticky top-0 z-50 bg-white dark:bg-[#242424]'>
                <MobileNavbar theme={theme} />
            </div>
        </>
    )
}

export default Navbar