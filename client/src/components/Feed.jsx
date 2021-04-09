import React, { useEffect, useState } from 'react'

const Feed = (props) => {
  console.log(props.isRotated)
  const [bidIncrease, setBid] = useState(1)
  const [selectedPost, setSelectedPost] = useState(0)

  const handleBid = (e, id) => {
    e.preventDefault()
    setBid(e.target.value)
    setSelectedPost(id)
  }

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
            
            <input className='logo' type='text' placeholder='bid' value={ selectedPost == post.id ? bidIncrease : 1 } onChange={(e)=>handleBid(e, post.id)}/>
            <img
              className={`govel ${props.isRotated ? 'rotated' : ''}`}
              onClick={() => props.incrementBid(post.id, post.bid, parseInt(bidIncrease), index)}
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
