import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Signin } from './pages/Signin'
import Signout from './pages/Signout'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<Signin />}/>
      <Route path='/sign-out' element={<Signout/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
