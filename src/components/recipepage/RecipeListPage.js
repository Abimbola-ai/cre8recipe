//RecipeListPage.js
import React from 'react'
import RecipeList from '../RecipeList'
import { useLocation } from 'react-router-dom'
import AdditionalIconsSection from '../homescreen/AdditionalIconsSection'

const RecipeListPage = () => {
  const location = useLocation()
  const recipes = location.state?.recipes || [] // Get recipes data from location state

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <section className="search-results container-fluid flex-grow-1">
        <h1 className="mt-3 mb-3 fs-3 text-center">Search Results</h1>
        <RecipeList recipes={recipes} />
      </section>
      <AdditionalIconsSection />
    </div>
  )
}

export default RecipeListPage
