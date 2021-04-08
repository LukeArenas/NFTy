import React from 'react'

const PostForm = (props) => {
  return (
    <div>
      <h3>Submit your NFTy below:</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={props.newPost.username}
          onChange={props.handleChange}
        />
        <input
          name="image"
          placeholder="image link"
          value={props.newPost.image}
          onChange={props.handleChange}
        />
        <input
          name="bid"
          type="number"
          placeholder="starting bid amount"
          value={props.newPost.bid}
          onChange={props.handleChange}
        />
        <input
          name="description"
          placeholder="a brief description"
          value={props.newPost.description}
          onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostForm