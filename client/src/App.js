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
    bid: null,
    description: ''
  })
  const [isRotated, setIsRotated] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [signInOpen, toggleSignIn] = useState(false)
  const [signUpOpen, toggleSignUp] = useState(false)

  const toggleOpen = (arg) => {
    toggleSignIn(false)
    toggleSignUp(false)
    if (arg === 'sign in') {
      toggleSignIn(true)
    } else if (arg === 'sign up') {
      toggleSignUp(true)
    }
  }
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
        username: '',
        image: '',
        bid: null,
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
  const incrementBid = async (id, bid, bidIncrease, index) => {
    try {
      let update = { bid: bid + bidIncrease }
      const res = await axios.put(`${BASE_URL}/posts/${id}`, update)
      let postsArr = [...posts]
      let target = postsArr[index]
      target.bid = target.bid + bidIncrease
      postsArr.splice(index, 1, target)
      setPosts(postsArr)
      setIsRotated(!isRotated)
      return res.data
    } catch (error) {
      throw error
    }
  }

  const deletePost = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/posts/${id}`)
      console.log(res)
      let filteredPosts = [...posts].filter(
        (post) => post.id !== parseInt(res.data.payload)
      )
      setPosts(filteredPosts)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="App">
      <Header
        signUpOpen={signUpOpen}
        signInOpen={signInOpen}
        toggleSignIn={toggleSignIn}
        toggleSignUp={toggleSignUp}
        toggleOpen={toggleOpen}
      />
      <PostForm
        newPost={newPost}
        setNewPost={setNewPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Feed
        posts={posts}
        isRotated={isRotated}
        setPosts={setPosts}
        incrementBid={incrementBid}
        deletePost={deletePost}
      />
    </div>
  )
}

export default App
