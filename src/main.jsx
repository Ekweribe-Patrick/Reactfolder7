import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Dashboard from './Dashboard' 
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import Api from './Api'
import Render from './Render'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Mycontext from './Mycontext'
import Home from './Home'
import Header from './Header'
import About from './About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dashboard/> */}
    {/* <LoginPage/> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter> */}
    {/* <Api/> */}
      {/* <Render/> */}

      <Mycontext>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </Mycontext>



  </StrictMode>,
)
