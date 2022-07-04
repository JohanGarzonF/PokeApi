import axios from "axios"
import { useEffect, useState } from "react"


const usePokeApi = (changeType) => {
  const [pokemons, setPokemons] = useState()
  
  useEffect(() => {
    if(changeType === 'All Pokemons'){
      const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
      axios.get(URL_POKEMON)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(hola))
    } else {
      const URL = `https://pokeapi.co/api/v2/type/${changeType}/`
      axios.get(URL)
        .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
        .catch(err => console.log(err))
      }
  }, [changeType])

  return pokemons
}

export default usePokeApi