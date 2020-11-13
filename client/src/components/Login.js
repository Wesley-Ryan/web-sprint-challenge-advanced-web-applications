

import React from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import {login} from '../utils'



const Login = () => {
  const { register, handleSubmit, reset } = useForm({ 
    mode: 'onBlur', 

  });
  const history =useHistory()
  const onSubmit = data => { 
    login(data)
    reset()
    history.push('/bubbles')
  }
  
  const Container = { 
     margin: '0 auto',
     marginTop: '100px',
    width:'250px', 
    border:'1px solid black', 
    borderRadius: '5px', 
    padding: '1%'
    
  }

  
  return (
    <div style={{margin: '0 auto', color: 'white', background: 'black', width:'100%'}}>
      <h1 style={{margin: '0 auto'}}>Welcome to the Bubble App!</h1>
      <div >
        <form onSubmit={handleSubmit(onSubmit)}
        style={Container}>
          <input 
          type="text" 
          placeholder="username" 
          name="username" 
          ref={register({required: true, maxLength:   80})} 
          style={{width:'80%', margin: '0 auto', marginTop: '10px'}}
          />
        <input 
        type="password" 
        placeholder="password" 
        name="password" 
        value='i<3Lambd4'
        ref={register({required: true, maxLength:  32})} 
        style={{width:'80%', margin: '0 auto',marginTop: '10px' }}
        />

        <input type="submit" style={{width:'200px', 
        margin: '0 auto', 
        marginTop: '10px',
        color:'white', 
        background:'#6d2aff'}}
        />
      </form>
    </div>
    </div>
  );
};

export default Login;
