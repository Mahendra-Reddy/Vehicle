import * as constants  from "./constants"
const initialState = {
    make:"",
    color:"",
    code:"",
    title:"make",
    isSubmitted: false
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case constants.VEHICLE_MAKE:
        return{
            ...state,
            make: action.value,
            title: "color"
        }
    case constants.VEHICLE_COLOR:
        console.log(action)
        return{
            ...state,
            color: action.value,
            title: "code"
        }
    case constants.VEHICLE_CODE:
        return {
            ...state,
            code:action.value,
            isSubmitted: !state.isSubmitted
        }
    case constants.VEHICLE_STATUS: {
        return initialState
    }
    default:
        return state
  }

}

export default reducer