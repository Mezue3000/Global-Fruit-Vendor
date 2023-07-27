import React from 'react'
import paven from '../Media/paven.jpg'
import '../Styles/Contact.css'

const Contact = () => {

  return (

    <div className='contact'>

        <div className='image' style={{backgroundImage: `url(${paven})`}}>
          
        </div>

        <div>
            <h1 className='contact1'>Contact Us</h1>
            <hr className='line' />

            <form className='form' action="" method='post'>

               <label className='fname' htmlFor="name">Full-name</label>
               <input className='imput' type="text" name="name" placeholder="Enter full-name" />
                <br />
                <br />
               <label className='fname' htmlFor="">E-mail</label>
               <input className='imput1' type="text" name="email" placeholder="Enter ur email" />
                <br />
                <br />
               <label className='fname' htmlFor="">Phone no</label>
               <input className='imput' type="number" name="phone no" placeholder="+234..." />
               <br />
               <br />
               <label className='fname' htmlFor="message">Message</label>
               <textarea className='area' name="Message" placeholder="Enter message..." rows="6"></textarea>
                <br />
                <br />
               <button className='button1' type='submit'>Send message</button>

            </form>
        </div>
    </div>
  )
}



export default Contact
