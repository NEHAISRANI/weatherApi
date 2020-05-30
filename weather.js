const raw_input=require('readline-sync').question;
const cityInput=raw_input("enter the city name...:");
const fs=require('fs')
var bodyParser=require('body-parser');

function weatherApi(data){
    const axios=require('axios');
    return response=axios.get(data);
}
var url="https://api.openweathermap.org/data/2.5/weather?q="+"Mumbai"+"&appid=564b520ffae9528ec61ea1c1811d21e7"
response=weatherApi(url)

const getdata=(async(apiResponse)=>
{
    let data1=await(apiResponse)
    

})
getdata(response) 


