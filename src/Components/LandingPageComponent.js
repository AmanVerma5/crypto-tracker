import React from "react";
import './LandingPageComponent.css';
import CustomButton from "./CustomButton";
import iphone from "../images/iphone.png";
import gradient from "../images/gradient.png";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

const LandingPageComponent=()=>{
    return(
        <div className="main-section">
           <div className="left">
            <motion.h1 
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
            className="crypto-heading">
                Track Crypto
            </motion.h1>
            <motion.h1 
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
            className="realtime-heading">
                Real Time.
            </motion.h1>
            <p className="info">Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <div className="buttons">
                <Link to='/dashboard'>
                    <CustomButton text="Dashboard" outlined={false}/>
                </Link>
                <CustomButton text="Share" outlined={true}/>
            </div>
           </div>
           <div className="right">
            <motion.img initial={{y:-10}} animate={{y:10}} transition={{type:"smooth",repeatType:"mirror",duration:2,repeat:Infinity}}
            src={iphone} className="phone_img" alt=''/>
            <img src={gradient} className="gradient_img" alt=''/>
           </div>
        </div>
    )
}

export default LandingPageComponent;