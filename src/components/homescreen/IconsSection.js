import React from 'react'

const IconsSection = () => {
  return (
    <section className="icons-section unified mt-5 rounded-4">
      <div className="row p-3 text-center">
        <div className="col">
          <p className="icon-text">Shopping List</p>
          <i className="material-icons icon-list">add_shopping_cart</i>
        </div>
        <div className="col">
          <p className="icon-text">Fridge</p>
          <i className="material-icons icon-list">kitchen</i>
        </div>
        <div className="col">
          <p className="icon-text">Recipes</p>
          <i className="material-icons icon-list">book</i>
        </div>
      </div>
    </section>
  )
}

export default IconsSection
