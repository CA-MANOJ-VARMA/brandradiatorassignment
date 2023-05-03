import React, { useState } from 'react'
import './index.css'

const AdminComponent = () => {
  const [formInput,setForminput] = useState({
    name:'',
    password:'',
  })

  const onChangeFunction = (event) =>{
    if (event.target.name==='Name'){
      setForminput({...formInput,name:event.target.value})
    }
    if (event.target.name==='Passoword'){
      setForminput({...formInput,password:event.target.value})
    }
    }

    const formSubmitFunction = (event) =>{
      event.preventDefault()
    }
  

  return (
    <>
    <div  className='css-admin-container'>
      <form className='css-login-form-container' onSubmit={formSubmitFunction}>
        <h2>Login Page</h2>
      <div className='css-input-container'>
            <label htmlFor='Name'><p>Login ID</p></label>
            <input type='text'  id='Name' className='css-login-input-itself' name="Name" onChange={onChangeFunction} value={formInput.name} placeholder='Enter Login ID' />
          </div>
          <div className='css-input-container'>
            <label htmlFor='password'><p>Password</p></label>
            <input type='password' id='password' className='css-login-input-itself'  name="Password" onChange={onChangeFunction}  value={formInput.email} placeholder='Enter Password' />
          </div>
          <button type='submit' className='css-submit-button css-login-button'>Login</button>
      </form>
      </div>
    </>
    
  )
}

export default AdminComponent