import React from 'react'
import Price from '../atoms/Price'

function PricingCard({ title, price }) {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg flex flex-col gap-5 md:gap-6'>
      <div className='flex flex-col gap-3 md:gap-4'>
        <p className='font-semibold text-lg text-[--dark-color] leading-6'>{title}</p>
        <div>
          <div>
            <Price price={price} />
          </div>
          <div className='text-white bg-[--yellow-color] text-center px-3 rounded-md w-fit text-sm'>Diskon 50%</div>
        </div>
        <p>Penawaran</p>
      </div>
      <button>Beli Sekarang!</button>
      <div>
        <p className='text-[--dark-color] font-semibold'>Kelas ini sudah termasuk</p>

      </div>
      <div>
        <p className='text-[--dark-color] font-semibold'>Bahasa Pengantar</p>

      </div>
    </div>
  )
}

export default PricingCard