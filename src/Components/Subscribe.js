import React from 'react';
import "./style.css";

const Subscribe = () => {    
    return (
        <div className='sub' id='sub'>
            <input type="email" className="sub-input" place holder="Enter Your Email To Subscribe .. "/>
            <button className="sub-btn">Subscribe</button>
        </div>
    )
}

export default Subscribe
