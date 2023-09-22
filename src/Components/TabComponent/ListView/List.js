import React from "react";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import './List.css';
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";

const List=({coin})=>{
    return(
        <Link to={`/coin/${coin.id}`}>
            <tr className="list-row">
                <Tooltip title='Logo'>
                    <td className="td-image">
                        <img src={coin.image} alt='coin-img'/>
                    </td>
                </Tooltip>
                <td>
                    <div className="coin-title">
                        <Tooltip title='Symbol'>
                            <p>{coin.symbol.toUpperCase()}-USD</p>
                        </Tooltip>
                        <Tooltip title='Name'>
                            <p className="coin-id">{coin.id}</p>
                        </Tooltip>
                    </div>
                </td>
                <td>
                    <div className="coin-change coin-list">
                    {
                    coin.price_change_percentage_24h>0 ?(
                        <>
                            <div className="percentage-change positive">+{coin.price_change_percentage_24h.toFixed(2)}%</div>
                            <div className="round-up td-icon"><TrendingUpRoundedIcon/></div>
                        </>
                    ):(
                         <>
                            <div className="percentage-change negative">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                            <div className="round-down td-icon"><TrendingDownRoundedIcon/></div>
                        </>
                    )
                    }
                    </div>
                </td>
                <Tooltip title='Current Price' placement="bottom-start">
                    <td>
                        <h4 style={{color:coin.price_change_percentage_24h>0?"var(--green)":"var(--red)"}}>${coin.current_price.toLocaleString()}</h4>
                    </td>
                </Tooltip>
                <Tooltip title='Total Volume' placement="bottom-start">
                    <td className="desktop">
                        <p className="total-volume data"> ${coin.total_volume.toLocaleString()}</p>
                    </td>
                </Tooltip>
                <Tooltip title='Total Volume' placement="bottom-start">
                    <td className="mobile mobile-volume">
                        <p className="total-volume data"> ${convertNumbers(coin.total_volume)}</p>
                    </td>
                </Tooltip>
                <Tooltip title='Market Cap' placement="bottom-start">
                    <td className="desktop">
                        <p className="total-volume data ">${coin.market_cap.toLocaleString()}</p>
                    </td>
                </Tooltip>
                <Tooltip title='Market Cap' placement="bottom-start">
                    <td className="mobile">
                        <p className="total-volume data ">${convertNumbers(coin.market_cap)}</p>
                    </td>
                </Tooltip>
            </tr>
        </Link>
    )
}


export default List;