import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LoginProtected = () => {
  const isLogged = useSelector(state => state.isLogged)
  if(isLogged){
    return <Outlet/>
  } else {
    return <Navigate to='/'/>
  }
}

export default LoginProtected