import React from 'react'
import Review from './Review'

// get the reviews data and map the review

function ReviewsSection({ pfp, name, role, company }) {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg'>
      <p className='font-semibold text-lg md:text-xl text-[--dark-color] mb-3'>Rating dan Review</p>
      <div className='flex flex-col md:flex-row gap-4'>
        <Review pfp={pfp} name={name} role={role} company={company} comment={'aa'} />
        <Review pfp={pfp} name={name} role={role} company={company} comment={'aa'} />
      </div>
    </div>
  )
}

export default ReviewsSection