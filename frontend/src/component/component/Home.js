import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"

const Home = () => {
    return (
        <div className='home'>
            <Link to="/all"><button>CLick to See The List</button></Link>
        </div>
    )
}

export default Home
