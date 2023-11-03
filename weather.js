const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.post('/getweather', async(req,res)=> {
    const cities = req.body.cities;
    const weatherdata = {};
    for (const city of cities){
        try{
            const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=164d8947c5bae61313dfe917b929f527");
            weatherdata[city] = res.data.main.temp - '273' ;
        }catch(error){
            console.log(error)
            weatherdata[city] = 'N/A';
        }
    }
    res.json(weatherdata);
});
app.listen(8000)

