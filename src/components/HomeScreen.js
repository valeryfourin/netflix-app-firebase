import React from 'react'
import '../styles/HomeScreen.css'
import Banner from './Banner';
import NavBar from './NavBar';

export default function Homescreen() {
    return (
        <div className="home-screen">
            <NavBar/>
            <Banner/>
        </div>
    )
}
