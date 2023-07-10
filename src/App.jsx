import { useState } from 'react'
import Students from './pages/Students'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Students/>      
    </>
  )
}

export default App
