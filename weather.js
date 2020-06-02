const raw_input=require('readline-sync').question;
const cityInput=raw_input("enter the city name....:")
var bodyParser=require('body-parser');

function apiData(weatherApi){
    const axios=require('axios');
    return response=axios.get(weatherApi);
}   
var url="https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&appid=564b520ffae9528ec61ea1c1811d21e7"
response=apiData(url);

function getCityData(data){
    response.then((data)=>{
        var insideData=data["data"]
        var latAndLon=insideData["coord"];
        var lat=latAndLon["lat"]
        var lon=latAndLon["lon"]
        var url1="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=564b520ffae9528ec61ea1c1811d21e7"
        var latAndLonData=apiData(url1) 
        return(latAndLonData)
    }) 
}   
getCityData(response)
