import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (  
    <header className='p-8 flex flex-wrap  justify-between bg-white items-center'>
        <div className="logo">
          <Link to='/'>
          <h1 className='font-bold text-2xl'>PHOTOSNAP</h1>
          </Link>  
        </div>
        <nav className='flex justify-between gap-4'>
            <ul className='flex flex-wrap justify-between gap-4'>
                <li>
                    <Link to='/stories'>Stories</Link>
                </li>
                <li>
                    <Link to='/features'>Features</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
            </ul>
           
        </nav>
        <button className='bg-black font-semibold tracking-[.1em] text-slate-100 uppercase p-2 px-6'>
                Get an invite
        </button>
    </header>
  )
}

export default Header
