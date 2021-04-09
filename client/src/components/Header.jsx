import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Header = (props) => {
  return (
    <header>
      <div className="header">
        <h1 className="logo">NFTy</h1>
        <div className="header-sign">
          <button
            className="signBtn"
            onClick={() => props.toggleOpen('sign in')}
          >
            Sign In
          </button>
          <button
            className="signBtn"
            onClick={() => props.toggleOpen('sign up')}
          >
            Sign Up
          </button>
        </div>
      </div>
      <SignUp
        signUpOpen={props.signUpOpen}
        toggleSignIn={props.toggleSignIn}
        toggleSignUp={props.toggleSignUp}
      />
      <SignIn
        signInOpen={props.signInOpen}
        toggleSignIn={props.toggleSignIn}
        toggleSignUp={props.toggleSignUp}
      />
      <p className="header-description">
        Simulating a NFT marketplace <br></br>where posted images become
        Non-Fungible-Tokens <br></br>and can be bid on by other users.
        <br></br> Currently supports anonymous submissions.
      </p>
    </header>
  )
}

export default Header
