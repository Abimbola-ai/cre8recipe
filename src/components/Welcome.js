import React from 'react'
import { useAuth0 } from '@auth0/auth0-react' // Import useAuth0 hook

const Welcome = () => {
  const { loginWithRedirect } = useAuth0() // Destructure loginWithRedirect function

  const handleGetStartedClick = () => {
    // Redirect the user to the Auth0 Universal Login page
    loginWithRedirect()
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <img
        src="../images/logo.png"
        alt="App logo"
        className="img-fluid mb-5"
        style={{ maxWidth: '200px' }}
      />
      <h1 className="text-uppercase text-center p-3">cre8recipe</h1>
      <p className="text-center px-3">
        Let&apos;s make every cooking experience memorable
      </p>
      <button
        className="btn btn-custom w-50 m-4"
        style={{ backgroundColor: '#7bb7b4', color: 'white' }}
        onClick={handleGetStartedClick} // Call handleGetStartedClick function when button is clicked
      >
        Get Started
      </button>
    </div>
  )
}

export default Welcome
