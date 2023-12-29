import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import  './PriceType.css'

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  

  return (
    <div className='toggle-prices'>
        <ToggleButtonGroup
          value={priceType}
          exclusive
          onChange={handlePriceTypeChange}
          sx={{
            "& .Mui-selected": {
            color: "var(--blue) !important",
            backgroundColor:"rgba(25, 118, 210, 0.08)",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            
            "& .MuiToggleButtonGroup-grouped": { border: "1px solid !important", borderColor: "unset", color: "var(--blue)",
            },
            "& .MuiToggleButton-standard": { color: "var(--blue)",}
        }}
        >
          <ToggleButton value="prices" className='toggle-btn'>
            Price
          </ToggleButton>
          <ToggleButton value="market_caps"  className='toggle-btn'>
            Mkt Cap
          </ToggleButton>
          <ToggleButton value="total_volumes"  className='toggle-btn'>
            Volume
          </ToggleButton>
        </ToggleButtonGroup>
    </div>
  );
}