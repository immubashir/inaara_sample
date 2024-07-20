import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='h-[140vh] px-20 relative'>
        <div>
            <h1 className='mr-28 cabinet-extrabold text-6xl pt-20'>Designs that will make your business standout from the crowd</h1>
            <p className='text-2xl cabinet-medium text-gray-600'>We dont just design, we partner with you to achieve awsomeness!</p>
            <button className='px-2 py-[2px] rounded-full border-2 border-black flex gap-10 items-center justify-center relative overflow-hidden group mt-10'><h1 className='cabinet-bold text-xl group-hover:text-white transition-all duration-500'>View all projects</h1><h1 className='bg-black text-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold'>›</h1>
            <div className='absolute h-96 w-96 left-5 bg-black rounded-full scale-[0.1] group-hover:scale-[1.2] -z-10 transition-all duration-500'/>
            </button>
            <div className='flex flex-col mt-20 gap-28'>
                <div className='flex gap-10 p-8 rounded-xl border-slate-500 hover:bg-slate-500/10 transition-all duration-300 items-center group'>
                    <Image src="/Dribble_Chiro_img.png" height={200} width={400} className='object-cover rounded-3xl absolute scale-[0.2] group-hover:scale-100 right-20 group-hover:translate-x-0 translate-x-12 transition-all duration-500'/>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-4xl font-semibold group-hover:font-black transition-all duration-500'>Reset Wellness Center</h1>
                        <div className='w-full h-[2px] bg-slate-600'/>
                        <p className='cabinet-medium text-lg'>Design, Development, Digital Marketing</p>
                    </div>
                    <button className='relative border-2 border-black px-4 py-[2px] rounded-full overflow-hidden'>
                        <h1 className='text-sm font-bold group-hover:text-white transition-all duration-500'>View project</h1>
                        <div className='h-10 w-full transition-all duration-500 -z-10 bg-black absolute rounded-full -translate-x-36 group-hover:-translate-x-4 group-hover:scale-110 -translate-y-8'/>
                    </button>
                </div>
                <div className='flex gap-10 p-8 rounded-xl border-slate-500 hover:bg-slate-500/10 transition-all duration-300 items-center group'>
                    <Image src="/Dribbble_Divi_img-min.jpg" height={200} width={400} className='object-cover rounded-3xl absolute scale-[0.2] group-hover:scale-100 right-20 group-hover:translate-x-0 translate-x-12 transition-all duration-500'/>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-4xl font-semibold group-hover:font-black transition-all duration-500'>Divi Fertility Center</h1>
                        <div className='w-full h-[2px] bg-slate-600'/>
                        <p className='cabinet-medium text-lg'>Design, Development, Digital Marketing</p>
                    </div>
                    <button className='flex gap-2 items-center justify-center relative border-2 border-black px-4 py-[2px] rounded-full overflow-hidden'>
                        <h1 className='text-sm font-bold group-hover:text-white transition-all duration-500'>View project</h1>
                        <div className='h-10 w-full transition-all duration-500 -z-10 bg-black absolute rounded-full -translate-x-36 group-hover:-translate-x-0 group-hover:scale-110'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects