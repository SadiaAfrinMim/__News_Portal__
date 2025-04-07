import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <header>
    <nav>
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
