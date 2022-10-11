import React from 'react'
import {BsDribbble, BsLinkedin} from 'react-icons/bs'
import {IoIosArrowUp} from 'react-icons/io'
export default function Footer() {
  return (
    <section className='mb-4'>
        <div className='my-5 py-4'></div>
        <div className='text-center'>
            <h2 className='text-1 fw-bold mb-5'>Let’s Work Together</h2>
            <h5 className='mb-5'>Get in Touch for oppourtunity </h5>
            <div className='text-1 h8 mb-5'><a className='text-1' href='mailto:okunolaopeyemi2013@yahoo.com'><u className='text-1'>okunolaopeyemi2013@yahoo.com</u></a></div>
            <div className=' h8 mb-5'>234 (7063374526)</div>
            <div>
                <div className='d-flex justify-content-center'>
                <div>
                <BsLinkedin color='#0072b1' size={40}/>
                <p>LinkedIn</p>
                </div>
                <div className='mx-3'></div>
                <div>
                <BsDribbble  size={40}/>
                <p>Dribble</p>
                </div>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <p>© 2022. All Rights Reserved to Opeyemi Okunola.</p>
            <button
            onClick={()=>
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }
            className='bg-1 btn animate__bounce animate__animated  animate__infinite	infinite'><IoIosArrowUp color='white' size={30}/></button>
        </div>
    </section>
  )
}
