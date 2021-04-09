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
  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts`)
      setPosts(res.data)
    } catch (error) {
      throw error
    }
  }
  const incrementBid = async (id, bid, index) => {
    try {
      let update = { bid: bid + 1 }
      console.log(bid)
      const res = await axios.put(`${BASE_URL}/posts/${id}`, update)
      console.log(res)
      let postsArr = [...posts]
      let target = postsArr[index]
      target.bid = target.bid + 1
      postsArr.splice(index, 1, target)
      setPosts(postsArr)
      return res.data
    } catch (error) {
      throw error
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
      <Feed posts={posts} setPosts={setPosts} incrementBid={incrementBid} />
    </div>
  )
}

export default App
