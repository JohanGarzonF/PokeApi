import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setIsLoadingGlobal } from "../store/slices/IsLoading.slice"


const usePokeApi = (changeType) => {
  const [pokemons, setPokemons] = useState()

  const dispatch = useDispatch()
  
  useEffect(() => {
    if(changeType === 'All Pokemons'){
      const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
      dispatch(setIsLoadingGlobal(true))
      axios.get(URL_POKEMON)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoadingGlobal(false)))
    } else {
      dispatch(setIsLoadingGlobal(true))
      const URL = `https://pokeapi.co/api/v2/type/${changeType}/`
      axios.get(URL)
        .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoadingGlobal(false)))
      }
  }, [changeType])

  return pokemons
}

export default usePokeApi