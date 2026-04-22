import React from 'react'
import Price from '../atoms/Price'
import InfoItem from '../molecules/InfoItem'
import Button from '../atoms/Button'

function PricingCard({ title, price }) {
  const discount = 50;

  const formatPrice = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + "M";
    }

    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }

    return num
  }

  return (
    <div className='md:min-w-96 h-fit p-6 bg-white border border-[--border-color] rounded-lg flex flex-col gap-5 md:gap-6'>
      <div className='flex flex-col gap-3 md:gap-4'>
        <p className='font-semibold text-lg text-[--dark-color] leading-6'>{title}</p>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Price price={price * 0.5} />
            <span className='text-[--base-color] line-through'>Rp {formatPrice(price)}</span>
          </div>
          <div className='text-white bg-[--yellow-color] text-center px-3 rounded-md w-fit text-sm'>Diskon {discount}%</div>
        </div>
        <p className='text-sm font-medium text-[--blue-color]'>Penawaran spesial tersisa 2 hari lagi!</p>
      </div>
      <Button color={'white'} bg={"var(--green-color)"} text={'Beli Sekarang'} />
      <div>
        <p className='text-[--dark-color] font-semibold'>Kelas ini sudah termasuk</p>
        <InfoItem />
      </div>
      <div>
        <p className='text-[--dark-color] font-semibold'>Bahasa Pengantar</p>

      </div>
    </div>
  )
}

export default PricingCard