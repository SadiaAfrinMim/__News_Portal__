"use client"

import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'

import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'



const Navbar = () => {
const pathname = usePathname()
 
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
     
        <NavigationMenuLink className={`${pathname==='/news'?'text-red-500 text-semibold':''}hover:text-red-500`} href="/news">News</NavigationMenuLink>

        <NavigationMenuLink className={`${pathname==='/news'?'text-red-500 text-semibold':''}hover:text-red-500`}  href="/services">
      <NavigationMenuTrigger className='text-gray-500'>services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='text-gray-600 shadow-md rounded-md px-5 py-4 space-x-2'>
            <li>
            <NavigationMenuLink className={`${pathname==='/services/web'?'text-red-500 text-semibold':''}hover:text-red-500`} href='/services/web'>web Development</NavigationMenuLink>
            </li>
            <li>
            <NavigationMenuLink className={`${pathname==='/services/marketting'?'text-red-500 text-semibold':''}hover:text-red-500`} href='/services/marketting'>Digital Marketting</NavigationMenuLink>
            </li>
            <NavigationMenuLink className={`${pathname==='/services/seo'?'text-red-500 text-semibold':'' }hover:text-red-500`} href='/services/seo'>SEO</NavigationMenuLink>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuLink>
    <NavigationMenuLink className={`${pathname==='/about'?'text-red-500 text-semibold':''}hover:text-red-500`} href="/about">
        About</NavigationMenuLink>

        <NavigationMenuLink className={`${pathname==='/contact'?'text-red-500 text-semibold':''}hover:text-red-500`} href="/contact">
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
       <MobileMenu></MobileMenu>
    </nav>
   </header>
  )
}

export default Navbar
