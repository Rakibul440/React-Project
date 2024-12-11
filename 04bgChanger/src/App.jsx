import { useState } from "react"



function App() {
  const [color,setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
          <div className="button flex flex-wrap gap-3 rounded-3xl bg-white px-8 py-2">
            <button onClick={()=>setColor("red")} style={{backgroundColor: 'red'}} className=" w-20 outline-none rounded-2xl px-5 py-1 text-white">Red</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor: 'blue'}} className=" w-20 outline-none rounded-2xl px-5 py-1 text-white">Blue</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor: 'green'}} className=" w-20 outline-none rounded-2xl px-5 py-1 text-white">Green</button>
            <button onClick={()=>setColor("black")} style={{backgroundColor: 'black'}} className=" w-20 outline-none rounded-2xl px-5 py-1 text-white">Black</button>
            <button onClick={()=>setColor("yellow")} style={{backgroundColor: 'yellow'}} className=" w-20 outline-none rounded-2xl px-5 py-1 text-white">Yellow</button>
            <button onClick={()=>setColor("pink")} style={{backgroundColor: 'pink'}} className=" w-20 outline-none rounded-2xl px-5 py-1 text-white">Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
