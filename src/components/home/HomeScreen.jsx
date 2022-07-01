import React from 'react'
import pokedex from '../../storage/img/pokedex.png'
import InputHome from './InputHome'

const HomeScreen = () => {
  return (
    <div className='home-screen'>
      <div className="home-screen-card">
        <div className='home-screen-container-img'>
          <img src={pokedex} alt="" className='home-screen-img'/>
        </div>
        <h2 className='home-screen-title'>¡Hi Trainer!</h2>
        <p className='mg-botton text-white'>To get started, type your name</p>
        <InputHome/>
      </div>
    </div>
  )
}

export default HomeScreen