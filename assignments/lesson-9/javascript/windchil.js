
function windchil() {
    var temp = parseFloat(document.getElementById("current-temp").value);
    var windspeed = parseFloat(document.getElementById("windspeed").value);
    var ex = Math.pow(windspeed, .16);
    var windchill = 35.74 + 0.6215 * temp - 35.75 * ex + .4275 * temp * ex;
    document.getElementById("windchil").innerHTML = windchill;
}
