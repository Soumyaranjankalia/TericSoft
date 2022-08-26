import { useState } from 'react'
import './App.css'
import { AllRoutes } from './components/AllRoutes'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <AllRoutes/> */}
    </div>
  )
}

export default App
