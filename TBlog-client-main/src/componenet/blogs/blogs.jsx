// import { useEffect, useState } from "react"
// import axios from 'axios'
// import './blogs.css'
// export const Blogs = () => {

//     const [tblogs, setTblogs] = useState([]);
//     const [isExpanded, setIsExpanded] = useState(false);
//     useEffect(() => {
//         const fetchTblog = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5000/tblogs")
//                 setTblogs(response.data);
//                 console.log(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//         fetchTblog();
//     }, []);
//     const toggleDescription = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
//         <>
//         {tblogs.map((tblog) => (
//             <div className="feed-item">
//             <div className="image-container">
//                 <img src={tblog.imageUrl} alt={tblog.name} className="feed-image" />
//             </div>
//             <div className="content-container">
//                 <div className="header-container">
//                     <h3 className="feed-name">{tblog.name}</h3>
//                     <p className="feed-location">{tblog.location}</p>
//                 </div>
//                 <div className={`description-container ${isExpanded ? 'expanded' : ''}`}>
//                     {isExpanded ? tblog.description : `${tblog.description.slice(0, 100)}...`}
//                 </div>
//                 {!isExpanded && (
//                     <p className="read-more" onClick={toggleDescription}>
//                         Read More
//                     </p>
//                 )}
//                 {isExpanded && (
//                     <p className="read-more" onClick={toggleDescription}>
//                         Read Less
//                     </p>
//                 )}
//             </div>
//         </div>
//         ))}
//         </>
//     )
// }

import { useEffect, useState } from "react";
import axios from 'axios';
import './blogs.css';

export const Blogs = () => {
  const [tblogs, setTblogs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const fetchTblogs = async () => {
      try {
        const response = await axios.get("https://tblog-c7jh.onrender.com/tblogs");
        setTblogs(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTblogs();
  }, []);

  const toggleDescription = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked description
    }
  };

  const renderDescription = (tblog, index) => {
    const description = tblog.description;
    const isExpanded = index === expandedIndex;
    const displayText = isExpanded ? description : `${description.slice(0, 100)}...`;

    return (
      <div className={`description-container ${isExpanded ? 'expanded' : ''}`}>
        {displayText}
        <p
          className="read-more"
          onClick={() => toggleDescription(index)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </p>
      </div>
    );
  };

  return (
    <>
      {tblogs.map((tblog, index) => (
        <div className="feed-item" key={tblog.id}>
          <div className="image-container">
            <img src={tblog.imageUrl} alt={tblog.name} className="feed-image" />
          </div>
          <div className="content-container">
            <div className="header-container">
              <h3 className="feed-name">{tblog.name}</h3>
              <p className="feed-location">{tblog.location}</p>
            </div>
            {renderDescription(tblog, index)}
          </div>
        </div>
      ))}
    </>
  );
};
