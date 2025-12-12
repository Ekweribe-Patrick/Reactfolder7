import React, {createContext, useState } from 'react'
export let ContextBox = createContext()

function Mycontext({children}) {

    let [theme, setTheme] = useState(true)

    let toggleTheme=()=>{
      setTheme(!theme)
    }

  return (
    <ContextBox.Provider value={{theme, toggleTheme}}>
        {children}
    </ContextBox.Provider>    
  )
}

export default Mycontext