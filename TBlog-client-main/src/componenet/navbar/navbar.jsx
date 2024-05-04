import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'
import './navbar.css'
import logo from '../../images/travel-blog-logoebited.jpg';
import bimg from '../../images/travel.jpg'
export const Navbar = () => {
    const [cookies, setCookies] =useCookies(["access_token"]);
    const navigate = useNavigate();
    const logout = () => {
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
        navigate("/");
    }
    return (
        <>
            <body >
                <div >
                    <ul className="navbar">
                        <li className="navbar-logo">
                            TBlog
                        </li>
                        {!cookies.access_token ? (<li><Link to="/">Home</Link></li>):null}
                        {!cookies.access_token ? (<li><Link to="/register">Register</Link></li>):null}
                        {!cookies.access_token ? (<li><Link to="/login">Sign In</Link></li>):null}
                        {cookies.access_token ? (<li><Link to="/blogs">Blogs</Link></li>):null}
                        {cookies.access_token ? (<li><Link to="/addpost">Add Post</Link></li>):null}
                        {cookies.access_token ? (<li><Link to="/profile">Profile</Link></li>):null}
                        {cookies.access_token ? (<li><button className="butt" onClick={logout}>Logout</button></li>):null}
                        {!cookies.access_token ? (<li><Link to="/aboutus">About Us</Link></li>):null}
                        {!cookies.access_token ? (<li><Link to="/contactus">Contact Us</Link></li>):null}
                        
                    </ul>
                </div>
            </body>

        </>
    )
}
