import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h3>App</h3>
        <Card />
      </div>
       
    </>
  )
}

export default App
