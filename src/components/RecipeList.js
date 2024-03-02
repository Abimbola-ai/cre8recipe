import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes

const RecipeList = ({ recipes }) => {
  console.log('Recipes:', recipes)
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  )
}

// Add prop type validation
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default RecipeList
