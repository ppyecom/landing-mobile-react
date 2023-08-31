import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='main'>
        <Navbar />
        <div className='name'>
            <h1>
                <span>Launch Your App</span> With Confidence and Creativity
            </h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia obcaecati consequuntur modi ipsam officiis veritatis iure quam atque culpa ullam, ratione numquam officia, voluptatem in velit quaerat expedita incidunt.</p>
            <a href="#" className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header