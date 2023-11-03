import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/*' element={<Home />}/>
      <Route path='/sign-in' element={<Signin />}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
