import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ButtonComponent from '../components/Button'
import Input from '../components/Input'
import Dropdown from '../components/Select'
import data from '../data.json'
import * as vehicleActions from '../store/modules/actions'
import * as vehicleSelector from '../store/modules/selector'


const EditedView = () => {
    const [value, setValue] = useState('')
    const title = useSelector(vehicleSelector.getTitle)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <React.Fragment>
            {
                title !== "code" ? <Dropdown
                    title={data[title].title}
                    options={data[title].options}
                    value={value}
                    onChange={handleChange} /> : <Input onChange={handleChange} />
            }

            <ButtonComponent title={title !== "code" ? "NEXT" : "DONE"} isDisabled={!value} onClick={() => {
                dispatch(vehicleActions.vehicledetails({ title, value }))
                setValue('')
            }} />
        </React.Fragment>)
}

export default EditedView