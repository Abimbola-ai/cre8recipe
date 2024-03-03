import React from 'react'

const CouponsPage = () => {
  // Static list of coupon objects
  const coupons = [
    {
      imageUrl: '/images/coupons/costco.png',
      storeName: 'Costco',
      flyerUrl: 'https://www.costco.ca/coupons.html',
    },
    {
      imageUrl: '/images/coupons/nofrills.png',
      storeName: 'No Frills',
      flyerUrl: 'https://www.nofrills.ca/print-flyer',
    },
    {
      imageUrl: '/images/coupons/foodbasics.png',
      storeName: 'Food Basics',
      flyerUrl: 'https://www.foodbasics.ca/flyer',
    },
    {
      imageUrl: '/images/coupons/walmart.png',
      storeName: 'Walmart',
      flyerUrl: 'https://www.walmart.ca/en/flyer',
    },
    {
      imageUrl: '/images/coupons/metro.png',
      storeName: 'Metro',
      flyerUrl: 'https://www.metro.ca/en/flyer',
    },
    {
      imageUrl: '/images/coupons/realcanadian.png',
      storeName: 'Real canadian',
      flyerUrl: 'https://www.realcanadiansuperstore.ca/print-flyer',
    },
    {
      imageUrl: '/images/coupons/foodworld.png',
      storeName: 'Food World',
      flyerUrl: 'https://foodworldsupermarket.com/weekly-flyer/',
    },
    {
      imageUrl: '/images/coupons/natures.png',
      storeName: 'Natures Emporium',
      flyerUrl: 'https://naturesemporium.com/our-flyer-copy',
    },
  ]

  return (
    <section className="coupon-container">
      <div className="container-fluid coupon-item">
        <div className="row">
          {coupons.map((coupon, index) => (
            <div className="col-6 mt-2 mb-2" key={index}>
              <div className="coupon">
                <a
                  href={coupon.flyerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={coupon.imageUrl}
                    alt={coupon.storeName}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CouponsPage
