// Login.js
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const LoginPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const history = useHistory()

  useEffect(() => {
    // If the user is already authenticated, redirect them to the HomePage
    if (isAuthenticated) {
      history.push('/user') // Change '/user' to the appropriate route for HomePage
    }
  }, [isAuthenticated, history])

  const handleLogin = () => {
    loginWithRedirect()
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default LoginPage
