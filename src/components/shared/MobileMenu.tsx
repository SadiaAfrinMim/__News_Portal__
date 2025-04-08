import React, { useState } from 'react'
import { Button } from '../ui/button'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const MobileMenu = () => {
     const[isMenuOpen,setIsMenuOpen] = useState(false)
      const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
      }
  return (
    <div>
        <div className='lg:hidden'>
                  <Button onClick={toggleMenu} variant={'outline'}>
                  {
                    isMenuOpen?<AiOutlineClose size={24}></AiOutlineClose>:<GiHamburgerMenu size={24}/>
                  }
                  </Button>
                </div>
      
    </div>
  )
}

export default MobileMenu
