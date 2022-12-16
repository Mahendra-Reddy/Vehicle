import React from 'react'
import { Typography, styled } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import * as vehicleSelector from '../store/modules/selector'
import * as vehicleAction from '../store/modules/actions'
import ButtonComponent from '../components/Button'

const StyledTypography = styled(Typography)({
    fontSize: 20,
    fontWeight: 'bold'
})

const CompletedView = () => {
    const vehicle = useSelector(vehicleSelector.getState)
    const dispatch = useDispatch()
    return(
        <React.Fragment>
            <StyledTypography>Generated Text</StyledTypography>
            <StyledTypography>I have a {vehicle.make} and the colour is {vehicle.color}.</StyledTypography>
            <StyledTypography>THE CAR IS {vehicle.color}! NICE!!</StyledTypography>
            <StyledTypography>REF: {vehicle.code}</StyledTypography>
            <ButtonComponent title={"NEW"} isDisabled={false} onClick={() => dispatch(vehicleAction.vehicledetails({
                title:"status"
            }))}/>
        </React.Fragment>
    )
}

export default CompletedView