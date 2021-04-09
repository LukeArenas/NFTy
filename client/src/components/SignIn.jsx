import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/App.css'
import { Login } from '../services/AuthServices'

const SignIn = (props) => {
  const [loginForm, handleLoginForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Login(loginForm)
      localStorage.setItem('token', res.token)
      props.setAuthenticated(true)
      props.toggleSignIn(false)
      // props.setCurrentUser(res.user)
      handleLoginForm({ email: '', password: '' })
    } catch (error) {
      console.log(error)
      return alert('Your username or password is incorrect')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm({ ...loginForm, [name]: value })
  }

  return (
    <div>
      <Modal show={props.signInOpen} dialogClassName="sign">
        <div className="header">
          <Button id="closeBtn" onClick={() => props.toggleSignIn(false)}>
            X
          </Button>
        </div>
        <Modal.Body>
          <h2 style={{ color: 'black' }}>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={loginForm.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleChange}
              required
            />
            <br></br>
            <Button
              type="submit"
              className="signBtn"
              disabled={!loginForm.email || !loginForm.password}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SignIn
