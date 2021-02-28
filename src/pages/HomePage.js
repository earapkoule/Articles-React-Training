import React from 'react'
import RandomPost from "../components/RandomPost/RandomPost"
import Banner from "../components/Banners/Banners"


const HomePage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Banner/>
            <RandomPost></RandomPost>
        </div>)
}

export default HomePage