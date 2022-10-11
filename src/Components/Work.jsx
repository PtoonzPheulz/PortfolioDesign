import React from 'react'

export default function Work({ProjectImage,title,role}) {
  return (
    <section className='' id='resume'>
       
      <div className='bg-2 p-5 mb-5'>
      <div className='row justify-content-between align-items-center'>
            <div className='col-lg-5'>
                <img className='w-100' src={ProjectImage} alt='' />
            </div>
            <div className='col-lg-6'>
                <h2 className='mb-4'>{title} </h2>
<h4 className='mb-3'>My role: 
</h4>
<div className='col-lg-9 fw-1 lh-lg h8 mb-5'>{role}</div>
 <div>
                <button className='px-5  py-3 btn bg-11 text-1'>View Case Study</button>
            </div>
            </div>
           
        </div>
      </div>
    </section>
  )
}
