import React,{useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import SelectCoins from "../Components/SelectCoins/SelectCoins";
import SelectDays from "../Components/SelectDays/SelectDays";
import { coinObject } from "../functions/convertObjects";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../Components/Coin/LineChart/LineChart";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../Components/Coin/PriceType/PriceType"
import Loader from "../Components/Loader";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import List from "../Components/TabComponent/ListView/List";


const ComparePage=()=>{
    const [crypto1,setCrypto1]=useState("bitcoin");//bitcoin
    const [crypto2,setCrypto2]=useState("ethereum");//ethereum
    const [crypto1Data,setCrypto1Data]=useState({});
    const [crypto2Data,setCrypto2Data]=useState({});
    const [isLoading ,setIsLoading]=useState(true);
    const [priceType,setPriceType]=useState('prices');
    const [days,setDays]=useState(30);
    const [chartData,setChartData]=useState({});


    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        coinObject(setCrypto1Data, data1);
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days);
        const prices2 = await getCoinPrices(crypto2, days);
        //console.log("Prices1:", prices1);
        //console.log("Prices2:", prices2);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);        
    }


    const handleCoinsChange=async (event,isCoin2)=>{
        setIsLoading(true)
        if(isCoin2){
            setCrypto2(event.target.value)
            const data=await getCoinData(event.target.value);
            coinObject(setCrypto2Data,data)
            const prices1=await getCoinPrices(crypto1,days,priceType);
            const prices2=await getCoinPrices(event.target.value,days.priceType)
            settingChartData(setChartData,prices1,prices2);
        }else{
            setCrypto1(event.target.value)
            const data=await getCoinData(event.target.value);
            coinObject(setCrypto1Data,data)
            const prices1=await getCoinPrices(event.target.value,days,priceType);
            const prices2=await getCoinPrices(crypto2,days.priceType)
            settingChartData(setChartData,prices1,prices2);
        }
        setIsLoading(false)            
    }


    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices1=await getCoinPrices(crypto1,days,newType);
        const prices2=await getCoinPrices(crypto2,days,newType);
        if(prices1.length>0 && prices2.length>0){
            settingChartData(setChartData,prices1,prices2);
            //console.log("BOTH PRICES FETCHED again");
            setIsLoading(false) 
           }
      };


    async function handleDaysChange(event){
        setIsLoading(true)
        setDays(event.target.value)
        const prices1=await getCoinPrices(crypto1,event.target.value,priceType);
        const prices2=await getCoinPrices(crypto2,event.target.value,priceType);
        if(prices1.length>0 && prices2.length>0){
            settingChartData(setChartData,prices1,prices2);
            //console.log("BOTH PRICES FETCHED again");
            setIsLoading(false) 
           }
    }
    return(
        <div>
             <NavBar/>
            {isLoading ? <Loader />:
            <>
            <div className="coins-days-flex">
                <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinsChange={handleCoinsChange}/>
                <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
            </div>
            <div className="coin-grey"><List coin={crypto1Data}/></div>
            <div className="coin-grey"><List coin={crypto2Data}/></div>
            <div className="coin-grey line-chart">
                    <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={false}/>
                    <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                    <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
            </div>
            <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc}/>
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc}/>
            </>
}
        </div>
    )
}

export default ComparePage