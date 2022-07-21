import React, { useState, useRef } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { BiPauseCircle } from "react-icons/bi";
import "./style.css";

export default function Cards(props) {

    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(new Audio(props.cards.pod));
    // Play track
    const playTrack = () => {
        setPlaying(!playing);
        audioRef.current.play();
    }
    // Pause track
    const pauseTrack = () => {
        setPlaying(!playing);
        audioRef.current.pause();
    }


    return (
        <div className="card">
            <div className="card__body">
                <img src={props.cards.img} alt="" className="card__img"/>
                <h2 className="card__title">{props.cards.title}</h2>
                <p className="card__txt">{props.cards.desc}</p>
            </div>
         
                <button onClick={playing? pauseTrack: playTrack} className="card__btn">
                    {playing? <BiPauseCircle /> : <BiPlayCircle />}
                </button>
        </div>
    )
}