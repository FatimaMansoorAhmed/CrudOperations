import React, { useState } from 'react'
import {auth} from './firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export const SignUp = () => {
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      createUserWithEmailAndPassword(auth,email,password)
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
        <h2>Sign Up</h2>
        <label htmlFor='email'>
          Email:
          <input type='text' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor='password'  onChange={(e) => setPassword(e.target.value)}>
          Password:
          <input type='text'/>
        </label>
        <button type='submit'>SignUp</button>
      
      </form>
    </div>
  </>
  )
}

