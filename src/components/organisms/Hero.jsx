import React from 'react'
import Button from '../atoms/Button'
import SectionTitle from '../molecules/SectionTitle'
import bgUrl from '../../assets/background/65edb9e6d25fa2121b31a4ad14c9ebd02127f629.jpg'
import { useLocation } from 'react-router'
import RatingStars from '../molecules/RatingStars'

function Hero({ title, desc,rating, totalReview }) {
  const location = useLocation().pathname;

  return (
    <section 
    style={{
      backgroundImage: `url(${bgUrl})`
    }}
    className='
      w-full 
      bg-[#000000cc]
      bg-no-repeat bg-center bg-cover bg-blend-darken
      flex justify-center rounded-lg py-10 md:py-14
    '>

      <div className={`max-w-5xl w-full flex flex-col justify-between gap-6 ${location === '/homepage' ? 'items-center' : 'mx-5 py-8 md:py-10'}`}>

        <div className={location === '/homepage' ? 'mx-5' : ''}>
          <SectionTitle 
            textAlign={location === '/homepage' ? 'center' : 'left'}
            fontSize={location === '/homepage' ? 'text-3xl md:text-5xl' : 'text-3xl md:text-4xl'}
            title={title}
            desc={desc}
            descFontWeight={location === '/homepage' ? '' : 'normal'}
            heading={location === '/homepage' ? '' : '3'}
          />
        </div>

        {location === '/homepage' ? 
        <div>
          <Button color="#FFFFFF" bg="#3ECF4C" text="Temukan Video Course untuk Dipelajari!" />
        </div>
        :
        <div className='bg-[--light-gray-color-2] w-fit p-1 rounded-full border-[--light-gray-color] border-2'>
          <RatingStars rating={rating} totalReview={totalReview} />
        </div>
        }
        
      </div>
    </section>
  )
}

export default Hero