let weatherRequest2 = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=1c256240d233d9ee96f640fc2b0ed703';
weatherRequest2.open('Get', apiURLstring, true);
weatherRequest2.send();

weatherRequest2.onload =  function () {
    let weatherData = JSON.parse(weatherRequest2.responseText);
console.log(weatherData);
let desc = weatherData.weather.description;
let icon ="http://openweathermap.org/img/w/" +weatherData.weather[0].icon +".png";
document.getElementById('current-temp').innerHTML = weatherData.main.temp;

document.getElementById('current').innerHTML = weatherData.main.temp;
document.getElementById('cc-img').setAttribute('src', icon);
document.getElementById('cc-img').setAttribute('alt', desc);

}
