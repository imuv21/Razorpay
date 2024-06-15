import React from 'react'

const Card = ({amount, img, checkoutHandler}) => {

  return (
    <div className='flexcol center page outline2'>
      <img src={img} className='img' alt="img" />
      <div className="headingSmol">₹{amount}</div>
      <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
    </div>
  )
}

export default Card