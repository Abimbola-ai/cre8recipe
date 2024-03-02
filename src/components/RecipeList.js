import React from 'react'

/*This component will receive the list of recipes as props and render them in a list format.*/
const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          {/* Render additional recipe details as needed */}
        </div>
      ))}
    </div>
  )
}

export default RecipeList
