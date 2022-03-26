import React from 'react'
import { Link } from 'react-router-dom'
import "./AddList.scss"

const AddList = () => {
    return (
        <div className='addList'>
            <Link to="/company" className='link'>
                Add Company
            </Link>
        </div>
    )
}

export default AddList