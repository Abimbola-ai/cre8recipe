// RecipeSearch.js
/*This component will handle the search functionality, 
including making API requests to fetch recipes based on user input.*/
import React, { useState } from 'react'
import axios from 'axios'
import RecipeList from './components/RecipeList'

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')

  const fetchRecipes = async () => {
    try {
      console.log(process.env.REACT_APP_SPOONACULAR_API_KEY)

      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${query}`
      )
      setRecipes(response.data.results)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchRecipes()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredients..."
        />
        <button type="submit">Search</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  )
}

export default RecipeSearch
