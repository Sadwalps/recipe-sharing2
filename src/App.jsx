import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SelectUserPage from './pages/SelectUserPage'
import Authentication from './pages/Authentication'

function App() {
  
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/selectUserPage' element={<SelectUserPage/>}/>
     <Route path='/signup'  element={<Authentication signup={true}/>}/>
     <Route path='/login' element={<Authentication/>}/>
   </Routes>
    </>
  )
}

export default App
