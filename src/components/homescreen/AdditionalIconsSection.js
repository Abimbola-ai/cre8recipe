import React from 'react'
import { Link } from 'react-router-dom'

const AdditionalIconsSection = () => {
  return (
    <section className="additional-icons-section mt-5 fixed-bottom">
      <div className="row p-3 text-center">
        <div className="col">
          <i className="material-icons additional-icon-list">explore</i>
          <p className="additional-icon-text">Browse</p>
        </div>
        <div className="col">
          <Link to="/coupons" className="text-decoration-none">
            {' '}
            {/* Use Bootstrap class to remove underline */}
            <i className="material-icons additional-icon-list">local_offer</i>
            <p className="additional-icon-text">Coupons</p>
          </Link>
        </div>
        <div className="col">
          <i className="material-icons additional-icon-list">search</i>
          <p className="additional-icon-text">Search</p>
        </div>
        <div className="col">
          <i className="material-icons additional-icon-list">
            format_list_bulleted
          </i>
          <p className="additional-icon-text">Lists</p>
        </div>
      </div>
    </section>
  )
}

export default AdditionalIconsSection
