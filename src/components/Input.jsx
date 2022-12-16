import React from 'react';
import { TextField } from '@mui/material'

const Input = ({ value, onChange }) => <TextField fullWidth value={value} onChange={onChange} label="CODE"/>

export default Input