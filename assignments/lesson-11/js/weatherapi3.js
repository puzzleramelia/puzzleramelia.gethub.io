let weatherRequest3 = new XMLHttpRequest();

let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&cnt={5}&APPID={1c256240d233d9ee96f640fc2b0ed703}'
weatherRequest3.open('Get', apiURLstring, true);

weatherRequest3.send();

weatherRequest3.onload =  function () {
    
    let weatherData = JSON.parse(weatherRequest3.responseText);
console.log(weatherData);
let desc = weatherData.weather.description;
let icon ="http://openweathermap.org/img/w/" +weatherData.weather[0].icon +".png";
document.getElementById('current-temp').innerHTML = weatherData.main.temp;

document.getElementById('current').innerHTML = weatherData.main.temp;
document.getElementById('daytwo').innerHTML = weatherData.main.temp;
document.getElementById('day3').innerHTML = weatherData.main.temp;
document.getElementById('day4').innerHTML = weatherData.main.temp;
document.getElementById('day5').innerHTML = weatherData.main.temp;

document.getElementById('cc-img').setAttribute('src', icon);
document.getElementById('cc-img').setAttribute('alt', desc);

document.getElementById('cc-img2').setAttribute('src', icon);
document.getElementById('cc-img2').setAttribute('alt', desc);

document.getElementById('cc-img3').setAttribute('src', icon);
document.getElementById('cc-img3').setAttribute('alt', desc);

document.getElementById('cc-img4').setAttribute('src', icon);
document.getElementById('cc-img4').setAttribute('alt', desc);

document.getElementById('cc-img5').setAttribute('src', icon);
document.getElementById('cc-img5').setAttribute('alt', desc);




}