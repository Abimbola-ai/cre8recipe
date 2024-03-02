import React, { useState } from 'react'
import axios from 'axios'

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')

  const fetchRecipes = async () => {
    try {
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
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeSearch
