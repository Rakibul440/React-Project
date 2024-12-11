import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // for load data from loader in route

export default function Github() {

    const data = useLoaderData()

    //is use loader in router then it's not necessary
    // const [data,setData] = useState(0)

    // useEffect (()=>{
    //     fetch('https://api.github.com/users/Rakibul440')
    //     .then((res)=> res.json())
    //     .then((data)=>{ setData(data),console.log(data);
    //     })
    //     .catch((err)=> console.error(err))
    // },[])

  return (
    <>
        <div className='bg-blue-300 text-white font-bold text-center p-4'>
            Github Followers : {data.followers}  
            <img src={data.avatar_url} alt="avatar" width="300px"/>
        </div>
    </>
  )
}

//for loader
export const githubInfoLoad = async ()=>{
    const response = await fetch('https://api.github.com/users/Rakibul440')
    return  response.json()
}
