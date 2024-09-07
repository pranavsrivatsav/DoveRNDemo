import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import loginReducer from './slices/loginSlice';
import preferencesReducer from './slices/preferencesSlice';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    preferences: preferencesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})