import React from 'react'
import { useSelector } from 'react-redux'

const GetDetails = () => {
    const { company } = useSelector(state => state.GetDetails)
    return (
        <div>
            <p>{company.name}</p>
        </div>
    )
}

export default GetDetails