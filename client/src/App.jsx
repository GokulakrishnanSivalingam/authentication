import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login.jsx';
import Register from './Register.jsx';
import Landing from './Landing.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
  
        <BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/landing' element={<Landing/>}/>
      </Routes>
      </BrowserRouter>
      
  )
}

export default App
