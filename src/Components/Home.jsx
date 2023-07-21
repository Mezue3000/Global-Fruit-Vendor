import React from 'react'
import { Link } from 'react-router-dom'
import cartpic from '../Media/stawberry.jpg'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='home' style = {{backgroundImage:`url(${cartpic})`}}>

      <div className='head-text'>

        <h1 className='pylot1'>Pylot's fruity store</h1>
        <p className='pylot2'>Celebrity fruits that quench any taste</p>

        <Link to = "/menu">
          <button className='button1'>ORDER NOW</button>
        </Link>

      </div>

    </div>
  )
}

export default Home