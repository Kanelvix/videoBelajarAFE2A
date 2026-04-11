import React from 'react'
import CoursesCard from './CoursesCard'
import { Link } from 'react-router'

function CoursesGrid({loading, data, location}) {
  return (
    <section className={`grid gap-5 md:gap-6 
    ${location==="/kategori" ? 'lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      {
        loading ? <p className='text-xl font-semibold'>Loading...</p> :
        data.map((item) => (
          <Link to={`/produk/${item.id}`} key={item.id}>
            <CoursesCard 
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
              pfp={item.pfp}
              price={item.price}
              rating={item.rating}
              totalReview={item.totalReview}
              name={item.name}
              role={item.role}
              company={item.company}
            />
          </Link>
        ))
      }
    </section>
  )
}

export default CoursesGrid