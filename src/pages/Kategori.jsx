import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/molecules/SectionTitle.jsx'
import CoursesFilter from '../components/organisms/CoursesFilter.jsx'
import CoursesGrid from '../components/organisms/CoursesGrid.jsx'
import { useLocation } from 'react-router'
import SearchBar from '../components/molecules/SearchBar.jsx'
import Sorter from '../components/molecules/Sorter.jsx'
import Pagination from '../components/organisms/Pagination.jsx'
import courses from '../data/courses.js'

function Kategori() {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(9);

  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourse = courses.slice(firstCourseIndex, lastCourseIndex);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCoursesPerPage(6);
      } else {
        setCoursesPerPage(9);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return() => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className='py-16'>
      <div className='max-w-[75rem] flex mx-auto px-5 flex-col gap-9'>
        <SectionTitle
          heading="3"
          type="contents"
          fontSize="text-3xl"
          title="Koleksi Video Pembelajaran Unggulan"
          descFontWeight="normal"
          desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />
        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <CoursesFilter />
          <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex gap-4 justify-end'>
              <Sorter />
              <SearchBar />
            </div>
            <CoursesGrid courses={currentCourse} location={location.pathname} />
            <Pagination totalCourses={courses.length} coursesPerPage={coursesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default Kategori