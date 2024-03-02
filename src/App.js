// export default RecipeSearch
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import BrowserRouter and Route
import HomePage from './components/homescreen/HomePage'
import RecipeListPage from './components/recipepage/RecipeListPage'
import RecipeDetailsPage from './components/recipepage/RecipeDetailsPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Route for the home page */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
