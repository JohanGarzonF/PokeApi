import React, { useEffect, useState } from 'react'
import axios from "axios"

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  },[])
  console.log(pokemon)

  return (
    <article className='poke-card'>
      <div className='poke-card-color'>
        <img 
          src={pokemon?.sprites.other['official-artwork'].front_default} 
          alt={`character ${pokemon?.name}`} className='poke-card-img' 
        />
      </div>
      <h3 className='mg-botton'>{pokemon?.name}</h3>
      <div className='poke-card-info'>
        <div>
          <div>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[0].stat.name}</h4>
            <p>{pokemon?.stats[0].base_stat}</p>
          </div>
          <div>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[1].stat.name}</h4>
            <p>{pokemon?.stats[1].base_stat}</p>
          </div>
          <div>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[2].stat.name}</h4>
            <p>{pokemon?.stats[2].base_stat}</p>
          </div>
        </div>
        <div>
          <div>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[3].stat.name}</h4>
            <p>{pokemon?.stats[3].base_stat}</p>
          </div>
          <div>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[4].stat.name}</h4>
            <p >{pokemon?.stats[4].base_stat}</p>
          </div>
          <div>
            <h4 className='poke-card-info-titles'>{pokemon?.stats[5].stat.name}</h4>
            <p >{pokemon?.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PokeCard