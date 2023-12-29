import { convertDate } from "./convertDate"


export const settingChartData=(setChartData,prices1,prices2)=>{
  if(prices2){
    setChartData({
      labels: prices1.map((price)=>convertDate(price[0])),
      datasets: [
      {
        data: prices1.map((price)=>price[1]),
        fill: false,
        borderColor: '#3a80e9',
        borderWidth:2,
        pointRadious:0,
        yAxisID:"crypto1"
      },
      {
        data: prices2.map((price)=>price[1]),
        fill: false,
        borderColor: '#61c96f',
        borderWidth:2,
        pointRadious:0,
        yAxisID:"crypto2"
      }
    ]
    })
  }else{
    setChartData({
      labels: prices1.map((price)=>convertDate(price[0])),
      datasets: [{
        data: prices1.map((price)=>price[1]),
        fill: false,
        borderColor: '#3a80e9',
        borderWidth:2,
        pointRadious:0,
        backgroundColor:"rgba(58,128,233,0.1)",
        yAxisID:"crypto1"
      }]
    })
  }
}