import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext)

  if(!user) return <div>Please Login</div>
  return (
    <div>
        welcome {user.username}
    </div>
  )
}
