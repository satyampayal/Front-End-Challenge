
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import CountryDetails from './Pages/CountryDetails/CountryDetails'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route exact path='/' element={<Header/>} >
         <Route index element={<Home/>}  />
         <Route path='/:code' element={<CountryDetails/>} />

      </Route>
    </Routes>
    
    </>
  )
}

export default App
