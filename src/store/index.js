import {configureStore} from '@reduxjs/toolkit'
import isLogged  from './slices/isLogged.slice'
import nameUser from './slices/nameUser.slice'

export default configureStore({
  reducer: {
    nameUser,
    isLogged
  }
})