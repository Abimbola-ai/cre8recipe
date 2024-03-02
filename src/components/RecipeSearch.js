import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RecipeSearch = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${query}`
      )
      navigate('/recipes', { state: { recipes: response.data.results } }) // Pass only the results data to the RecipeListPage
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  return (
    <div className="search-container mt-3">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search deals, stores and recipes..."
          className="search-input rounded-2"
        />
        <button type="submit" className="search-btn">
          <i className="material-icons">search</i>
        </button>
      </form>
    </div>
  )
}

export default RecipeSearch
