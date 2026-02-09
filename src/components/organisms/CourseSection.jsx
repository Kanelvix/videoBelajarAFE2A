import React, { useState } from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CoursesGrid from './CoursesGrid'
import CategoryTabs from '../molecules/CategoryTabs'
import courses from '../../data/courses'


function CourseSection() {
  const [activeTab, setActiveTab] = useState("Semua Kelas")

  const filteredCourses =
    activeTab === "Semua Kelas"
      ? courses
      : courses.filter(course => course.category === activeTab)

  return (
    <div className='w-full flex flex-col gap-6 md:gap-8'>
      <SectionTitle 
        textAlign="left"
        heading="3"
        fontSize="text-2xl md:text-[2rem]"
        type="contents"
        title="Koleksi Video Pembelajaran Unggulan"
        desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      />
      <div className='w-full'>
        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <CoursesGrid courses={filteredCourses} />
    </div>
  )
}

export default CourseSection