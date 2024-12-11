import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCHarAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // useRef Hook - for getting reference something
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%&'

    for(let i = 1; i<=length;i++){
      let randomCharIndex = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(randomCharIndex)
    }

    setPassword(pass)
  }
  ,[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }
  ,[password])

  useEffect(()=>{
    passwordGenerator()
  }
  ,[length,numAllowed,charAllowed,setPassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-green-500 bg-gray-700">
        <h1 className='text-white text-center mb-2'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
           />
           <button onClick={copyPasswordToclipboard} className='text-sm px-2 bg-blue-700 text-white'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>setLength(e.target.value)}
            />
            <label  className='text-white'>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={()=> setNumAllowed(prev=>!prev)}
            />
            <label  className='text-white'>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
              defaultChecked={numAllowed}
              id='charInput'
              onChange={()=> setCHarAllowed(prev=>!prev)}
            />
            <label  className='text-white'>Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
