import './css/App.css'
import React, { useEffect, useState } from 'react'
import PostForm from './components/PostForm'
import Feed from './components/Feed'
import Header from './components/Header.jsx'
import axios from 'axios'
import { BASE_URL } from './globals'

const App = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
    username: '',
    image: '',
    bid: 0,
    description: ''
  })

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newPost)
    try {
      const res = await axios.post(`${BASE_URL}/posts`, newPost)
      console.log(res)
      // setNewPost(...newPost)
      // setNewPost({
      //   username: "",
      //   image: '',
      //   bid: 0,
      //   description: ''
      // })
    } catch (err) {
      throw err
    }
  }

  return (
    <div className="App">
      <Header />
      <PostForm
        newPost={newPost}
        setNewPost={setNewPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Feed posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default App
