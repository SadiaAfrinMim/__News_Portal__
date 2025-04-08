import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'
import { NewsCardProps } from '@/types/news'

const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
        <Link href={`/news/${item._id}`}>
        <Image  src={item?.image_url}  width={500}     
  height={400}    alt='news image' className='mb-4 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'></Image>
        </Link>
        <div>
            <h2 className='text-xl font-semibold my-3'>{item.title}</h2>
            <p className='mb-4'>{item.details}</p>
            <Link href={`/news/${item._id}`}>
            <Button variant={'default'}>Read More</Button>
            </Link>
        </div>
      
    </div>
  )
}

export default NewsCard
