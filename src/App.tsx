import { Outlet } from "react-router-dom"
import Navbar from "./components/UI/Navbar/Navbar"

function App() {

  return (
    <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
