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

function App() {
  const { loginResponse } = useContext(loginResponseContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/selectUserPage' element={<SelectUserPage />} />
        <Route path='/signup' element={<Authentication signup={true} />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/myrecipes' element={loginResponse ? <MyRecipes /> : <PageNotFound />} />
        <Route path='/allrecipes' element={loginResponse ? <AllRecipes /> : <PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
