import React from 'react'
import { useEffect } from 'react'
import './style/pagination.css'

const Pagination = ({postPerPage, totalPost, setCurrentPage, currentPage}) => {

  const pageNumbers = []

  let quatityPages = Math.ceil( totalPost / postPerPage )
  const pagesPerBlock = 5
  let currentBlock = Math.ceil( currentPage / pagesPerBlock )

  const prevPage = () => {
    if(currentPage - 1 === 0){
      setCurrentPage(quatityPages)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPage = () => {
    if(currentPage + 1 > quatityPages){
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage + 1)
    }
  }

  if(currentBlock * pagesPerBlock >= quatityPages){
    for(let j = currentBlock * pagesPerBlock - pagesPerBlock + 1; j<= quatityPages; j++){
      pageNumbers.push(j)
    }
  } else {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++){
      pageNumbers.push(i)
    }
  }
  console.log(pageNumbers)
  
  return (
    <>
      {
        pageNumbers.length == 0 || pageNumbers.length == 1?
        <></>
        :
        <nav className='pagination'>
          <p onClick={prevPage} className='prev-next_btn'>&#60;</p>
          <ul className='pagination-number-container'>
            {
              pageNumbers.map(number => (
                <li key={number} className='pagination-item'>
                  <a 
                    onClick={() => setCurrentPage(number)} 
                    className={currentPage === number ? 'pagination-selected': 'pagination-link'}
                  >{number}
                  </a>
                </li>
              ))
            }
          </ul>
          <p onClick={nextPage} className='prev-next_btn'>&#62;</p>
        </nav>
      }
    </>
  )
}

export default Pagination