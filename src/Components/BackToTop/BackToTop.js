import React from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './style.css';

const BackToTop=()=>{
    let mybutton = document.getElementsByClassName("back-to-top")[0];

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <div className="back-to-top" onClick={()=>topFunction()}>
            <ArrowUpwardRoundedIcon />
        </div>
    )
}

export default BackToTop;