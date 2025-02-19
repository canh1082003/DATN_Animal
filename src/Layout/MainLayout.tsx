import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const MainLayout = () => {
  return (
    <div>
      {/* <StairEffect /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
