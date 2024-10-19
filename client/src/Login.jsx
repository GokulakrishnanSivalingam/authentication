import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import './App.css'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const [error, setError] = useState("")

  async function Log(e) {
    e.preventDefault();

     
    const resp = await fetch("https://educative-game-2.onrender.com/",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (resp.ok) {
    
      navigate('/landing'); 
    } else {
      
   setError("invalid user")
    }

 
  }

   
  

  return (
    <>
      <div>
        <fieldset>
        <h1>Login</h1><br />
        <form >
          <label htmlFor="email">Email</label><br />
          <input 
            type="text" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)} 
             
          required/><br />
          <p>{error}</p>
          
          <label htmlFor="password">Password</label><br />
          <input 
            type="password" 
            name="password" 
            onChange={(e) => setPassword(e.target.value)} /><br />
       <div className="check"><input type="checkbox" /><span>remember me</span></div>
          <br />
     <center> <button type='submit' onClick={Log}>login</button> </center>   
        </form><br />
        <p> do not have any account <a href="/register">register</a>
     </p>
        </fieldset><br />
    

      </div>
    </>
  )
}

export default Login;

