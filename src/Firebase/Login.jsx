import React, { useState } from 'react'
import {auth} from './firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';    
export const Login = () => {
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      signInWithEmailAndPassword(auth,email,password)
      console.log("Created Successfully")
    }catch(error)
    { 
console.log(error)
    }
  }
  return (
  <>
      <div className='sign'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='email'>
          Email:
          <input type='text' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor='password'  onChange={(e) => setPassword(e.target.value)}>
          Password:
          <input type='text'/>
        </label>
        <button type='submit'>Login</button>
        <p>Dont have account<Link to= "/Signup">Sign Up</Link></p>
      
      </form>
    </div>
  </>
  )
}


