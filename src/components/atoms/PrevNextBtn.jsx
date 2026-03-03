import React from 'react'
import arrow from '../../assets/Arrows/pagination.svg'

function PrevNextBtn( {dir, setCurrentPage, currentPage, totalPages} ) {

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
    <button className='size-10 flex justify-center items-center bg-[--selected-color] hover:bg-[--hover-color] active:bg-[--selected-color] duration-300 rounded' onClick={dir === "right" ? nextPage : prevPage}>
      <img src={arrow} alt="" className={dir === "right" ? 'rotate-180' : ''} />
    </button>
  )
}

export default PrevNextBtn