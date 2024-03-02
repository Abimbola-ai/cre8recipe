// import React, { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import axios from 'axios'

// const RecipeDetailsPage = () => {
//   const { id } = useParams() // Extract recipe ID from URL parameters
//   const [recipeDetails, setRecipeDetails] = useState(null)

//   useEffect(() => {
//     const fetchRecipeDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
//         )
//         setRecipeDetails(response.data)
//       } catch (error) {
//         console.error('Error fetching recipe details:', error)
//       }
//     }

//     fetchRecipeDetails()
//   }, [id])

//   return (
//     <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
//       {recipeDetails && (
//         <div
//           className="top-detail text-center p-3"
//           style={{ backgroundColor: '#7bb7b4' }}
//         >
//           {/* Link with back arrow icon */}
//           <h2 className="mt-3 mb-3">
//             <Link to="/recipes" className="back-link px-2">
//               <span className="material-icons">arrow_back</span>
//             </Link>
//             {recipeDetails.title}
//           </h2>
//           <img
//             src={recipeDetails.image}
//             alt={recipeDetails.title}
//             style={{
//               maxWidth: '300px',
//               border: '2px solid #333',
//               borderRadius: '8px',
//             }}
//           />
//         </div>
//       )}
//       <div className="p-3">
//         <h3>Ingredients:</h3>
//         <ul>
//           {recipeDetails &&
//             recipeDetails.extendedIngredients.map((ingredient) => (
//               <li key={ingredient.id}>{ingredient.original}</li>
//             ))}
//         </ul>
//       </div>
//       <div className="p-3">
//         <h3>Instructions:</h3>
//         <ol>
//           {recipeDetails &&
//             recipeDetails.analyzedInstructions[0].steps.map((step) => (
//               <li key={step.number}>{step.step}</li>
//             ))}
//         </ol>
//       </div>
//     </div>
//   )
// }

// export default RecipeDetailsPage
import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const RecipeDetailsPage = () => {
  const { id } = useParams()
  const [recipeDetails, setRecipeDetails] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        )
        setRecipeDetails(response.data)
      } catch (error) {
        console.error('Error fetching recipe details:', error)
      }
    }

    fetchRecipeDetails()
  }, [id])

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {recipeDetails && (
        <div
          className="top-detail text-center p-3"
          style={{ backgroundColor: '#7bb7b4' }}
        >
          {/* Link with back arrow icon */}
          <h2 className="mt-3 mb-3">
            <Link
              to={location.state?.referrer || '/recipes'}
              className="back-link px-2"
            >
              <span className="material-icons">arrow_back</span>
            </Link>
            {recipeDetails.title}
          </h2>
          <img
            src={recipeDetails.image}
            alt={recipeDetails.title}
            style={{
              maxWidth: '300px',
              border: '2px solid #333',
              borderRadius: '8px',
            }}
          />
        </div>
      )}
      <div className="p-3">
        <h3>Ingredients:</h3>
        <ul>
          {recipeDetails &&
            recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>
      </div>
      <div className="p-3">
        <h3>Instructions:</h3>
        <ol>
          {recipeDetails &&
            recipeDetails.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipeDetailsPage
