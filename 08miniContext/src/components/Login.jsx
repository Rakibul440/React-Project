import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'


export default function Login() {

    const [password,setPassword] = useState('')
    const [username,setUsername]  = useState('')

    // fatching data from 'UserContext'

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div style={{
        width: "400px",
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        gap : '10px'
        
    }}>
      <h2>Login</h2>
      <input onChange={(e)=>setUsername(e.target.value)} type="text" width='300px' placeholder='username' autoFocus required />
      <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password'  required />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
