import React from 'react'
import { Button, styled } from '@mui/material'

const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: 20
})

const ButtonComponent = ({title, onClick, isDisabled}) => (
    <StyledDiv>
        <Button variant='contained' color='primary' onClick={onClick} disabled={isDisabled}>
            {title}
        </Button>
    </StyledDiv>
)


export default ButtonComponent