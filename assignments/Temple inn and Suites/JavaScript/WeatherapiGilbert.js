let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=47.4889&lon=-92.4653&units=imperial&APPID=73fbcd4886868e7e83d5c0eac0428480';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);
let desc = weatherData.weather.description;
let icon ="http://openweathermap.org/img/w/" +weatherData.weather[0].icon +".png";
document.getElementById('currennttemp').innerHTML = weatherData.main.temp;

document.getElementById('current').innerHTML = weatherData.main.temp;
document.getElementById('cc-img').setAttribute('src', icon);
document.getElementById('cc-img').setAttribute('alt', desc);

}