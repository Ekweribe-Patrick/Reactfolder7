import React, { useContext } from 'react'
import { ContextBox } from './Mycontext'

function About() {

  let {theme} = useContext(ContextBox)
  return (
    <div className={`flex h-screen justify-center items-center duration-700 ease-in-out ${theme == true? "bg-white text-black" : "bg-black text-white"}`}>About Page</div>
  )
}

export default About