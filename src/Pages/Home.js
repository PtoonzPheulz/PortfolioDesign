import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navigation from '../Components/Navigation'
import Work from '../Components/Work'

export default function Home() {
  return (
    <div>
        <header><Navigation/></header>
        <main className='container'>
          <div className='py-4 my-3'></div>
        <Header/>
        <Work
        ProjectImage={'/images/2.svg'}
        title='Life First Blood Donation and Request
        Mobile app and website Design. '
        role={"UX Designer leading the App and responsive website Design from conception to delivery."}
        />
        <Work
        ProjectImage={'/images/3.svg'}
        title='Foodie Zone Food Delivery Mobile App'
        role={"UX Designer leading the App and Design from conception to delivery."}
        />
        <Work
        ProjectImage={'/images/4.svg'}
        title='Shoptacle Responsive Website design.'
        role={`UX Designer leading the responsive
        website design  Design from
        conception to delivery.`}
        />
     <Footer/>
        </main>
    </div>
  )
}
