import { Link } from "react-router-dom";
import './Frontpg.css'
export const Frontpg = () => {
    return (
        <>
            <div className="front-con">
                <div className="front-center">
                    <h1 className="front-h1">Welcome to TravelBlog</h1>
                    <p className="front-p">Our website provides a platform for travel enthusiasts to share their travel experiences.</p>
                    <div className="front-buttons">
                    <Link className="front-button" to="/register">Register</Link>
                    <Link className="front-button" to="/login">Sign In</Link>
                    </div>
                </div>
            </div>
        </>
    )
}