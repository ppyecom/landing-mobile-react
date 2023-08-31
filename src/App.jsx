
import React from 'react'
import About from './Components/About'
import Feature from './Components/Feature'
import Header from './Components/Header'
import aboutimage from './images/about.png'
import aboutimage2 from './images/download.png'
import Presentation from './Components/Presentation'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Feature />
        <About image={aboutimage} title='IMAGEN ACERCA DE' button='Get the App'/>
        <Presentation />
        <About image={aboutimage2} title='Descarga el app now' button='Download'/>
        <Contact />
      </div>
    </>
  )
}

export default App
