import './profile.css'
import { useEffect, useState } from "react"
import { useGetUserID } from "../../hooks/useGetUserID";
import axios from 'axios'
export const Profile = () => {
    const [tblogs, setTblogs] = useState([]);
    const [user, setUser] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const userID = useGetUserID();
    useEffect(() => {
        const fetchTblog = async () => {
            try {
                const response = await axios.post("https://tblog-c7jh.onrender.com/tblogs/yourblogs", { userOwner: userID })
                setTblogs(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchTblog();
    }, []);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.post("https://tblog-c7jh.onrender.com/auth/details", { _id: userID })
                setUser(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchUser();
    }, []);
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
        <div class='flexbox'>
            <div class="boxx">
                <h2>Name : {user.name}</h2>
                <h2>Email : {user.email}</h2>
                <h2>City :{user.city} </h2>
            </div>
            </div>
            {tblogs.map((tblog) => (
                <div className="feed-item">
                    <div className="image-container">
                        <img src={tblog.imageUrl} alt={tblog.name} className="feed-image" />
                    </div>
                    <div className="content-container">
                        <div className="header-container">
                            <h3 className="feed-name">{tblog.name}</h3>
                            <p className="feed-location">{tblog.location}</p>
                        </div>
                        <div className={`description-container ${isExpanded ? 'expanded' : ''}`}>
                            {isExpanded ? tblog.description : `${tblog.description.slice(0, 100)}...`}
                        </div>
                        {!isExpanded && (
                            <p className="read-more" onClick={toggleDescription}>
                                Read More
                            </p>
                        )}
                        {isExpanded && (
                            <p className="read-more" onClick={toggleDescription}>
                                Read Less
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}