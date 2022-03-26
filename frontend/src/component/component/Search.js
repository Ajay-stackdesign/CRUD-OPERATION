import React, { Fragment, useState } from 'react'
import Metadata from '../home/Metadata'

import { useHistory } from 'react-router-dom'
import "./Search.scss"


const Search = () => {

    const [keyword, setKeyword] = useState("")
    const history = useHistory()

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/getall/${keyword}`)
        } else {
            history.push("/getall")
        }
    }
    return (
        <Fragment>
            <Metadata title="Search Company" />
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <input className='keyword' type="text"
                    required
                    placeholder="Company Name...."
                    onChange={(e) => setKeyword(e.target.value)} />
                <input className='sub' type="submit" value="Search" />
            </form>
        </Fragment>
    )
}

export default Search