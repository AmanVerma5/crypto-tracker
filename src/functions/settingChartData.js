import { convertDate } from "./convertDate"


export const settingChartData=(setChartData,prices)=>{
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
}