import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import usePokeApi from '../../hooks/usePokeApi'
import Loading from '../Login/Loading'
import Pagination from '../Pagination/Pagination'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(9)
   

  //Get current post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = pokemons?.slice(indexOfFirstPost, indexOfLastPost)
  const currentPostFilter = filterPokemon?.slice(indexOfFirstPost, indexOfLastPost)



  useEffect(() => {
    if (pokeSearch === '') {
      setFilterPokemon(null)
    } else {
      setFilterPokemon(pokemons?.filter(poke => poke.name.includes(pokeSearch.toLowerCase())))
    }
  }, [pokeSearch])



  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => setTypeList(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className='screen_container img__pokedex'>
      <Header />
      {
        isLoading ?
          <Loading/>
        :
        <div className='pricipal-container'>
          <h2 className='container title-to-welcome mg-botton'><span>Hi {nameUser},</span> welcome to Pokedex</h2>
          <Form
            setPokeSearch={setPokeSearch}
            typeList={typeList}
            setChangeType={setChangeType}
            setPostPerPage={setPostPerPage}
          />
          <Pagination 
            postPerPage={postPerPage} 
            totalPost={filterPokemon ? filterPokemon?.length : pokemons?.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <div className="card-container container">
            {
              filterPokemon ?
                currentPostFilter?.map(pokemon => (
                  <PokeCard
                    key={pokemon.url}
                    url={pokemon.url}
                  />
                ))
                :
                currentPost?.map(pokemon => (
                  <PokeCard
                    key={pokemon.url}
                    url={pokemon.url}
                  />
                ))
            }
          </div>
          <Pagination 
            postPerPage={postPerPage} 
            totalPost={filterPokemon ? filterPokemon?.length : pokemons?.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      }
    </div>
  )
}

export default pokedexScreen