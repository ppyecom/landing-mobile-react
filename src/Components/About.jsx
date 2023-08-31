import React from 'react'



const About = (props) => {
  return (
    <div id='about'>
        <div className="about-img">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda in dolorum enim adipisci aut velit facilis quidem sed debitis provident est officiis cupiditate ducimus, sint atque quibusdam et nulla.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About