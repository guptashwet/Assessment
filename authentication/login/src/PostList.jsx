import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PostList = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/Postlist')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // function for delete post

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/post/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  return (
    <div>
      {
        posts.length > 0 ? (
          posts.map((post, index) => (
            <ul key={index}>
              <li>{post.post}</li> 
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </ul>
          ))
        ) : (
          <p>No posts available</p>
        )
      }
      
    </div>
  );
};

export default PostList;
