//RecipeList.js
import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import { Link } from 'react-router-dom'

const RecipeList = ({ recipes }) => {
  console.log('Recipes:', recipes)
  return (
    <div className="row">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="col-6 mb-4">
          <Link
            to={{
              pathname: `/recipes/${recipe.id}`,
              state: { referrer: location.pathname },
            }}
            className="card-link no-underline"
          >
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.title}
              />
              <div className="card-body">
                <h5 className="card-title fs-6 text-center">{recipe.title}</h5>
              </div>
            </div>
          </Link>
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
