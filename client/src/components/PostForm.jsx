import React from 'react'

const PostForm = (props) => {
  return (
    <div className="form">
      <h4>Submit your NFTy below:</h4>
      <form onSubmit={props.handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={props.newPost.username}
          onChange={props.handleChange}
        />
        <br></br>
        <input
          name="image"
          placeholder="image link"
          value={props.newPost.image}
          onChange={props.handleChange}
        />
        <br></br>
        <input
          className="bid-amount"
          name="bid"
          type="number"
          placeholder="starting bid amount"
          value={props.newPost.bid}
          onChange={props.handleChange}
        />
        <br></br>
        <input
          className="description"
          name="description"
          placeholder="a brief description"
          value={props.newPost.description}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <button id="create" type="submit">
          Create
        </button>
      </form>
    </div>
  )
}

export default PostForm
