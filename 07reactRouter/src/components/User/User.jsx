import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { id } = useParams()
  return (
    <div>
      <h1 className='bg-blue-300 text-white font-bold text-center p-4'>User : {id} </h1>
    </div>
  )
}
