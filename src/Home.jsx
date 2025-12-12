import React, { useContext } from 'react'
import { ContextBox } from './Mycontext'

function Home() {

  let {theme} = useContext(ContextBox)
  return (
    <div className={`flex h-screen justify-center items-center duration-300 ${theme == true? "bg-white text-black" : "bg-black text-white"}`}>Home page</div>
  )
}

export default Home