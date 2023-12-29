import React, { useEffect, useState } from "react";
import { getCoins } from "../../functions/getCoins";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './SelectCoins.css'



const SelectCoins=({crypto1,crypto2,handleCoinsChange})=>{
    const [allCoins,setAllCoins]=useState([]);


    useEffect(()=>{
        getData();
    },[])

 
    async function getData(){
        const myCoins=await getCoins();
        setAllCoins(myCoins);
    }
    return (
        <div className='coins-flex'>
            <p>Crypto 1</p>
            <Select
              sx={{
                height:"2rem",
                color:"var(--white)",
                "& .MuiOutlinedInput-notchedOutline":{
                    borderColor:"var(--white)",
                },
                "& .MuiSvgIcon-root":{
                    color:"var(--white)",
                },
                "&:hover":{
                    "& fieldset":{
                        borderColor:"3a80e9",
                    }
                }
              }}
              value={crypto1}
              label="Crypto 1"
              onChange={(event)=>handleCoinsChange(event,false)}
            >
              {allCoins && allCoins.length>0 && allCoins.filter((item)=>item.id!=crypto2).map((coin,i)=><MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
            </Select>
            <p>Crypto 2</p>
            <Select
              sx={{
                height:"2rem",
                color:"var(--white)",
                "& .MuiOutlinedInput-notchedOutline":{
                    borderColor:"var(--white)",
                },
                "& .MuiSvgIcon-root":{
                    color:"var(--white)",
                },
                "&:hover":{
                    "& fieldset":{
                        borderColor:"3a80e9",
                    }
                }
              }}
              value={crypto2}
              label="Crypto 2"
              onChange={(event)=>handleCoinsChange(event,true)}
            >
              {allCoins && allCoins.length>0 && allCoins.filter((item)=>item.id!=crypto1).map((coin,i)=><MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
            </Select>
        </div>
      );
}

export default SelectCoins; 