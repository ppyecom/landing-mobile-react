import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'



const Feature = () => {
  return (
    <div className='features'>
        <div className="a-container">
            <FeatureBox image={featureimage} title='Desarrollador' />
            <FeatureBox image={featureimage1} title='Desarrollador' />
            <FeatureBox image={featureimage2} title='Desarrollador' />
        </div>
    </div>
  )
}

export default Feature