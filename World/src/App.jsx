import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <Routes>
      <Route path='/' element={<Header/>} >
      <Route index element={<Home/>} />

      </Route>
    </Routes>

    </div>
  )
}

export default App
