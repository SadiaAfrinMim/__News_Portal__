import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'


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
     
        <NavigationMenuLink href="/news">News</NavigationMenuLink>

        <NavigationMenuLink href="/services">
      <NavigationMenuTrigger>services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
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
    <NavigationMenuLink href="/news">
        About</NavigationMenuLink>
     
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        {/* color switcher and login button */}
    </nav>
   </header>
  )
}

export default Navbar
