import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './context/DataContext';
import api from './api/posts'

const PostPage = () => {
  const {posts,setPosts} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find((post)=>(post.id).toString() === id);
  const navigate =useNavigate();

  const handleDelete = async(id) => {
    try{ 
      await api.delete(`/posts/${id}`);
    const newPost = posts.filter((post) => post.id !== id);
   setPosts(newPost);
   navigate('/');
  }catch(err){
    console.log(`ERROR: ${err.message}`)
  }
  }

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p> 
        <p className='postBody'>{post.body}</p>
        <Link to={`/edit/${post.id}`}><button className='editButton'>Edit post</button></Link>
        <button className='deleteButtin' onClick={()=>handleDelete(post.id)}>
          Delete Post
        </button>
        </>         
        }

      </article>
      
    </main>
  )
}

export default PostPage