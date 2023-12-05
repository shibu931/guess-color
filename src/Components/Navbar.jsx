import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  py-4 px-2'>
        <Link href="/" className='ms-2 text-xl'>Colorify</Link>
        <ul className='flex '>
            <li className='mx-4'>Home</li>
            <li className='mx-4'>About Us</li>
            <li className='mx-4'>FAQs</li>
            <li className='mx-4'>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar