import RouterElement from './router/RouterElement'
import '../src/style.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './Components/mode-toggle/ThemeContext'
function App() {

  return (
    <ThemeProvider>
      <RouterElement />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </ThemeProvider>
  )
}

export default App
