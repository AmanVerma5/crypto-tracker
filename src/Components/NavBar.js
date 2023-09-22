import React from "react";
import TemporaryDrawer from './drawer.js';
import CustomButton from "./CustomButton.js";
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <nav className="navbar">
            <div>
                <h1>CryptoTracker
                    <span className="dot">.</span>
                </h1>
            </div>
            <div className="links">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/compare">
                        <p>Compare</p>
                    </Link>
                    <Link to="/dashboard">
                        <CustomButton text="Dashboard" outlined={false}/>
                    </Link>
                    
                </div>
                <div className="mobile-drawer">
                        <TemporaryDrawer />
                </div>
        </nav>
    )
}

export default NavBar