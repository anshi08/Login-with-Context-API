import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Using Context
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password})
    }

  return (
    <>
     <h2 className='text-center text-2xl bg-gray-600 p-4 text-white'>Login</h2>
     <input 
     className='my-2 mx-3 outline p-1 rounded-lg'
     value={username}
     onChange={(e) => setUsername(e.target.value)}
     type='text' 
     placeholder='UserName...'
     /> <br />
     <input 
     className='my-2 mx-3 outline p-1 rounded-lg'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     type='text' 
     placeholder='Password...'
     /> <br/>
     <button 
     className='my-2 mx-3 bg-slate-300 rounded-lg p-2 shadow-lg '
     onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login