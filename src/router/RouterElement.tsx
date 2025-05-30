import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Page/Home/Home'
import Login from '../Page/Login/Login'
import Register from '../Page/Register/register'
import VerifyEmail from '../Page/VerifyEmail/verifyEmai.tsx'
import Library from '../Page/Library/library.tsx'
import Diagnostic from '../Page/Diagnostic/Diagnostic.tsx'
import Training from '../Page/Training/Training.tsx'
const RouterElement = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/verifyEmail/:email' element={<VerifyEmail />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/diagnostic' element={<Diagnostic />}></Route>
        <Route path='/training' element={<Training />}></Route>
      </Route >
    </Routes >
  )
}

export default RouterElement
