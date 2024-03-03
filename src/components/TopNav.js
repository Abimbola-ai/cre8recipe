import React from 'react'

const TopNav = () => {
  return (
    <section className="top-nav d-flex align-items-center">
      <div className="row p-3 text-center">
        <div className="col">
          <p className="top-nav-text">Explore</p>
        </div>
        <div className="col">
          <p className="top-nav-text">Latest</p>
        </div>
        <div className="col">
          <p className="top-nav-text">A-Z</p>
        </div>
        <div className="col">
          <p className="top-nav-text">Groceries</p>
        </div>
      </div>
    </section>
  )
}

export default TopNav
