import { useState } from 'react'
import TaycanProductPage from './components/page';
import { CarProvider } from './components/carcontext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarProvider>
      <TaycanProductPage/>
    </CarProvider>
    </>
  )
}

export default App
