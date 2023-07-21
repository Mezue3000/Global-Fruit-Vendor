import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFlorinSign } from '@fortawesome/free-solid-svg-icons'
import { faG } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {faLocationDot  } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Footer.css'



const Footer = () => {

  return (
    <div className='footy'>
        <div className='footer'>

          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFlorinSign} />
          <FontAwesomeIcon icon={faG} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faLocationDot} />

        </div>

       <p className='copywright'>Copywright &copy; 2023 pylot All right reserve by Mezue Obiora</p>
    </div>
  )
}



export default Footer