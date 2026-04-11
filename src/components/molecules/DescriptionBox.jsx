import React from 'react'

function DescriptionBox({ descText }) {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg'>
      <p className='font-semibold text-lg md:text-xl text-[--dark-color]'>Deskripsi</p>
      <p className='text-[--base-color]'>{descText}</p>
    </div>
  )
}

export default DescriptionBox