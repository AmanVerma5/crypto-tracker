import React from "react";
import './Grid.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from "react-router-dom";

const Grid=({coin})=>{
    return(
         <div className={`grid-container ${coin.price_change_percentage_24h>0 && "grid-container-green"}`}>
            <Link to={`/coin/${coin.id}`}>
                <div className="coin">
                    <div className="coin-image"><img src={coin.image} alt='coin-img' /></div>
                    <div className="coin-title">
                        <p>{coin.symbol.toUpperCase()}-USD</p>
                        <p className="coin-id">{coin.id}</p>
                    </div>
                </div>
                <div className="coin-change">
                    {
                        coin.price_change_percentage_24h>0 ?(
                            <>
                                <div className="percentage-change positive">+{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className="round-up"><TrendingUpRoundedIcon/></div>
                            </>
                        ):(
                            <>
                                <div className="percentage-change negative">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className="round-down"><TrendingDownRoundedIcon/></div>
                            </>
                        )
                    }
                </div>
                <h4 style={{color:coin.price_change_percentage_24h>0?"var(--green)":"var(--red)"}}>${coin.current_price.toLocaleString()}</h4>
                <p className="total-volume"><span>Total Volume:</span> <span className="volume">${coin.total_volume.toLocaleString()}</span></p>
                <p className="total-volume"><span>Market Cap:</span> <span className="volume">${coin.market_cap.toLocaleString()}</span></p>
            </Link>
        </div>
        
    )
}

export default Grid;