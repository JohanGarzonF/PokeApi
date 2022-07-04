import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  },[])
  
  const navigate = useNavigate()

  const goPokeInfo = () => navigate(`/pokedex/${pokemon.id}`)

  const bgColor = pokemon?.types[0].type.name



  return (
    <article className={`poke-card bg-${bgColor}-border`} onClick={goPokeInfo}>
      <div className={`poke-card-color bg-${bgColor}`}>
        <img 
          src={pokemon?.sprites.other['official-artwork'].front_default} 
          alt={`character ${pokemon?.name}`} className='poke-card-img' 
        />
      </div>
      <h3 className='mg-botton'>{pokemon?.name}</h3>
      <div className='poke-card-info'>
        <div>
          <div className='mg-botton2'>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[0].stat.name}</h4>
            <p>{pokemon?.stats[0].base_stat}</p>
          </div>
          <div className='mg-botton2'>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[1].stat.name}</h4>
            <p>{pokemon?.stats[1].base_stat}</p>
          </div>
          <div className='mg-botton2'>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[2].stat.name}</h4>
            <p>{pokemon?.stats[2].base_stat}</p>
          </div>
        </div>
        <div>
          <div className='mg-botton2'>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[3].stat.name}</h4>
            <p>{pokemon?.stats[3].base_stat}</p>
          </div>
          <div className='mg-botton2'>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[4].stat.name}</h4>
            <p >{pokemon?.stats[4].base_stat}</p>
          </div>
          <div className='mg-botton2'>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[5].stat.name}</h4>
            <p >{pokemon?.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PokeCard