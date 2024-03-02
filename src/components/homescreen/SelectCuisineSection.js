// import React from 'react'

// const SelectCuisineSection = () => {
//   return (
//     <section className="select-cuisine-section unified mt-5 rounded-4">
//       <h3 className="text-center pt-2 fs-4">Select Cuisines</h3>
//       <div className="row pt-3">
//         <div className="col">
//           <div className="cuisine-item">
//             <img
//               src="/images/african.jpg"
//               alt="Cuisine 1"
//               className="cuisine-image"
//             />
//             <p className="cuisine-name">African</p>
//           </div>
//         </div>
//         <div className="col">
//           <div className="cuisine-item">
//             <img
//               src="/images/mexican.jpeg"
//               alt="Cuisine 2"
//               className="cuisine-image"
//             />
//             <p className="cuisine-name">Mexican</p>
//           </div>
//         </div>
//         <div className="col">
//           <div className="cuisine-item">
//             <img
//               src="/images/asian.jpg"
//               alt="Cuisine 3"
//               className="cuisine-image"
//             />
//             <p className="cuisine-name">Asian</p>
//           </div>
//         </div>
//       </div>
//       <div className="row pt-3">
//         <div className="col">
//           <div className="cuisine-item">
//             <img
//               src="/images/indian.jpg"
//               alt="Cuisine 4"
//               className="cuisine-image"
//             />
//             <p className="cuisine-name">Indian</p>
//           </div>
//         </div>
//         <div className="col">
//           <div className="cuisine-item">
//             <img
//               src="/images/american.jpg"
//               alt="Cuisine 5"
//               className="cuisine-image"
//             />
//             <p className="cuisine-name">American</p>
//           </div>
//         </div>
//         <div className="col">
//           <div className="cuisine-item">
//             <img
//               src="/images/italian.jpg"
//               alt="Cuisine 6"
//               className="cuisine-image"
//             />
//             <p className="cuisine-name">Italian</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SelectCuisineSection

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SelectCuisineSection = () => {
  const navigate = useNavigate()

  const handleCuisineClick = (cuisine) => {
    // Fetch data based on the selected cuisine
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${cuisine}`
      )
      .then((response) => {
        // Navigate to the RecipeListPage with the fetched data
        navigate('/recipes', { state: { recipes: response.data.results } })
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error)
      })
  }

  return (
    <section className="select-cuisine-section unified mt-5 rounded-4">
      <h3 className="text-center pt-2 fs-4">Select Cuisines</h3>
      <div className="row pt-3">
        <div className="col">
          <div
            className="cuisine-item"
            onClick={() => handleCuisineClick('African')}
          >
            <img
              src="/images/african.jpg"
              alt="Cuisine 1"
              className="cuisine-image"
            />
            <p className="cuisine-name">African</p>
          </div>
        </div>
        <div className="col">
          <div
            className="cuisine-item"
            onClick={() => handleCuisineClick('Mexican')}
          >
            <img
              src="/images/mexican.jpeg"
              alt="Cuisine 2"
              className="cuisine-image"
            />
            <p className="cuisine-name">Mexican</p>
          </div>
        </div>
        <div className="col">
          <div
            className="cuisine-item"
            onClick={() => handleCuisineClick('Asian')}
          >
            <img
              src="/images/asian.jpg"
              alt="Cuisine 3"
              className="cuisine-image"
            />
            <p className="cuisine-name">Asian</p>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <div
            className="cuisine-item"
            onClick={() => handleCuisineClick('Indian')}
          >
            <img
              src="/images/indian.jpg"
              alt="Cuisine 4"
              className="cuisine-image"
            />
            <p className="cuisine-name">Indian</p>
          </div>
        </div>
        <div className="col">
          <div
            className="cuisine-item"
            onClick={() => handleCuisineClick('American')}
          >
            <img
              src="/images/american.jpg"
              alt="Cuisine 5"
              className="cuisine-image"
            />
            <p className="cuisine-name">American</p>
          </div>
        </div>
        <div className="col">
          <div
            className="cuisine-item"
            onClick={() => handleCuisineClick('Italian')}
          >
            <img
              src="/images/italian.jpg"
              alt="Cuisine 6"
              className="cuisine-image"
            />
            <p className="cuisine-name">Italian</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectCuisineSection
