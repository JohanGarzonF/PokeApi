import {configureStore} from '@reduxjs/toolkit'
import isLogged  from './slices/isLogged.slice'
import nameUser from './slices/nameUser.slice'
import isLoading from './slices/IsLoading.slice'

export default configureStore({
  reducer: {
    nameUser,
    isLogged,
    isLoading
  }
})