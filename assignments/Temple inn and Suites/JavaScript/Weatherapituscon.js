et weatherRequest3 = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?lat=32.2219&lon=-110.9263&units=imperial&APPID=73fbcd4886868e7e83d5c0eac0428480'';
weatherRequest3.open('Get', apiURLstring, true);
weatherRequest3.send();

weatherRequest3.onload =  function () {
    let weatherData = JSON.parse(weatherRequest3.responseText);
console.log(weatherData);
let desc = weatherData.weather.description;
let icon ="http://openweathermap.org/img/w/" +weatherData.weather[0].icon +".png";
document.getElementById('currenttemp1').innerHTML = weatherData.main.temp;
}
