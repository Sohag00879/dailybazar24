import { Outlet } from "react-router-dom"
import AppFooter from "./components/UI/Footer"
import Navbar from "./components/UI/Navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default App
