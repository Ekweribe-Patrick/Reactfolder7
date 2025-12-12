import React, { useContext } from 'react'
import { ContextBox } from './Mycontext'
import { Link } from 'react-router-dom'

function Header() {
    let {theme,toggleTheme} = useContext(ContextBox)
  return (
    <div className='flex justify-around p-3 bg-gray-800 text-white '>
        <h1>Logo</h1>
        <nav>
            <ol className='flex gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ol>
        </nav>
        <button onClick={toggleTheme} className={`rounded-2xl w-[120px] cursor-pointer ${theme==true? "bg-white text-black" : "bg-black text-white"}`}>Darkmode</button>
    </div>
  )
}

export default Header