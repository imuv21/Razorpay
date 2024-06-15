import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0]
    const referenceNum = searchQuery.get("reference");

  return (
    <div className='flexcol center page' style={{'height': '100vh'}}>
       <div className="heading">Order placed successfully!</div>
       <div className="text">Reference No. {referenceNum}</div>
    </div>
  )
}

export default PaymentSuccess
