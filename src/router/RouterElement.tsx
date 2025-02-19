import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Page/Home/Home'
import Login from '../Page/Login/Login'
import Register from '../Page/Register/register'
import Tensorflow from '../Page/TensorFlow/tensorflow'
import PageRan from '../Page/Category/pageRan.tsx'
import PageDetails from '../Page/Details_Animal/pageDetails.tsx'
import VerifyEmail from '../Page/VerifyEmail/verifyEmai.tsx'

const RouterElement = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/findAnimal' element={<Tensorflow />}></Route>
        <Route path='/pageRan' element={<PageRan />}></Route>
        <Route path='/detailsRan' element={<PageDetails />}></Route>
        <Route path='/verifyEmail' element={<VerifyEmail />}></Route>
      </Route>
    </Routes>
  )
}

export default RouterElement
