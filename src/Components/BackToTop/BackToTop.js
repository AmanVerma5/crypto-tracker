import React, { useEffect, useState } from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './style.css';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className={`back-to-top ${showButton ? 'visible' : ''}`} onClick={topFunction}>
            <ArrowUpwardRoundedIcon />
        </div>
    )
}

export default BackToTop;