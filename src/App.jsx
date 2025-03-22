import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Service from './components/Service'
import Form from './components/Form'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <Service/>
      <Testimonials/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App