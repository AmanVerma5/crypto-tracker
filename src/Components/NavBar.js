import React from "react";
import TemporaryDrawer from './drawer.js';
import CustomButton from "./CustomButton.js";
const NavBar=()=>{
    return(
        <nav className="navbar">
            <div>
                <h1>CryptoTracker
                    <span className="dot">.</span>
                </h1>
            </div>
            <div className="links">
                    <a href="/">
                        <p>Home</p>
                    </a>
                    <a href="/">
                        <p>Compare</p>
                    </a>
                    <a href="/">
                        <CustomButton text="Dashboard" outlined={false}/>
                    </a>
                    
                </div>
                <div className="mobile-drawer">
                        <TemporaryDrawer />
                    </div>
        </nav>
    )
}

export default NavBar