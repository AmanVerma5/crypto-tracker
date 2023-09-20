import React, { useEffect, useState } from "react";
import NavBar from"../Components/NavBar";
import TabComponent from "../Components/TabComponent/TabComponent";
import axios from "axios";
import Search from "../Components/TabComponent/Search/Search";
import PaginationComponent from "../Components/TabComponent/Pagination/Pagination";
import Loader from "../Components/Loader";
import BackToTop from "../Components/BackToTop/BackToTop";

const Dashboard=()=>{
    const [coins,setCoins]=useState([]);
    const [search,setSearch]=useState('');
    const [page, setPage] = useState(1);
    const [paginatedCoins,setPaginatedCoins]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex=(value-1)*10;
      setPaginatedCoins(coins.slice(previousIndex,previousIndex+10));
    };

    const onSearchChange=(e)=>{
        setSearch(e.target.value);
    }

    let filteredCoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())||item.symbol.toLowerCase().includes(search.toLowerCase()));

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        .then((response)=>{
            setCoins(response.data)
            console.log(coins)
            setPaginatedCoins(response.data.slice(0,10));
            setCoins(isLoading(false))
        })
        .catch((error)=>setIsLoading(false))
    },[])

    setTimeout(()=>{
        console.log(coins)
    },5000)
    return(
        <>
        {isLoading ? (<Loader/>):(
            <div>
                <NavBar/>
                <Search search={search} onSearchChange={onSearchChange} />
                <TabComponent coins={search?filteredCoins:paginatedCoins}/>
                {
                !search &&   
                <PaginationComponent page={page} handlePageChange={handlePageChange}/>
                }
                <BackToTop/>
            </div>)
        }
        </>
    )
}

export default Dashboard;