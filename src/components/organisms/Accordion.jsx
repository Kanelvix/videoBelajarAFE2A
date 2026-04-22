import React from 'react'
import AccordionItem from '../molecules/AccordionItem'


function Accordion({ title, data }) {
  return (
    <div className='p-6 bg-white border border-[--border-color] rounded-lg'>
      <p className='text-[--dark-color] font-semibold text-xl mb-6'>{title}</p>
      <div className='flex flex-col gap-6'>
        {data.map((item, index) => (
          <div key={index}>
            <p className='text-[--green-color] font-semibold text-lg mb-3'>{item.title}</p>
            <div className='flex flex-col gap-3'>
              {item.courses.map((courses, index) => (
                <AccordionItem courseTitle={courses.courseTitle} courseDuration={courses.duration} courseType={courses.type} key={index} />
              ) )}
            </div>
          </div> // there's still no courses' and modules' datas (made this according to the datas in ERD db)
        ))}
      </div>
    </div>
  )
}

export default Accordion