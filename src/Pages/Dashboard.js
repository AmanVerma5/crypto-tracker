import React, { useEffect, useState } from "react";
import NavBar from"../Components/NavBar";
import TabComponent from "../Components/TabComponent/TabComponent";
import Search from "../Components/TabComponent/Search/Search";
import PaginationComponent from "../Components/TabComponent/Pagination/Pagination";
import Loader from "../Components/Loader";
import BackToTop from "../Components/BackToTop/BackToTop";
import { getCoins } from "../functions/getCoins";

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
        getData()
    },[])

    const getData=async ()=>{
        const myCoins= await getCoins();
        if(myCoins){
            setCoins(myCoins)
            setPaginatedCoins(myCoins.slice(0,10));
            setIsLoading(false)
        }
    }

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