import React from 'react'

function Render({name}) {
    let array =["Paris", "France", "9ja", "Monaco", "japan"]
  return (
    <div>
        <h1>COUNTRIES OF THE WORLD</h1>
         
        <ol>
            {
                array.map((cat)=>(
                    <li>{cat}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default Render