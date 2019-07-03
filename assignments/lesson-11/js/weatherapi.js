let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=1c256240d233d9ee96f640fc2b0ed703';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);
document.getElementById('current-temp').innerHTML = weatherData.main.temp;
document.getElementById('currently').innerHTML = weatherData.weather[0].description;
document.getElementById('humidity').innerHTML = weatherData.main.humidity;
document.getElementById('windspeed').innerHTML = weatherData.wind.speed;
var windchil = function windchil(current-temp, windspeed);

}
function windchil() {
    var temp = parseFloat(document.getElementById("current-temp").value);
    var windspeed = parseFloat(document.getElementById("windspeed").value);
    var ex = Math.pow(windspeed, .16);
    var windchill = 35.74 + 0.6215 * temp - 35.75 * ex + .4275 * temp * ex;
    document.getElementById("windchil").innerHTML = windchill;
}

