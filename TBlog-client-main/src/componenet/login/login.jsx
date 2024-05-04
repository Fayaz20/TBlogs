// import { useState } from 'react';
// import './login.css'
// import axios from 'axios';
// import {useCookies} from "react-cookie"
// import {useNavigate} from 'react-router-dom'
// export const Login = () => {
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")

//   const navigate = useNavigate();
//   const [_,setCookies] = useCookies(["access_token"])
  
//   const onSubmit = async(event) => {
//     event.preventDefault();
//     try{
//       const response = await axios.post("http://localhost:5000/auth/login",{
//           email,
//           password,
//         })
//         setCookies("access_token",response.data.token);
//         window.localStorage.setItem("userID",response.data.userID);
//         navigate("/blogs")
//     }catch(err) {
//       console.error(err);
//     }
//   }
//   return (
//     <>
//       <div className="con">
//         <p style={{ fontSize: '27px', textAlign: 'center' }}>Login to TBlog</p>
//         <form onSubmit={onSubmit}>
//           <input type="email" id="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
//           <input type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
//           <button style={{ color: 'black', backgroundColor: '#6E85B7' }} type="submit">
//             Log In
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://tblog-c7jh.onrender.com/auth/login", {
        email,
        password,
      });
      if (response.data.message === "Correct Password") {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate("/blogs");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("An error occurred during login.");
      }
    }
  };
  
  

  return (
    <>
      <div className="con">
        <p style={{ fontSize: '27px', textAlign: 'center' }}>Login to TBlog</p>
        <form onSubmit={onSubmit}>
          <input type="email" id="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
          <input type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          <button style={{ color: 'black', backgroundColor: '#6E85B7' }} type="submit">
            Log In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};
