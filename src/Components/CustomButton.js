import React from "react";
import './CustomButton.css';
const CustomButton=({text,outlined})=>{
    return(
        <div className={outlined ? "outlined-btn": "btn"}>
            {text}
        </div>
    )
}

export default CustomButton;