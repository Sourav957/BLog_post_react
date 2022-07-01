import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({Post}) => {
  return (
    <article className='post'>
        <Link to={`post/${Post.id}`}>
            <h2>{Post.title}</h2>
            <p className='postDate'>{Post.datetime}</p>
        </Link>
        <p className='postBody'>{
            (Post.body).length <= 25 ?
            Post.body :
            `${(Post.body).slice(0,25)}...`
        }</p>

    </article>
  )
}

export default Post