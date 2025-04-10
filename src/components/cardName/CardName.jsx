import React from 'react'
import Mas from '../img/Mas.png'
import air from '../img/air.png'
import Uber from '../img/uber.png'
import Pay from '../img/pay.png'
import Visa from '../img/visa.png'
import Stripe from '../img/stripe.png'

const CardName = () => {
  return (
    <>
    <div className="">
        <div className="w-8/12 h-66 m-auto mt-10 ">
          <p className="text-[#244D4D] flex items-center justify-center text-4xl font-bold">
            Trusted by 20,000+ companies
          </p>
          <div className="flex justify-between items-center  mt-20">
            <img src={Mas} alt="" />
            <img src={air} alt="" />
            <img src={Uber} alt="" />
            <img src={Pay} alt="" />
            <img src={Visa} alt="" />
            <img src={Stripe} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardName
