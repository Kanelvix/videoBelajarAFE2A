import React from 'react'
import Hero from '../components/organisms/Hero'
import CourseSection from '../components/organisms/CourseSection'
import CTABanner from '../components/organisms/CTABanner'

function HomePage() {
  return (
    <main className='w-full mb-7 md:mb-16 pt-4'>
      <div className='mx-auto flex flex-col px-5 gap-6 md:gap-16 max-w-[75rem]'>
        <Hero 
          title={"Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"}
          desc={"Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."}
        />
        <CourseSection />
        <CTABanner />
      </div>
    </main>
  )
}

export default HomePage