import React from 'react'

function CourseTitle(props) {
  return (
    <div className='flex flex-col'>
      <p className='limit-two-lines font-semibold text-[--dark-color] text-base/5 md:text-lg'>{props.title}</p>
      <p
        className='limit-two-lines hidden md:block font-medium'>{props.desc}</p>
    </div>
  )
}

export default CourseTitle