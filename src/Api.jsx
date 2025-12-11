import React, { useEffect, useState } from 'react'

function Api() {

    let [storedata,setData] = useState([]);

    useEffect(()=>{
        fetch('https://food-backend-3xb1.onrender.com/restaurants')
          .then(response => response.json())
          .then(data => setData(data));
    },[])

  return (
    <div className='min-h-screen bg-gray-400 grid grid-cols-5 gap-6 p-2'>
    
      {
       storedata.map((item)=>(
          <div className=' bg-neutral-700 p-3 text-white w-[200px]'>
            <div className='h-[150px] bg-white p-1 rounded-md'>
              <img src={item.image} className='h-full w-full' />
            </div>
            <h1>{item.name}</h1>
            <p>{item.address}</p>
          </div>
       ))
      }
      
    </div>
  )
}

export default Api