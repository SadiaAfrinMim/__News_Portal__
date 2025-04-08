import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import bannerImage from '@/assets/photo-1553368561-5ccfe639f28b.jpg'

const Banner = () => {
  return (
    <div className='bg-slate-100' >
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-5'>
        <div className=''>
            {/* images */}
           <Image src={bannerImage} alt='banner image'/>
        </div>
        <div className='space-y-4 flex flex-col'>
            {/* content */}
            <h4 className='text-xl font-medium text-gray-500'>Technology</h4>
            <h2 className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam deleniti iure eos ab.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere atque dolorem officiis veniam consequuntur sint in architecto labore reiciendis neque?

                <br/><br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam adipisci, ad dolorum veritatis unde blanditiis quae ea ducimus tempore vel.
            </p>
            <Button variant={"default"}>Read More</Button>
        </div>
    </div>
    </div>
  )
}

export default Banner
