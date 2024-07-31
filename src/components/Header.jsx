import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (  
    <header className='p-8  py-5 flex flex-wrap  justify-between bg-white items-center'>
        <div className="logo">
          <Link to='/'>
          <h1 className='font-bold text-2xl'>PHOTOSNAP</h1>
          </Link>  
        </div>
        <nav className='flex justify-between gap-4 uppercase font-bold tracking-widest text-gray-600 text-sm'>
            <ul className='flex flex-wrap justify-between gap-4'>
                <li>
                    <Link to='/stories' className='border-2 border-transparent transition-all duration-300 hover:text-black hover:border-2 hover:border-b-black'>Stories</Link>
                </li>
                <li>
                    <Link to='/features'  className='border-2 border-transparent transition-all duration-300 hover:text-black hover:border-2 hover:border-b-black'>Features</Link>
                </li>
                <li>
                    <Link to='/pricing' className='border-2 border-transparent transition-all duration-300 hover:text-black hover:border-2 hover:border-b-black'>Pricing</Link>
                </li>
            </ul>
           
        </nav>
        <button className='bg-black border-2 text-sm border-transparent font-semibold tracking-[.1em] text-slate-100 uppercase p-2 px-6 transition-all duration-500 hover:bg-transparent hover:text-black hover:border-black'>
                Get an invite
        </button>
    </header>
  )
}

export default Header
