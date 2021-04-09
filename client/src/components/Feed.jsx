import React, { useEffect } from 'react'

const Feed = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => (
        <div key={index}>
          <h1>{post.username}</h1>
          <img src={post.image} />
          <h2>
            {post.bid}
            <img
              onClick={() => props.incrementBid(post.id, post.bid, index)}
              src="https://i.ibb.co/y51nPPB/Pin-Clipart-com-mallet-clipart-5634774.png"
              width="50px"
            />
          </h2>
          <p>{post.description}</p>
          <button onClick={() => props.deletePost(post.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Feed
