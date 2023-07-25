import React from 'react'
import cartpage from '../Media/cartpage.jpg'
import '../Styles/About.css'

const About = () => {

  return (

    <div className='about'>

        <div className='up-side' style={{backgroundImage: `url(${cartpage})`}}>
           
        </div>

        <div className='down-side'>

          <h1 className='header'>About US</h1>

          <p className='para'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, debitis optio? Illo facilis eligendi odio adipisci tempora. Et optio expedita facilis obcaecati, vitae cumque maiores? Consectetur nulla ut provident sit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, debitis optio? Illo facilis eligendi odio adipisci tempora. Et optio expedita facilis obcaecati, vitae cumque maiores? Consectetur nulla ut provident sit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, debitis optio? Illo facilis eligendi odio adipisci tempora. Et optio expedita facilis obcaecati, vitae cumque maiores? Consectetur nulla ut provident sit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, debitis optio? Illo facilis eligendi odio adipisci tempora. Et optio expedita facilis obcaecati, vitae cumque maiores? Consectetur nulla ut provident sit.
          </p>

        </div>

    </div>
  )
}



export default About
