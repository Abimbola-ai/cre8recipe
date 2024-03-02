import React from 'react'
import WelcomeBackSection from './WelcomeBackSection'
import SelectCuisineSection from './SelectCuisineSection'
import IconsSection from './IconsSection'
import RecipeSearch from '../RecipeSearch'
import AdditionalIconsSection from './AdditionalIconsSection'

const HomePage = () => {
  return (
    <div className="container-fluid bg-white" style={{ width: '95%' }}>
      <WelcomeBackSection />
      <RecipeSearch />
      <SelectCuisineSection />
      <IconsSection />
      <AdditionalIconsSection />
    </div>
  )
}

export default HomePage
