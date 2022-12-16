import * as constants from './constants'

const actions = {
    make: constants.VEHICLE_MAKE,
    color: constants.VEHICLE_COLOR,
    code: constants.VEHICLE_CODE,
    status: constants.VEHICLE_STATUS
}

export const vehicledetails = ({ title, value }) => (dispatch) => (dispatch({
    type: actions[title],
    value
}))