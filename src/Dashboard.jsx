import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard() {

  let find =useLocation()
  // console.log(find.state)
  return (
    <div className='h-screen flex p-3 gap-4 bg-amber-400'>
      <nav className='w-[20%] bg-black rounded-xl text-white grid place-items-center'>
        <ol className='flex flex-col gap-6 cursor-pointer'>
          <li>Profile</li>
          <li>Notification</li>
          <li>Settings</li>
        </ol>
      </nav>
      <main className='w-[80%]'>
        <h1 className='text-3xl font-bold'>Welcome back, <span className='font-light italic'>{find.state}</span></h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum doloremque illum quam odit fuga odio consequuntur iusto suscipit. Maiores nostrum, tempora reiciendis nemo accusamus tenetur iusto ipsum nesciunt eaque! Quasi fuga ipsam magnam illum, quidem laborum? Aut vero accusamus optio maxime eius in, id voluptatibus, laboriosam fugiat aperiam quasi!
        </p>
      </main>
    </div>
  )
}

export default Dashboard