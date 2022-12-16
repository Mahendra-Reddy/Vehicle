import React from 'react'
import { Box, styled } from '@mui/material';
import { useSelector } from 'react-redux'
import * as vehicleSelector from './store/modules/selector'
import EditedView from './views/EditedView';
import CompletedView from './views/CompletedView';

const StyledBox = styled(Box)({
  maxWidth: 500,
  padding: 50,
  border: `2px solid black`,
  margin: `100px auto`
})


function App() {
  const status = useSelector(vehicleSelector.getStatus)
 
  return (
    <StyledBox>
      {status ? <CompletedView/> : <EditedView/> }
    </StyledBox>
  );
}

export default App;
