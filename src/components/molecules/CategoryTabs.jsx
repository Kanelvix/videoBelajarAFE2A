import React from 'react'

const tabs = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis"
]

function CategoryTabs({ activeTab, setActiveTab }) {
  return (
    <div className='flex gap-9 h-16 w-full overflow-x-auto no-scrollbar'>
      {tabs.map((tab) => (
        <p
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`${activeTab === tab ? (
            'text-[--red-color] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[6px] after:w-1/2 after:bg-[--red-color] after:rounded-lg hover:text-orange-700'
          ) : ( 
            'hover:text-[--dark-color]' 
          )}
          font-medium h-full flex items-center cursor-pointer flex-shrink-0 text-sm md:text-base duration-300
          `}
          >
            {tab}
          </p>
      ))}
    </div>
  )
}

export default CategoryTabs