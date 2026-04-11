import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CTAInput from '../molecules/CTAInput'
import bgUrl from '../../assets/background/e0f71e25cc34e79e1f52284620dbea34fb453966.jpg'

function CTABanner() {
  return (
    <section 
    style={{
      backgroundImage: `url(${bgUrl})`
    }}
    className='
      w-full
      bg-[#000000cc]
      bg-no-repeat bg-center bg-cover bg-blend-darken
      flex justify-center rounded-lg py-12 md:py-14
    '>
      <div className='max-w-xl mx-5 flex flex-col items-center gap-10'>
        <div className='text-center mx-3'>
          <p className='text-[#C1C2C4] mb-1'>NEWSLETTER</p>

          <SectionTitle
            textAlign="center"
            heading="3"
            title="Mau Belajar Lebih Banyak?"
            fontSize="text-2xl md:text-3xl"
            desc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik heriesok.id"
            descFontWeight="normal"
          />
        </div>

        <CTAInput />
      </div>
    </section>
  )
}

export default CTABanner