import React, { useState } from "react";
import './CoinInfo.css';

const CoinInfo=({heading,desc})=>{
    const shortDesc=desc.slice(0,400) +"<span style='color:var(--grey)'>  Read More...</span>";
    const longDesc=desc;
    const[flag,setFlag]=useState(false)
    return(
        <div className="coin-grey">
            <h2 className="coin-heading">{heading}</h2>
            {
                desc.length>400?(
                <p onClick={()=>setFlag(!flag)} className="coin-desc" dangerouslySetInnerHTML={{__html: !flag ? shortDesc: longDesc}} />):
                (<p onClick={()=>setFlag(!flag)} className="coin-desc" dangerouslySetInnerHTML={{__html: longDesc}} />)
            }
        </div>
    )
}

export default CoinInfo;