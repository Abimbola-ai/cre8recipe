import React from 'react'
import RecipeList from '../RecipeList'
import { useLocation } from 'react-router-dom'

const RecipeListPage = () => {
  const location = useLocation()
  const recipes = location.state?.recipes || [] // Get recipes data from location state

  return (
    <div>
      <h1>Search Results</h1>
      <RecipeList recipes={recipes} />
    </div>
  )
}

export default RecipeListPage
