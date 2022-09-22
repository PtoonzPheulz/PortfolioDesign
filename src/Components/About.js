import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import ellipse2 from '../Images/Ellipse2.svg'
import frame2 from '../Images/Frame2.svg'
import frame3 from '../Images/Frame3.svg'

const Style = styled.div`
    padding: 2rem 0;
    .banner-be1, .banner-be2 {
        width: auto;
    }
    .about-feed-1 {
        align-self: center;
        h4, p {
            text-align: left;
        }
        p {
            padding-top: 2rem;
        }
    }
    #check-btn {
        border-radius: 10px;
        border: none;
        outline: none;
        color: #fff;
        padding: 0.4rem 0.8rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    img {
        width: 90%;
    }
    h5 {
        text-align: left;
    }

    @media screen and (max-width: 375px) {
        .about-feed-1 {
            h4, p {
                text-align: center;
                padding: 2rem 0;
            }
        }
        h5 {
            text-align: center;
        }
    }
`

function About() {
  return (
    <Style>
         <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-4'>
                        <img src={ellipse2} alt=''/>
                    </div>
                    <div className='col-md-6 align-self-center about-feed-1'>
                        <h4>Hi there, I’m Opeyemi Okunola, a <br/> UX Designer.</h4>
                        <p><b>Am passionate about designing good user experiences <br/> 
                        and interfaces to make sure users are satisfied while <br/> 
                        using your products</b></p>
                        <button id='check-btn'>Resume</button>
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
                <h5 className='py-5'>© 2022. All Rights Reserved to Opeyemi Okunola.</h5>
            </div>
         </div>
    </Style>
  )
}

export default About