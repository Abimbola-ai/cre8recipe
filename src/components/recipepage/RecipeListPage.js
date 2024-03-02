//RecipeListPage.js
import React from 'react'
import RecipeList from '../RecipeList'
import { useLocation } from 'react-router-dom'

const RecipeListPage = () => {
  const location = useLocation()
  const recipes = location.state?.recipes || [] // Get recipes data from location state

  return (
    <section className="search-results container-fluid">
      <div className="p-2">
        <h1 className="mt-3 mb-3 fs-3 text-center">Search Results</h1>
        <RecipeList recipes={recipes} />
      </div>
    </section>
  )
}

export default RecipeListPage
