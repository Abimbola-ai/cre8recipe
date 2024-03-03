// import React from 'react'
// import PropTypes from 'prop-types'

// const WelcomeBackSection = ({
//   username = 'Guest',
//   profileImage = '/images/default.jpg',
// }) => {
//   return (
//     <section className="welcome-back-section unified mt-3 rounded-4">
//       <div className="container ">
//         <div className="row  d-flex justify-items-center align-items-center px-2 py-3">
//           <div className="col-4">
//             <div
//               className="rounded-circle overflow-hidden"
//               style={{ width: '100px', height: '100px' }}
//             >
//               <img
//                 src={process.env.PUBLIC_URL + profileImage}
//                 alt="Default"
//                 className="img-fluid rounded-circle"
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//             </div>
//           </div>
//           <div className="col-8 welcome">
//             <h2>Welcome back, {username}!</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// WelcomeBackSection.propTypes = {
//   username: PropTypes.string,
//   profileImage: PropTypes.string,
// }

// export default WelcomeBackSection
import React from 'react'
import PropTypes from 'prop-types'
import { useAuth0 } from '@auth0/auth0-react'

const WelcomeBackSection = ({ profileImage = '/images/default.jpg' }) => {
  const { user, isAuthenticated } = useAuth0() // Access user information and authentication status from Auth0 context

  // Extract username from user object if user is authenticated, otherwise use 'Guest'
  const username = isAuthenticated ? user.name || 'Guest' : 'Guest'
  // console.log(username)

  return (
    <section className="welcome-back-section unified mt-3 rounded-4">
      <div className="container ">
        <div className="row  d-flex justify-items-center align-items-center px-2 py-3">
          <div className="col-4">
            <div
              className="rounded-circle overflow-hidden"
              style={{ width: '100px', height: '100px' }}
            >
              <img
                src={process.env.PUBLIC_URL + profileImage}
                alt="Default"
                className="img-fluid rounded-circle"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-8 welcome">
            <h2>Welcome back, {username}!</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

WelcomeBackSection.propTypes = {
  profileImage: PropTypes.string,
}

export default WelcomeBackSection
