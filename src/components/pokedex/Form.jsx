import React from 'react'

const numbers = [9, 12, 18, 33]

const Form = ({setPokeSearch, typeList, setChangeType, setPostPerPage}) => {

  const changeInputText = e => {
    setPokeSearch(e.target.value)
  }
  const changeTypePokemon = e => {
    setChangeType(e.target.value)
  }
  const changePostPerPage = e => {
    setPostPerPage(e.target.value)
  }

  return (
    <form className='container mg-botton form'>
      <input 
        className='input-select'
        type="text" 
        placeholder='Search your favorite Pokemon'
        onChange={changeInputText}
      />
      <div className='form__selector-container'>
        <select onChange={changeTypePokemon} className='input-select select'>
          <option className='op' value={'All Pokemons'}>All Pokemons</option>
          {
            typeList?.map(type => (
              <option
                key={type.name} 
                value={type.name}
              >{type.name}</option>
            ))
          }
        </select>
        <select onChange={changePostPerPage} className='input-select select'>
          <option className='op' value={'9'}>Pokes per page</option>
          {
            numbers.map(num => (
              <option
                key={num} 
                value={num}
              >{num}</option>
            ))
          }
        </select>
      </div>
    </form>
  )
}

export default Form