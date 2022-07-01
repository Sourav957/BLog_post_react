import React, { useEffect,useState } from 'react'
import { useParams ,Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './context/DataContext';
import { format } from 'date-fns';
import api from './api/posts'

const EditPost = () => {
    const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');
    const {posts,setPosts} = useContext(DataContext);
    const {id} = useParams();
    const post = posts.find((post) => (post.id).toString() === id)
    const navigate = useNavigate();

    useEffect(() => {
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post,setEditBody,setEditTitle])

    const handleEdit = async (id) => {
        const date = format(new Date(),'MMMM dd yyyy pp');
        const updatedPost = {id:id,title:editTitle,datetime:date,body:editBody};
        try
        {
         const response = api.put(`/posts/${id}`,updatedPost)
         setPosts(posts.map((post) => post.id === id? {...response.data} : post))
         setEditTitle('');
         setEditBody('');
         navigate('/');
        }catch(err){
          console.log(`ERROR: ${err.messsage}`);
        }
      }


  return (
    <main className='NewPost'>
        {editTitle &&
        <>
       <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor='postTitle'>Title:</label>
          <input
          id='postTitle'
          type='text'
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          />
          <label htmlFor='postBody'>Post:</label>
          <textarea id='postBody' value={editBody} onChange={(e) => setEditBody(e.target.value)}/>
          <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
        </form></>
        }
        {
            !editTitle && 
            <>
                <h2>post Not Found</h2>
                <p>We'll that's Disappointing</p>
                <p>
                    <Link to="/" >Visit Our HomePage</Link>
                </p>
            </>
        }
  </main>
  )
}

export default EditPost