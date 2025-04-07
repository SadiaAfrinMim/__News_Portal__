import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <header>
    <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* logo */}
        <div>
            <Link href="/">News Portal</Link>
        </div>
        {/* desktop menu  */}
        {/* color switcher and login button */}
    </nav>
   </header>
  )
}

export default Navbar
