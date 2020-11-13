import React from "react";
import { useForm } from 'react-hook-form';

import {login} from '../utils'

const Login = () => {
  const { register, handleSubmit, errors, reset } = useForm({ 
    mode: 'onBlur', 

  });
  const onSubmit = data => { 
    login(data)
    reset()
  }
  
  console.log(errors);
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className='login-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" 
          placeholder="username" 
          name="username" 
          ref={register({required: true, maxLength:   80})} 
          />
        <input type="password" 
        placeholder="password" 
        name="password" 
        value='i<3Lambd4'
        ref={register({required: true, maxLength:  32})} 
        />

        <input type="submit" />
      </form>
    </div>
    </>
  );
};

export default Login;
