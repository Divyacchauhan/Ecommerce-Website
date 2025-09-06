import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Review (122)</div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online plateform that facilitate buying and selling of products or services  over the interenet
                serves as a virtual marketplace wher business and individ
                showcase their products, interact with customer.
            </p>
            <p>
              E-commerce website typically display products or services and detailed descriptions, images, prices, and any available varaity
              (e.g.. sizes, color). Each product usually has its own dedicate with relevant information. 
            </p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox

