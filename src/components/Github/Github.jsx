import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([])

    const data = useLoaderData()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/nikhilkoshta')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img className='flex content-center' src={data.avatar_url} alt="avatar" width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nikhilkoshta')
    return response.json()
}