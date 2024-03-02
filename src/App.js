// export default RecipeSearch
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import BrowserRouter and Route
import HomePage from './components/homescreen/HomePage'
import RecipeListPage from './components/recipepage/RecipeListPage'
// import SearchResultsPage from './components/SearchResultsPage'
// import RecipeDetailsPage from './components/RecipeDetailsPage'
// import NotFoundPage from './components/NotFoundPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Route for the home page */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
