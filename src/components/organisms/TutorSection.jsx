import React from 'react'
import TutorCard from './TutorCard'

function TutorSection() {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg'>
      <p className='font-semibold text-lg md:text-xl text-[--dark-color] mb-3'>Belajar bersama Tutor Profesional</p>
      <div className='flex flex-col md:flex-row gap-4'>
        <TutorCard pfp={'pfp'} name={'name'} role={'role'} company={'company'} desc={'aa'} />
        <TutorCard pfp={'pfp'} name={'name'} role={'role'} company={'company'} desc={'aa'} />
      </div>
    </div>
  )
}

export default TutorSection