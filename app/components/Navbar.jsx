import React from 'react'

const Navbar = () => {
  return (
    <div className='z-[999] fixed w-full cabinet-bold text-xl flex items-center justify-between px-20 py-5'>
        <div>Logo</div>
        <ul className='flex gap-10'>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar