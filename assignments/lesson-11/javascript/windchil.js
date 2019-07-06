
function windchil() {
    var temp = parseFloat(document.getElementById("currenttemp").value);
    var wind = parseFloat(document.getElementById("windspeed").value);


    var ex = Math.pow(wind, .16);
    var windchill = 35.74 + 0.6215 * temp - 35.75 * ex + .4275 * temp * ex;
    document.getElementById("windchil").innerHTML = windchill;
}
