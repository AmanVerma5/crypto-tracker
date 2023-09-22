import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Loader from "../Components/Loader";
import { coinObject } from "../functions/convertObjects";
import List from "../Components/TabComponent/ListView/List";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../Components/Coin/LineChart/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../Components/SelectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../Components/Coin/PriceType/PriceType";

const CoinPage=()=>{
    const {id}=useParams();
    const [isLoading,setIsLoading]=useState(true);
    const [coinData, setCoinData]=useState([])
    const [days,setDays]=useState(30)
    const [chartData,setChartData]=useState();
    const [priceType, setPriceType] = useState('prices');

    
    

    useEffect(()=>{
        if(id){
           getData()
        }
    },[id])

    async function getData(){

        const data=await getCoinData(id);
        if(data){
            coinObject(setCoinData,data);
            const prices=await getCoinPrices(id,days,priceType);
            if(prices.length>0){
                setChartData({
                    labels: prices.map((price)=>convertDate(price[0])),
                    datasets: [{
                      data: prices.map((price)=>price[1]),
                      fill: false,
                      borderColor: '#3a80e9',
                      borderWidth:2,
                      pointRadious:0,
                      backgroundColor:"rgba(58,128,233,0.1)"
                    }]
                  })
                setIsLoading(false);

            }
        }
    }

    const handleDaysChange =async (event) => {
        setIsLoading(true)
        setDays(event.target.value);
        const prices=await getCoinPrices(id,event.target.value,priceType);
        if(prices.length>0){
            settingChartData(setChartData,prices)
            setIsLoading(false) 
        }
      };

      const handlePriceTypeChange = async (event, newType) => {
        setPriceType(newType);
        const prices=await getCoinPrices(id,days ,newType);
        if(prices.length>0){
            settingChartData(setChartData,prices)
            setIsLoading(false) 
        }
      };

      

    return(
        <div>
            <NavBar/>
            {isLoading ? <Loader />:
            <>
                <div className="coin-grey"><List coin={coinData}/></div>
                <div className="coin-grey line-chart">
                    <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                    <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                    <LineChart chartData={chartData} priceType={priceType}/>
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc}/>
            </>
             }
        </div>
    )
}

export default CoinPage;