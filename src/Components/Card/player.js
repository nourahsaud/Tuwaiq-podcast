import React, { useRef, useState } from "react";
import cardData from "./cardData";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import { BiPauseCircle } from "react-icons/bi";
import './style.css';
// import abdo from "../Podcast/Abdo.mp3";
// import Abajora from "../Podcast/Abajora.mp3";
// import AhmedAlshugairi from "../Podcast/AhmedAlshugairi.mp3";
// import DrAlsubaie from "../Podcast/Finjan-DrAlsubaie.mp3";
// import Salah from "../Podcast/Finjan-Salah.mp3";

const Player = () => {
    const trackContainer = useRef();
    // podcast info 
    const tracks = cardData.map(data => data);
    // tracking index 
    let [trackIndex, setTrackIndex] = useState(3);
    let [temp, setTemp] = useState(trackIndex);
    // current track
    const [track, setTrack] = useState(tracks[trackIndex]);
    let title = track.title;
    let cover = track.img;
    //let pod = [DrAlsubaie, AhmedAlshugairi, Abajora, abdo, Salah];
    const url = track.pod;
    //const [audio, setAudio] = useState( new Audio(url));
    let audioRef = useRef(new Audio(url));


    // Play track
    const [playing, setPlaying] = useState(false);
    const playTrack = () => {
        trackContainer.current.classList.add('play');
        setPlaying(true);
        audioRef.current.play();
    }
    // Pause track
    const pauseTrack = () => {
        trackContainer.current.classList.remove('play');
        setPlaying(false);
        audioRef.current.pause();
    }
    // Controllers 
    const Controllers = () => {
        console.log(trackIndex);
        console.log(temp);
        if (trackIndex > temp){
            setTemp(++temp);
            if(trackIndex > tracks.length -1){
                setTrackIndex(0);
                setTemp(0);
                console.log(trackIndex);
            }
        } else {
            if (trackIndex < 0){
                setTrackIndex(tracks.length - 1);
                setTemp(tracks.length - 1);
                console.log(trackIndex);
            }
            setTemp(trackIndex);
        }
        console.log(trackIndex);
        console.log(temp);

        setTrack(tracks[temp]);
        console.log(track.pod);
        if (audioRef.current){
            audioRef.current.pause();
            console.log(url);
            console.log(audioRef.current);
            audioRef.current = new Audio(track.pod);
            audioRef.current.load();
            console.log(url);
            console.log(audioRef.current);
            playTrack();
        }
        
    }


    return (
        <div className="track-container" ref={trackContainer}>
            <div className="track-info">
                <h4>{title}</h4>
                <div className='progress-container'>
                    <div className="progress"></div>
                </div>
            </div>
                <div className="img-container">
                    <img src={cover} alt=""/>
                </div>
                <audio>
                    <source src={url} alt=""/>
                </audio>
                <div className="nav">
                    <button onClick={()=>{setTrackIndex(--trackIndex); Controllers();}} className="action-btn">
                        <BiSkipPrevious />
                    </button>
                    <button onClick={playing? pauseTrack: playTrack} className="action-btn big">
                        {playing? <BiPauseCircle /> : <BiPlayCircle />}
                    </button>
                    <button onClick={()=>{setTrackIndex(++trackIndex); Controllers();}} className="action-btn">
                        <BiSkipNext />
                    </button>
                </div>
        </div>
    )
}

export default Player;