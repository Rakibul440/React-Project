import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter]  = useState(0)

  const addValue = ()=>{
    if(counter<20 && counter>=0)
      setCounter(counter + 1)
  }
  const removeValue = ()=>{
    if(counter<=20 && counter>0)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <p>Counter Value {counter}</p>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
