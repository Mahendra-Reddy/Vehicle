import _ from 'lodash'

export const getTitle = (state) => _.get(state, 'vehicle.title') 

export const getState = (state) => _.get(state, 'vehicle')

export const getStatus = (state) => _.get(state, 'vehicle.isSubmitted')