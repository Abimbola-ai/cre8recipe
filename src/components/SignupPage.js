// Signup.js

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Signup = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <h1>Create an Account</h1>
      <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
        Sign Up
      </button>
    </div>
  )
}

export default Signup
