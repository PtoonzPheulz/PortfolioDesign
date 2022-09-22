import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import ellipse1 from '../Images/Ellipse1.svg'
import group1 from '../Images/Group1.svg'
import group2 from '../Images/Group2.svg'
import frame1 from '../Images/Frame1.svg'
import frame2 from '../Images/Frame2.svg'
import frame3 from '../Images/Frame3.svg'
import About from './About'

const Style = styled.div`
    padding: 2rem 0;
    .home-feed-1 {
        align-self: center;
        padding-left: 3rem;
    }
    .home-subfeed-1 {
        text-align: left;
        p {
            padding-top: 2rem;
        }
    }
    #check-btn {
        border-radius: 10px;
        border: none;
        outline: none;
        color: #fff;
        background: #BC4749;
        padding: 0.4rem 0.8rem;
        margin-top: 1rem;
    }
    .home-feed-2 {
        align-self: center;
    }
    .home-subfeed-2 {
        text-align: left;

        h4 {
            font-size: 2rem;
            font-weight: 600;
            padding-bottom: 2rem;
        }
        p {
            font-weight: 500;
            font-size: 1.2rem;
        }
    }
    #check-btn-2 {
        border-radius: 10px;
        border: #BC4749 solid 1px;
        outline: none;
        color: #BC4749;
        padding: 0.4rem 0.8rem;
        font-size: 1.5rem;
        margin-top: 1rem;
        background: transparent;
    }
    .back-color {
        background: #BC474926;
    }
    .text-mail {
        color: #BC4749;
        text-decoration: underline;
    }
    
    img {
        width: 90%;
    }
    .banner-be1, .banner-be2 {
        width: auto;
    }
    .berd {
        h3 {
            color: #BC4749;
            font-weight: 700;
        }
        p {
            font-weight: 600;
        }
    }
    

    @media screen and (max-width: 768px){
        .home-feed-1 {
            text-align: center;
            padding: 2rem 0;
        }
        .home-subfeed-1 {
            text-align: center;
        }
    }
    
    @media screen and (max-width: 375px) {
        .home-subfeed-2 {
            text-align: center;
            padding: 2rem 0;
        }
        
    }
`

function Home() {
  return (
    <Style>
        <div>
        <Navigation/>
            <div className='container'>
                <div className='py-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={ellipse1} alt=''/>
                    </div>
                    <div className='col-lg-6 home-feed-1'>
                        <div className='home-subfeed-1'>
                        <h4>Hi there, I’m Opeyemi Okunola, a <br/> UX Designer.</h4>
                        <p><b>Am passionate about designing good user experiences <br/>  
                            and interfaces to make sure users are satisfied while <br/> 
                             using your products</b></p>
                        </div>
                             <div>
                             <button id='check-btn'>Check Out My Work</button>
                             </div>
                    </div>
                </div>
                </div>
                <div className='my-3 pt-5 back-color'>
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={group1} alt=''/>
                    </div>
                    <div className='col-md-6 home-feed-2'>
                        <div className='home-subfeed-2'>
                        <h4>Life First Blood Donation and Request <br/> 
                        Mobile app and website Design. </h4>
                        <p> <b>My role: </b> <br/> 
                        UX Designer leading the App and responsive website <br/> 
                        Design from conception to delivery.</p>
                        </div>
                       <div className=''>
                       <button id='check-btn-2'> View Case Study </button>
                       </div>
                    </div>
                </div>
                </div>
                <div className='my-3 py-5 back-color'>
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={frame1} alt=''/>
                    </div>
                    <div className='col-md-6 home-feed-2'>
                        <div className='home-subfeed-2'>
                        <h4>Foodie Zone Food Delivery Mobile App</h4>
                        <p> <b>My role: </b> <br/> 
                        UX Designer leading the App and responsive website <br/> 
                        Design from conception to delivery.</p>
                        </div>
                        <button id='check-btn-2'> View Case Study </button>
                    </div>
                </div>
                </div>
                <div className='my-3 py-5 back-color'>
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={group2} alt=''/>
                    </div>
                    <div className='col-md-6 home-feed-2'>
                    <div className='home-subfeed-2'>
                    <h4>Foodie Zone Food Delivery Mobile App</h4>
                        <p> <b>My role: </b> <br/> 
                        UX Designer leading the App and responsive website <br/> 
                        Design from conception to delivery.</p>
                    </div>
                        <button id='check-btn-2'> View Case Study </button>
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className='pt-5 pb-3 berd'>
                    <h3>Let’s Work Together</h3>
                    <p className='py-3'>Get in Touch for opportunity </p>
                    <p className='pb-1 text-mail'>okunolaopeyemi2013@yahoo.com</p>
                    <p>234 (7063374526)</p>
                    </div>
                        <div className='d-flex justify-content-center pb-4'>
                            <div className=''>
                                <img src={frame2} alt='' className='banner-be1 px-3'/>
                            </div>
                            <div className=''>
                                <img src={frame3} alt='' className='banner-be2 px-3'/>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
        <About/>
        
    </Style>
  )
}

export default Home