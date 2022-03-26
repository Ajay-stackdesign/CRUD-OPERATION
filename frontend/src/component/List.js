import React from 'react'
import Search from "./component/Search.js"
// import Detail from "./component/Detail.js"

import "./List.css"
import AddList from "./component/AddList.js"
import DataGridMUI from './component/DataGridMUI.js'

const List = () => {
    return (
        <div className='list'>
            <div className='search'>
                <Search />
            </div>
            <div className='add'>
                <AddList />
            </div>
            <div className='detail'>
                <DataGridMUI />
            </div>

        </div>
    )
}

export default List