import React from 'react'
import pokedex from '../../storage/img/pokedex.png'

const Header = () => {
  return (
    <header className='header mg-botton'>
      <div className='bg-red '>
        <div className='container img-container'>
          <img src={pokedex} alt="" />
        </div>
      </div>
      <div className='bg-black'></div>
    </header>
  )
}

export default Header