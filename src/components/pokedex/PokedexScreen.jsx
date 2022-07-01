import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import usePokeApi from '../../hooks/usePokeApi'
import Form from './Form'
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
    <div>
      <h2>Hi {nameUser}, welcome to Pokedex</h2>
      <Form 
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setChangeType={setChangeType}
      />
      <div className="card-container">
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