import React from 'react'

const FeatureBox = (props) => {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.image}  />
        </div>
        <div className="s-b-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ratione delectus illo nam blanditiis, sint mollitia harum enim amet odio non quibusdam quam autem ipsum adipisci tempore officia est repellendus.</p>
        </div>
    </div>
  )
}

export default FeatureBox