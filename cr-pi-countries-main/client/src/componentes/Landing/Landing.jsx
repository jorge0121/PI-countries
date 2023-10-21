import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'
import BG_video from './Media/VideoLanding.mp4'
import Home from "../Home/Home";

export default function Landing(){
    return(
        <Fragment>
            <div className={styles.container}>
               <h1>Welcome APP Countries</h1>
               <Link to="/countries">
               <button className={styles.hover}>Go</button>
               
               </Link>
               <video autoPlay muted loop className={styles.bg_video}>
                    <source src={BG_video} type="video/mp4"/>
                </video>
            </div>
        </Fragment>
    )
}