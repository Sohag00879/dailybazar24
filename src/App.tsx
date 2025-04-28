import { Outlet } from "react-router-dom"

function App() {

  return (
    <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
      <Outlet />
    </div>
  )
}

export default App
