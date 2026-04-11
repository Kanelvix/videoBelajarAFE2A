import React from 'react'
import ProfileName from '../molecules/ProfileName'
import RatingStars from '../molecules/RatingStars'

function Review({ pfp, name, role, company, comment }) {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg'>
      <ProfileName pfp={pfp} name={name} role={role} company={company} /> {/* need changes in the component after implementing the database */}
      <p className='text-[--dark-color]'>{comment}</p>
      <RatingStars rating={2} />
    </div>
  )
}

export default Review