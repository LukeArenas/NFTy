import React, { useEffect } from 'react'

const Feed = (props) => {
  console.log(props.isRotated)
  return (
    <div>
      <h1>Explore Bids🔥</h1>
      <div className="feed">
        {props.posts.map((post, index) => (
          <div className="box">
            <div id="post" key={index}>
              <div className="front">
                <h4>@{post.username}</h4>
                <img className="post" src={post.image} />
                <div className="bid">
                  <h2>Bid</h2> <h5>{post.bid} ETH</h5>
                </div>
              </div>
              <div className="back">
                <p>{post.description}</p>
                <img
                  id="trash"
                  src="https://i.ibb.co/hVYM4qz/Pngtree-trash-icon-in-neon-style-5272324.png"
                  onClick={() => props.deletePost(post.id)}
                  width="30px"
                />
              </div>
            </div>
            <img
              className={`govel ${props.isRotated ? 'rotated' : ''}`}
              onClick={() => props.incrementBid(post.id, post.bid, index)}
              src="https://i.ibb.co/y51nPPB/Pin-Clipart-com-mallet-clipart-5634774.png"
              width="40px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed
