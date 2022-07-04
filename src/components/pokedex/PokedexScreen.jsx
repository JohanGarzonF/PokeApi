import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import usePokeApi from '../../hooks/usePokeApi'
import Form from './Form'
import Header from './Header'
import PokeCard from './PokeCard'

const pokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [typeList, setTypeList] = useState()
  const [changeType, setChangeType] = useState('All Pokemons')
  const pokemons = usePokeApi(changeType)


  useEffect(() => {
    if(pokeSearch) {
      setFilterPokemon(pokemons?.filter(poke => poke.name.includes(pokeSearch.toLowerCase())))
    }
  }, [pokeSearch])


  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => setTypeList(res.data.results))
      .catch(err => console.log(err))
  },[])


  return (
    <div className='screen_container'>
      <Header/>
      <h2 className='container title-to-welcome mg-botton'><span>Hi {nameUser},</span> welcome to Pokedex</h2>
      <Form
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setChangeType={setChangeType}
      />
      <div className="card-container container">
        {
          filterPokemon ?
            filterPokemon?.map(pokemon => (
              <PokeCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          :
            pokemons?.map(pokemon => (
              <PokeCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
        }
      </div>
    </div>
  )
}

export default pokedexScreen