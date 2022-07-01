import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
        {posts.map((post)=>{
            return <Post key={post.id} Post={post}/>
        })}
    </>
  )
}

export default Feed