import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();

  async function Log(e) {
    e.preventDefault();

     
    const resp = await fetch("https://educative-game-2.onrender.com/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        confirmpassword
      }),
    })
    if (resp.ok) {
    
      navigate('/landing'); 
    } else {
      
      console.log("Login failed");
    }

 
  }

   
  

  return (
    <>
      <div>
        <fieldset>
        <h1>Register</h1><br />
        <form >
          <label htmlFor="email">Email</label><br />
          <input 
            type="text" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)} 
            required
          /><br />
          
          <label htmlFor="password">Password</label><br />
          <input 
            type="password" 
            name="password" 
            onChange={(e) => setPassword(e.target.value)} 
            required
          /><br />
           <label htmlFor="password">confirm-Password</label><br />
          <input 
            type="password" 
            name="confirmpassword" 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
          <br /><br />
     <center> <button onClick={Log}>register</button> </center>   
     
        </form>
      
        </fieldset><br />
    

      </div>
    </>
  )
}

export default Register