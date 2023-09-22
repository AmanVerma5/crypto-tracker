import React, { useEffect, useState } from "react";
import { getCoins } from "../../functions/getCoins";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './SelectCoins.css'



const SelectCoins=()=>{
    const [crypto1,setCrypto1]=useState("bitcoin");
    const [crypto2,setCrypto2]=useState("ethereum");
    const [allCoins,setAllCoins]=useState([]);


    useEffect(()=>{
        getData();
    },[])
    const handleCoinsChange=(event)=>{
        setCrypto1(event.target.value)
    }

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
              onChange={handleCoinsChange}
            >
              {allCoins.map((coin)=><MenuItem value={coin.id}>{coin.name}</MenuItem>)}
            </Select>
        </div>
      );
}

export default SelectCoins;