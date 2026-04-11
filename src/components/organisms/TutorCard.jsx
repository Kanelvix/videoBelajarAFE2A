import React from 'react'
import ProfileName from '../molecules/ProfileName'

function TutorCard() {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg'>
      <ProfileName pfp={''} name={'aaaa'} role={'aaa'} company={'company'} />
      <p className='text-[--dark-color]'>{'desc'}</p>
    </div>
  )
}

export default TutorCard