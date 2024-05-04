import { useState } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './register.css'
export const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [city,setCity] = useState("")

    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("https://tblog-c7jh.onrender.com/auth/register", {
          name,
          email,
          password,
          city,
        });
        if (response.data.message === "User Registered Successfully") {
          alert("Registration Completed! Do Login!");
        } else {
          alert(response.data.message);
        }
      } catch (err) {
        console.error(err);
      }
    };
    


    return (
        <>
        <div className="container">
          <p style={{ fontSize: '27px', textAlign: 'center' }}>Registration</p>
          <form onSubmit={onSubmit}>
            <input type="text" id="name" placeholder="Name" onChange={(event) => setName(event.target.value)} required />
            <input type="email" id="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required />
            <input type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required />
            <input type="text" id="city" placeholder="City" onChange={(event) => setCity(event.target.value)} required />
            <button style={{ color: 'black', backgroundColor: '#6E85B7' }} type="submit">Register</button>
          </form>
          <p style={{ paddingTop: '10px' }}>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
        </>
      );
}