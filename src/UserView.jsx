import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function UserView() {

    const params = useParams()
    
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams)
    const [userData, setUserData] = useState({});
    
    useEffect(()=>{
        loadUser()
    },[])
    let loadUser = async ()=>{
        try {
            let user = await axios.get(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/users/${params.id}`)
            setUserData(user.data)
        }
        catch(error){

        }
       
}
   
  return (
    <div>
        <h1>{userData.name}</h1>
        <h1>{userData.position}</h1>
        <h1>{userData.office}</h1>
        <h1>{userData.age}</h1>
        <h1>{userData.startdate}</h1>
        <h1>{userData.salary}</h1>
        

       
    </div>
  )
}

export default UserView