import React from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {

  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get('http://localhost:4000/api/getkey');

    const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', { amount })

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Uttam Verma",
      description: "Test Transaction",
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#00aaff"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
   
  }


  return (
    <div className='flexcol start-center page'>
      <div className="heading">Home</div>

      <div className="flex center">
        <Card amount={5000} img={"https://johnlewis.scene7.com/is/image/JohnLewis/Laptops-940x700-130423"} checkoutHandler={checkoutHandler} />
        <Card amount={3000} img={"https://eavf3cou74b.exactdn.com/wp-content/uploads/2023/06/28103020/Best-Cameras-for-Professional-Photography-6.jpg?strip=all&lossy=1&ssl=1"} checkoutHandler={checkoutHandler} />
      </div>

    </div>
  )
}

export default Home