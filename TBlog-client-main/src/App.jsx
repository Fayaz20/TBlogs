import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Frontpg} from "./componenet/frontpg/Frontpg";
import {Aboutus} from "./componenet/aboutus/Aboutus";
import {Contactus} from "./componenet/contactus/Contactus";
import { Navbar } from './componenet/navbar/navbar';
import { Register } from './componenet/register/register';
import { Login } from './componenet/login/login';
import {Addpost} from './componenet/addpost/addpost'
import {Blogs} from './componenet/blogs/blogs'
import {Profile} from './componenet/profile/profile'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Frontpg/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/contactus' element={<Contactus/>} />
          <Route path='/addpost' element={<Addpost/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
