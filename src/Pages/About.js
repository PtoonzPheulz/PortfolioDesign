import React from 'react'
import AboutHeader from '../Components/Header copy'
import Navigation from '../Components/Navigation'

export default function About() {
  return (
    <div>
         <header><Navigation/></header>
         <div className='container mt-5'>
         <AboutHeader/>
         </div>
    </div>
  )
}
