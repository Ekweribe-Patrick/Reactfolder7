import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    let [formData, SetformData] =  useState({
        UserName:"",
        Password:"",
        
    })

    let locate = useNavigate()

    let handleChange=(ada)=>{
        SetformData({...formData,[ada.target.name]:ada.target.value})
        // console.log(ada.target.value)
    }

    let handleSubmit=(obi)=>{
        obi.preventDefault()
        // console.log(formData)
        locate('/dashboard', {state:formData.UserName})
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
        <h1 className='font-bold text-3xl mb-10'>Login</h1>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-3'>
            <label className='flex flex-col gap-2'>
                UserName:
                <input type="text" onChange={handleChange} name='UserName' className='border-2 border-white w-[250px] outline-none p-1' />
            </label>

            <label className='flex flex-col gap-2'>
                Password:
                <input type="password" onChange={handleChange} name='Password' className='border-2 border-white w-[250px] outline-none p-1' />
            </label>
            <button className='bg-white text-black p-2 '>Submit</button>
            

        </form>
    </div>
  )
}

export default LoginPage