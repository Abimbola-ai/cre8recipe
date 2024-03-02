import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SearchBarSection = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${query}`
      )
      navigate('/search-results', { state: { recipes: response.data.results } })
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  return (
    <section className="search-bar-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="input-group rounded-5">
                <input
                  type="text"
                  className="form-control rounded-5"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search deals stores & recipes"
                />
                <i className="material-icons">search</i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBarSection
