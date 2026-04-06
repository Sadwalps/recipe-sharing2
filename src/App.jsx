import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SelectUserPage from './pages/SelectUserPage'
import Authentication from './pages/Authentication'
import PageNotFound from './pages/PageNotFound'
import AdminDashboard from './pages/AdminDashboard'
import MyRecipes from './pages/MyRecipes'
import AllRecipes from './pages/AllRecipes'
import { loginResponseContext } from './context/ContextShare'
import { useContext } from 'react'
import AdminAuthentication from './pages/AdminAuthentication'
import AdminRecipes from './pages/AdminRecipes'
import AdminChats from './pages/AdminChats'
import UserChats from './pages/UserChats'
import AdminRecipes2 from './pages/AdminRecipes2'

function App() {
  const { loginResponse } = useContext(loginResponseContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/selectUserPage' element={<SelectUserPage />} />
        <Route path='/signup' element={<Authentication signup={true} />} />
        <Route path='/adminSignup' element={<AdminAuthentication adminSignup={true} />} />
        <Route path='/adminLogin' element={<AdminAuthentication />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/myrecipes' element={<MyRecipes />} />
        <Route path='/allrecipes' element={loginResponse ? <AllRecipes /> : <PageNotFound />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/adminallrecipes' element={<AdminRecipes />} />
        <Route path='/chats' element={<UserChats />} />
        <Route path='/adminchats' element={<AdminChats />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/adminuserrecipes' element={<AdminRecipes2 />} />
      </Routes>
    </>
  )
}

export default App
