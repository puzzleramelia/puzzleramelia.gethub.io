et weatherRequest2 = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?lat=34.5115&lon=-110.0797&units=imperial&APPID=73fbcd4886868e7e83d5c0eac0428480'';
weatherRequest2.open('Get', apiURLstring, true);
weatherRequest2.send();

weatherRequest2.onload =  function () {
    let weatherData = JSON.parse(weatherRequest2.responseText);
console.log(weatherData);
let desc = weatherData.weather.description;
let icon ="http://openweathermap.org/img/w/" +weatherData.weather[0].icon +".png";
document.getElementById('current-temp').innerHTML = weatherData.main.temp;
}
