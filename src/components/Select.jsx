import React from 'react'
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material'

const Dropdown = ({ title, options, onChange, value }) => (
    <FormControl fullWidth>
        <InputLabel id={`label-${title}`}>{title}</InputLabel>
        <Select
            label={title}
            value={value}
            onChange={onChange}
        >
            {options.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
    </FormControl>
)

export default Dropdown