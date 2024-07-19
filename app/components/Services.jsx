import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='h-screen px-20'>
        <h1 className='text-6xl cabinet-bold mr-44'>Designs that deliver awesome results!</h1>
        <button className='px-2 py-[2px] rounded-full border-2 border-black flex gap-10 items-center justify-center relative overflow-hidden group mt-10'><h1 className='cabinet-bold text-xl group-hover:text-white transition-all duration-500'>Our Services</h1><h1 className='bg-black text-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold'>›</h1>
        <div className='absolute h-96 w-96 left-0 bg-black rounded-full scale-0 group-hover:scale-100 -z-10 transition-all duration-500'/>
        </button>
        <div className='w-full flex gap-20'>
          <div className='flex flex-col items-center justify-center p-8'>
            <Image src="/ux-design.png" height={200} width={200} className='object-cover'/>
            <h1 className='cabinet-bold text-4xl'>UI & UX Designs</h1>
            <p className='text-sm text-gray-800 cabinet-medium'>Strategic designs that solve problems!</p>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <Image src="/social-media-marketing.png" height={200} width={200} className='object-cover'/>
            <h1 className='cabinet-bold text-4xl'>Digital Marketing</h1>
            <p className='text-sm text-gray-800 cabinet-medium'>We boost your online presence</p>
          </div>
          <div className='flex flex-col items-center justify-center p-8 '>
            <Image src="/business.png" height={200} width={200} className='object-cover'/>
            <h1 className='cabinet-bold text-4xl mt-4'>Complete Package</h1>
            <p className='text-sm text-gray-800 cabinet-medium text-center'>The complete package of both websites and<br/> digital marketing combined</p>
          </div>
        </div>
    </div>
  )
}

export default Services