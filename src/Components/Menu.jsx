import React from 'react'
import apple from '../Media/apple.jpg'
import banana from '../Media/banana.jpg'
import coconut from '../Media/coconut.jpg'
import grapes from '../Media/grapes.jpg'
import lemon from '../Media/lemon.jpg'
import oranges from '../Media/oranges.jpg'
import pear from '../Media/pear.jpg'
import '../Styles/Menu.css'

const Menu = () => {

  return (

    <div className='grid'>
      
      <h1 className='text'>Pylot's Fruity Menu</h1>
      <div className='grid2'>

        <div className='words' >
          <img className='my-pic' src={apple} />
          <h3>Greenish Apple</h3>
          <span>$7.48</span>
          <button>Add To Cart</button>
        </div>

        <div className='words' >
          <img className='my-pic' src={banana} />
          <h3>Brandish Banana</h3>
          <span>$5.78</span>
          <button>Add To Cart</button>
        </div>

        <div className='words' >
          <img className='my-pic' src={coconut} />
          <h3>Coconut</h3>
          <span>$2.98</span>
          <button>Add To Cart</button>
        </div>

      </div>

      <div className='grid3'>
        
       <div className='words' >
          <img className='my-pic' src={grapes} />
          <h3>Grapes</h3>
          <span>$3.08</span>
          <button>Add To Cart</button>
        </div>

        <div className='words' >
          <img className='my-pic' src={lemon} />
          <h3>Lime Lemon</h3>
          <span>$10.32</span>
          <button>Add To Cart</button>
        </div>

        <div className='words' >
          <img className='my-pic' src={pear} />
          <h3>Avocado Pear</h3>
          <span>$9.80</span>
          <button>Add To Cart</button>
        </div>

      </div>

    </div>
  )

}


export default Menu
