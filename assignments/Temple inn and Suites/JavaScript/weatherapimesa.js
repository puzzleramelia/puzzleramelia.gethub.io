et weatherRequest4 = new XMLHttpRequest();
let apiURLstring4 = 'https://api.openweathermap.org/data/2.5/weather?lat=33.4142&lon=-111.8332&units=imperial&APPID=73fbcd4886868e7e83d5c0eac0428480'';
weatherRequest4.open('Get', apiURLstring, true);
weatherRequest4.send();

weatherRequest4.onload =  function () {
    let weatherData = JSON.parse(weatherRequest4.responseText);
console.log(weatherData);
let desc = weatherData.weather.description;
let icon ="http://openweathermap.org/img/w/" +weatherData.weather[0].icon +".png";
document.getElementById('mesatemp').innerHTML = weatherData.main.temp;
}
