var axios = require('axios');

const BASE_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?appid=e7dbd1b8f0d606fff6b21ec8e614f2bc&units=metric";

function getTemperature(location){

    var encodedLoc = encodeURIComponent(location);
    var reqString = `${BASE_WEATHER_URL}&q=${encodedLoc}`;
    return axios.get(reqString).then(
        function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        },
        function(res){
            throw new Error(res);
        }
    );

};

module.exports = {getTemperature: getTemperature};