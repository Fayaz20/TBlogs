import React, { useState } from 'react';
import './addpost.css';
import axios from 'axios';
import {useGetUserID} from "../../hooks/useGetUserID";
import {useNavigate} from "react-router-dom"
export function Addpost() {

  const userID = useGetUserID();
  const [tblog, setTblog] = useState({
    name: '',
    location: '',
    description: '',
    imageUrl: '',
    userOwner:userID
  });

  const navigate = new useNavigate();
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTblog({ ...tblog, [name]: value });
  };

  const handle = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://tblog-c7jh.onrender.com/tblogs/', tblog);
      alert('Blog Created');
      navigate("/blogs")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='CreatePost-body'>
      <h1>Create Post</h1>
      <div className='CreatePost-form-container'>
        <form onSubmit={handle}>
          <div>
            <label htmlFor='CreatePost-title'>Title</label>
            <input
              type='text'
              id='CreatePost-title'
              name='name'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='CreatePost-description'>Description</label>
            <textarea
              id='CreatePost-description'
              name='description'
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor='CreatePost-location'>Location</label>
            <input
              type='text'
              id='CreatePost-location'
              name='location'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='CreatePost-image'>Upload Image</label>
            <input
              type='text'
              id='CreatePost-image'
              name='imageUrl'
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Create Post</button>
        </form>
      </div>
    </div>
  );
}
