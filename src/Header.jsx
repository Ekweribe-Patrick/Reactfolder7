import React, { useContext } from 'react'
import { ContextBox } from './Mycontext'
import { Link } from 'react-router-dom'

function Header() {
    let {theme} = useContext(ContextBox)
  return (
    <div className='flex justify-around p-3 '>
        <h1>Logo</h1>
        <nav>
            <ol className='flex gap-2.5'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ol>
        </nav>
        <button className='bg-gray-300 rounded-2xl w-[120px] cursor-pointer'>Darkmode</button>
    </div>
  )
}

export default Header