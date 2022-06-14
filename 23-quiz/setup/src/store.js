import { configureStore } from '@reduxjs/toolkit'
import queReducer from './queSlice'
export default configureStore({
  reducer:{
    quiz:queReducer,
  },
})