import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { useDispatch } from "react-redux"
import { setIsLoadingGlobal } from '../../store/slices/IsLoading.slice'
import { useSelector } from 'react-redux'
import Loading from '../Login/Loading'

const PokeInfo = () => {

  const [pokemon, setPokemon] = useState()

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoadingGlobal(true))
    const URL_POKEINDIV = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL_POKEINDIV)
      .then(res => {
        setPokemon(res.data)
      })
      .finally(() => dispatch(setIsLoadingGlobal(false)))
  }, [])

  const bgColor = pokemon?.types[0].type.name
  const bgColor2 = pokemon?.types[1]?.type.name

  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className='img-pokedex__id'>
      <Header />
      {
        isLoading ?
          <Loading />
          :
          <article className="container poke-info mg-botton">
            <div className='poke-container'>
              <div className={`poke-info-color mg-botton bg-${bgColor}`}>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="Poke Character" />
              </div>
              <h2 className='mg-botton'>{pokemon?.name}</h2>
              <ul className='poke-info-list mg-botton'>
                <li><span>height</span><p>{pokemon?.height}</p></li>
                <li><span>weight</span><p>{pokemon?.weight}</p></li>
              </ul>
              <div className="poke-info-abilities mg-botton">
                <ul>
                  <h3>Abilities</h3>
                  <div className="poke-info-abilities-list">
                    <li>{pokemon?.abilities[0].ability.name}</li>
                    <li>{pokemon?.abilities[1].ability.name}</li>
                  </div>
                </ul>
                <ul>
                  <h3>Type</h3>
                  <div className="poke-info-abilities-list">
                    <li className={`bg-${bgColor}`}>{pokemon?.types[0].type.name}</li>
                    {
                      pokemon?.types[1] !== undefined ?
                        <li className={`bg-${bgColor2}`}>{pokemon?.types[1].type.name}</li>
                        : null
                    }
                  </div>
                </ul>
              </div>
            </div>
            <div className='poke-info-list-container poke-container'>
              <fieldset className='poke-info-list-moves'>
                <legend className='title'>Movements</legend>
                <ul className='poke-info-list-move-ul'>
                  {
                    pokemon?.moves.map(move => (
                      <li
                        key={move.move.url}
                      >{move.move.name}</li>
                    ))
                  }
                </ul>
              </fieldset>
            </div>
          </article>
      }
    </div>
  )
}

export default PokeInfo