// import React from 'react'
// import PropTypes from 'prop-types' // Import PropTypes
// import { Auth0Provider } from '@auth0/auth0-react'
// import { useNavigate } from 'react-router-dom'

// const Auth0ProviderWithHistory = ({ children }) => {
//   const domain = process.env.REACT_APP_AUTH0_DOMAIN
//   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

//   const navigate = useNavigate()

//   const onRedirectCallback = (appState) => {
//     navigate(appState?.returnTo || window.location.pathname)
//   }

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       redirectUri={window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   )
// }

// // Add prop type validation
// Auth0ProviderWithHistory.propTypes = {
//   children: PropTypes.node.isRequired, // Validate children prop
// }

// export default Auth0ProviderWithHistory
import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import { Auth0Provider } from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({ children, history }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

  //   const onRedirectCallback = () => {
  //     history.push('/user')
  //   }
  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : (window.location.href = 'https://cre8recipe.netlify.app/user')
    )
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

// Add PropTypes validation
Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
}

export default Auth0ProviderWithHistory
