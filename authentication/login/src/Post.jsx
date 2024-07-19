import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const Post = () => {

  const [post, setPost] = useState([""])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/post',{post})
     .then(
      post => setPost(post.data),
      console.log(post), 
      navigate('/postlist'))
    .catch(err=> console.log(err))
    
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <input
              type="text"
              placeholder="Create your post"
              autoComplete="off"
              name="email"
              onChange={(e) => setPost(e.target.value)}
            />
            <button>Create</button>
        </div>
    </form>
        
  )
}

export default Post
