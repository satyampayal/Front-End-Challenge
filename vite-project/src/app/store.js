import { configureStore} from '@reduxjs/toolkit'
import countriesReducer from '../feature/countries/countriesSlice'
 export const store = configureStore({
    reducer: {
        country:countriesReducer,
    },
  })


  export default store;