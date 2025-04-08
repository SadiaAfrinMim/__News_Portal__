import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
  return (
   <header className='py-4 shadow-md'>
    <nav className='max-w-7xl mx-auto flex  justify-between items-center px-4 sm:px-6 lg:px-8'>
        {/* logo */}
        <div className='text-xl font-bold'>
            <Link href="/">News Portal</Link>
        </div>
        {/* desktop menu  */}
        <NavigationMenu className='hidden lg:flex'>
  <NavigationMenuList>
    <NavigationMenuItem className='flex items-center space-x-8'>
     
        <NavigationMenuLink className='hover:text-red-500 ' href="/news">News</NavigationMenuLink>

        <NavigationMenuLink className='hover:text-red-500 text-base' href="/services">
      <NavigationMenuTrigger className='text-gray-500'>services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='text-gray-600 shadow-md rounded-md px-5 py-4 space-x-2'>
            <li>
            <NavigationMenuLink href='/services/web'>web Development</NavigationMenuLink>
            </li>
            <li>
            <NavigationMenuLink href='/services/marketting'>Digital Marketting</NavigationMenuLink>
            </li>
            <NavigationMenuLink href='/services/seo'>SEO</NavigationMenuLink>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuLink>
    <NavigationMenuLink href="/about">
        About</NavigationMenuLink>

        <NavigationMenuLink href="/contact">
        Contact</NavigationMenuLink>
     
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        {/* color switcher and login button */}

        <div className='hidden lg:flex items-center space-x-4'>
          <div className='flex items-center'>
            <span>dark mode</span>
          </div>
          <Switch />


          <Button variant="default">Login</Button>



        </div>
        {/* mobile hamber menu */}
        <div className='lg:hidden'>
          <Button variant={'outline'}>
          <GiHamburgerMenu size={24}/>
          </Button>
        </div>
    </nav>
   </header>
  )
}

export default Navbar
