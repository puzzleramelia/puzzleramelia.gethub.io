window.onload =function windchil() {
        
        
    var temp = parseFloat(document.getElementById("temp").value);
    var windspeed = parseFloat(document.getElementById("windspeed").value);
    var ex = math.pow(windspeed, .16);
    var windchill;
    var windchill = 35.74 + 0.6215 * temp - 35.75 * ex + .4275 * temp * ex;
    document.getElementById("windchil").innerHTML = windchill;
    }
    
