import React from 'react';
import Player from './Card/player';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <h1>Listen To Our Latest Podcast Episode !</h1>
            <Player />
        </div>
    );
}

export default Home;
