import {configureStore, combineReducers} from '@reduxjs/toolkit'
import  vehicleReducer from './modules/vehicleReducer'


const reducers = combineReducers({
    vehicle: vehicleReducer
})

const store = configureStore(
    {reducer: reducers}
)

export default store