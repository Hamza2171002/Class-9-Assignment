import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center h-10 bg-blue-600'>
        <div className=' bg-black h-6 w-10'></div>

        <div className='bg-orange-500 h-6 w-20'></div>

        <div>
            <ul className='flex space-x-16'>
                <li className='bg-red-900 h-6 w-10'></li>
                <li className='bg-pink-400 h-6 w-10'></li>
                <li className='bg-purple-500 h-6 w-10'></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
