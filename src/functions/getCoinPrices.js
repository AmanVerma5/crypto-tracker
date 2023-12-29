import axios from "axios";


export const getCoinPrices=(id,days,priceType)=>{
    const prices=axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&x_cg_demo_api_key=CG-fFtMx9WeLBuVRUi9UWXaXMsc`)
    .then((response) => {
      if (priceType === "market_caps") {
        return response.data.market_caps;
      } else if (priceType === "total_volumes") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    })
    .catch(error => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
        }
    });

     if(prices){
      return prices
     }else{
      return
     }
}
