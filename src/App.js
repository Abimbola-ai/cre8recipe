// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import HomePage from './components/homescreen/HomePage'
// import RecipeListPage from './components/recipepage/RecipeListPage'
// import RecipeDetailsPage from './components/recipepage/RecipeDetailsPage'
// import Welcome from './components/Welcome'
// import SignupPage from './components/SignupPage' // Import the SignupPage component
// import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'
// const App = () => {
//   return (
//     <Router>
//       <Auth0ProviderWithHistory>
//         <div className="App">
//           <Routes>
//             <Route exact path="/" element={<Welcome />} />
//             <Route exact path="/signup" element={<SignupPage />} />{' '}
//             <Route exact path="/user" element={<HomePage />} />
//             <Route path="/recipes" element={<RecipeListPage />} />
//             <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
//           </Routes>
//         </div>
//       </Auth0ProviderWithHistory>
//     </Router>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history' // Import createBrowserHistory
import HomePage from './components/homescreen/HomePage'
import RecipeListPage from './components/recipepage/RecipeListPage'
import RecipeDetailsPage from './components/recipepage/RecipeDetailsPage'
import Welcome from './components/Welcome'
import SignupPage from './components/SignupPage'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'

const history = createBrowserHistory() // Create history object

const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory history={history}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/user" element={<HomePage />} />
            <Route path="/recipes" element={<RecipeListPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App
