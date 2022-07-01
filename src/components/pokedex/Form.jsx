import React from 'react'

const Form = ({setPokeSearch, typeList, setChangeType}) => {

  const changeInputText = e => {
    setPokeSearch(e.target.value)
  }
  const changeTypePokemon = e => {
    setChangeType(e.target.value)
  }

  return (
    <form>
      <input 
        type="text" 
        placeholder='Search your favorite Pokemon'
        onChange={changeInputText}
      />
      <select onChange={changeTypePokemon}>
        <option value={'All Pokemons'}>All Pokemons</option>
        {
          typeList?.map(type => (
            <option 
              key={type.name} 
              value={type.name}
            >{type.name}</option>
          ))
        }
      </select>
    </form>
  )
}

export default Form