let weatherRequest3 = new XMLHttpRequest();

let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1c256240d233d9ee96f640fc2b0ed703'
weatherRequest3.open('Get', apiURLstring3, true);

weatherRequest3.send();

weatherRequest3.onload =  function () {
    
    let weatherData3 = JSON.parse(weatherRequest3.responseText);
console.log(weatherData3);
let desc = weatherData3.weather[0].description;
let icon ="http://openweathermap.org/img/w/" +weatherData3.weather[0].icon +".png";
document.getElementById('current-temp').innerHTML = weatherData3.main.temp;

document.getElementById('current').innerHTML = weatherData3.main.temp;
document.getElementById('daytwo').innerHTML = weatherData3.main.temp;
document.getElementById('day3').innerHTML = weatherData3.main.temp;
document.getElementById('day4').innerHTML = weatherData3.main.temp;
document.getElementById('day5').innerHTML = weatherData3.main.temp;

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