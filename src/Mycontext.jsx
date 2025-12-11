import React, {createContext, useState } from 'react'
export let ContextBox = createContext()

function Mycontext({children}) {

    let [theme, setTheme] = useState(false)
  return (
    <ContextBox.Provider value={theme}>
        {children}
    </ContextBox.Provider>    
  )
}

export default Mycontext