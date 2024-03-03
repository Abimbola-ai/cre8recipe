import React from 'react'

const TopNav = () => {
  return (
    <section className="top-nav p-2">
      <div className="row my-2 d-flex  text-center align-items-center justify-content-center">
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
