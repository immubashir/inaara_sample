'use client';
import React, {useRef} from 'react'
import {motion, reverseEasing, useScroll, useTransform} from 'framer-motion'

const Hero = () => {

  const rectangles = [
    { x: 0, y: 832, width: 120, height: 124, fill: "#8445fa" },
    { x: 155, y: 783, width: 120, height: 173, fill: "#6344fe" },
    { x: 310, y: 713, width: 120, height: 243, fill: "#4d44fe" },
    { x: 465, y: 800, width: 120, height: 156, fill: "#4563fa" },
    { x: 620, y: 547, width: 120, height: 409, fill: "#328fed" },
    { x: 775, y: 386, width: 120, height: 570, fill: "#38c6f5" },
    { x: 930, y: 219, width: 120, height: 737, fill: "#4492fe" },
    { x: 1085, y: 128, width: 120, height: 828, fill: "#211ed2" },
    { x: 1240, y: 0, width: 120, height: 956, fill: "#1e4ed2" },
  ];

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    pffset: ["start center", "end end"]
  })
  
  const scale8 = useTransform(scrollYProgress, [0,1], [2,8]);
  const round = useTransform(scrollYProgress, [0,1], [80, 5]);
  const moveDown = useTransform(scrollYProgress, [0,1], [0, -20]);
  const moveRight = useTransform(scrollYProgress, [0,1], [0, 410]);

  return (
    <div className='pt-20 px-20'>
      <div className='flex'>
        <div className='w-full h-full flex flex-col'>
          <h1 className='cabinet-extrabold text-6xl'>Skyrocket your brand's true potential</h1>
          <h2 className='text-2xl cabinet-medium text-gray-500'>We at Inaara.ai help you identify and skyrocket your brand's digital identity</h2>
          <div className='flex gap-10 mt-8 items-center z-20'>
            <button className='px-4 py-2 border-black border-2 transition-all duration-500 hover:border-[#359ae7] rounded-full group relative flex items-center justify-center overflow-hidden'>
              <div className='bg-[#359ae7] rounded-full h-full absolute -translate-x-56 transition-transform duration-500 group-hover:translate-x-0 -z-10 w-full'/>
              <h1 className='text-black text-xl cabinet-bold group-hover:text-white transition-all duration-500'>Explore Work</h1>
            </button>
            <button className='px-4 py-2 bg-[#6978B1] rounded-full z-20 group overflow-hidden flex items-center justify-center gap-2 relative'>
              <div className='h-6 w-6 bg-[#bfc4da] rounded-full'/>
              <div className='h-6 w-6 absolute bg-sky-300 rounded-full left-4 -z-10 group-hover:w-full group-hover:h-full transition-all duration-300'/>
              <div className='h-6 w-6 absolute bg-[#48527a] rounded-full left-4 -z-10 group-hover:w-full group-hover:h-full transition-all group-hover:duration-500'/>
              {/* <div className='h-6 w-6 absolute bg-sky-500 rounded-full left-4 -z-10 group-hover:scale-[10] transition-all duration-500'/>
              <div className='h-6 w-6 absolute bg-blue-500 rounded-full left-4 -z-10 group-hover:scale-[10] transition-all duration-700'/> */}
              <h1 className='text-xl text-white cabinet-bold z-10'>Contact Us</h1>
            </button>
          </div>
        </div>
        <div className='h-[370px] w-5/6 overflow-hidden relative'>
        <motion.svg width="600" height="300" viewBox="0 0 1273 913" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-2 top-5 ">
          <motion.path 
          initial = {{pathLength: 0, pathOffset: 1}}
          animate = {{pathLength: 1, pathOffset: 0,transition: {duration: 1}}}
          d="M1270.5 2.49999L1102.5 210.5L942.499 226L791 461L615.5 548L472.5 846L323 770L176 890L1.00004 910" stroke="url(#paint0_linear_29_181)" stroke-width="18"/>
          <defs>
          <linearGradient id="paint0_linear_29_181" x1="72.077" y1="1003.36" x2="1313.16" y2="58.5383" gradientUnits="userSpaceOnUse">
          <stop stop-color="#a538ff"/>
          <stop offset="0.5" stop-color="#0eabff"/>
          <stop offset="1" stop-color="#0E6EFF"/>
          </linearGradient>
          </defs>
        </motion.svg>
        <motion.svg
          className="absolute top-20 right-8"
          width="600"
          height="400"
          viewBox="0 0 1000 1300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {rectangles.map((rect, index) => (
            <motion.rect
              key={index}
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              fill={rect.fill}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1}}
              style={{ originY: 'bottom'}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
          ))}
        </motion.svg>
        <motion.div 
        initial = {{scale:0}}
        animate = {{scale: 1, transition: {delay: 0.8}}}
        className='absolute top-0 right-2 p-[2px] rounded-full border-2 border-slate-400 flex'>
          <h1 className='text-green-400'>•</h1>
          <h1 className='text-slate-800 cabinet-black px-[2px] rounded-full'>$200k</h1>
        </motion.div>
      </div>
      </div>
        {/* <div className='h-1/2 w-full bg-[#e1e4e6] mt-28 rounded-3xl drop-shadow-xl p-4 flex gap-8 items-center justify-center'>
            <h1 className='cabinet-bold text-4xl'>Here's what we were able to generate for our clients</h1>
            <div className='h-3/4 w-1/3 flex flex-col items-center justify-center border-l-2 border-gray-500'>
                <h1 className='text-6xl cabinet-bold'>200%</h1>
                <h2 className='font-semibold text-xl'>Increase in sales</h2>
            </div>
            <div className='h-3/4 w-1/3 flex flex-col items-center justify-center border-l-2 border-gray-500'>
                <h1 className='text-6xl cabinet-bold'>$100k</h1>
                <h2 className='font-semibold text-xl'>Profit Generated</h2>
            </div>
        </div> */}
      <div ref={ref} className='mt-[-61vh] h-[180vh] relative'>
          <div className='sticky h-[100vh] top-36'>   
            <div className='px-20 w-full h-full absolute top-0 flex justify-start items-center pt-10'>
                <motion.video 
                width="400" height="250" autoPlay loop muted
                className='w-[12vw] h-[12vh] relative flex items-center justify-center object-cover'
                style={{y:moveDown, scale: scale8, borderRadius: round, x:moveRight}}
                transition={{ type: 'spring', stiffness: 200, duration: 0.2 }}
                >
                  <source src="/sample_vid.mp4"/>
                </motion.video>
            </div>
          </div>      
      </div>
    </div>
  )
}

export default Hero