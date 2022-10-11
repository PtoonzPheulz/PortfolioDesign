import React from 'react'

export default function Header() {
  return (
    <section className='row g-5 justify-content-between align-items-center mb-5' >
        <div className='col-lg-4  text-center'>
            <img  className='w-100' src='/images/1.svg' alt=''/>
        </div>
        <div className='col-lg-7'>
            <div className='mb-5'>
            <h1 className='text-1 mb-3'>Hi there, I’m Opeyemi Okunola, a
UX Designer.</h1>
<h5 className='fw-1 lh-base'>Am passionate about designing good user experiences
 and interfaces to make sure users are satisfied while
 using your products</h5>
            </div>
 <div className='text-start'>
 <button className='py-3 px-4 h3 btn bg-1 text-white'><h5 className='mb-0 fw-1'>Check Out My Work</h5></button>
 </div>
        </div>
        <div className='my-5'></div>
    </section>
  )
}
