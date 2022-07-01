import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsLogged } from '../../store/slices/isLogged.slice'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const InputHome = ({}) => {

  const {handleSubmit, register, reset} = useForm()
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = data => {
    dispatch(setNameGlobal(data.nameUser))
    reset({
      nameUser:''
    })
    navigate('/pokedex')
    dispatch(setIsLogged(true))
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder='Enter your trainer name' {...register('nameUser', { required:true })} className='input-home'/>
      <button className='btn-home'>Go to Pokedex</button>
    </form>
  )
}

export default InputHome