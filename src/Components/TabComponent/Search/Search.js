import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './search.css';

const Search=({search,onSearchChange})=>{
    

    return(
        <div className="search-bar">
            <SearchRoundedIcon className="search-logo"/>
            <input type="text" placeholder="Search" value={search} onChange={(e)=>onSearchChange(e)}/>
        </div>
    )
}

export default Search