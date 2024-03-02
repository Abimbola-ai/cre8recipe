import React from 'react'

const AdditionalIconsSection = () => {
  return (
    <section className="icons-section mt-5 ">
      <div className="row p-3 text-center">
        <div className="col">
          <i className="material-icons additional-icon-list">explore</i>
          <p className="additional-icon-text">Browse</p>
        </div>
        <div className="col">
          <i className="material-icons additional-icon-list">local_offer</i>
          <p className="additional-icon-text">Coupons</p>
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
