import React from 'react'
import arrow from '../../assets/arrow.svg'

function Pagination( {totalRows, rowsPerPage, setCurrentPage, currentPage} ) {
  const maxVisiblePages = 4;
  const totalPages = Math.ceil(totalRows/rowsPerPage);

  let startPage = Math.max(
    1, currentPage - Math.floor(maxVisiblePages/2)
  );

  let endPage = startPage + maxVisiblePages;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const nextPage = () => {
    if (currentPage < totalPages){
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className='flex gap-3 justify-center'>
      <button className='size-7 text-[--base-color] rounded-md bg-[--light-gray-color-2] hover:text-[--dark-color] hover:bg-[--light-gray-color] transition-all border-2 flex justify-center items-center' onClick={prevPage}>
        <img src={arrow} alt="" className='rotate-180' />
      </button>
      {
        pages.map((page, i) => {
          return <button key={i} className={`size-7 rounded-md font-medium transition-all border-2 flex justify-center items-center ${page === currentPage ? 'bg-[--light-blue-color] text-[--blue-color]' : 'text-[--base-color] bg-[--light-gray-color-2] hover:text-[--dark-color] hover:bg-[--light-gray-color]'}`} onClick={() => setCurrentPage(page)}>{page}</button>
        })
      }
      <button className='size-7 text-[--base-color] rounded-md bg-[--light-gray-color-2] hover:text-[--dark-color] hover:bg-[--light-gray-color] transition-all border-2 flex justify-center items-center' onClick={nextPage}>
        <img src={arrow} alt="" />
      </button>
    </div>
  )
}

export default Pagination