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

  useEffect(() => {
    getAllPosts()
  }, [])

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/posts`, newPost)
      setNewPost({
        username: "",
        image: '',
        bid: 0,
        description: ''
      })
      getAllPosts()
    } catch (err) {
      throw err
    }
  }

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

  const deletePost = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/posts/${id}`)
      console.log(res)
      let filteredPosts = [...posts].filter((post) => (
          post.id !== parseInt(res.data.payload)
      ))
      setPosts(filteredPosts)
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
      <Feed 
        posts={posts} 
        setPosts={setPosts} 
        incrementBid={incrementBid}
        deletePost={deletePost}
         />
    </div>
  )
}

export default App
