import React from 'react'
import Mas from '../img/Mas.png'
import air from '../img/air.png'
import Uber from '../img/uber.png'
import Pay from '../img/pay.png'
import Visa from '../img/Visa.png'
import Stripe from '../img/Stripe.png'

const CardName = () => {
  return (
    <>
    <div className='bg-red-400  w-full h-66 flex justify-center items-center'>
      <p className='text-3xl' >Trusted by 20,000+ companies</p>
      <img src={Mas} alt="" />
      <img src={air} alt="" />
      <img src={Uber} alt="" />
      <img src={Pay} alt="" />
      <img src={Visa} alt="" />
      <img src={Stripe} alt="" />
    </div>
    </>
  )
}

export default CardName
