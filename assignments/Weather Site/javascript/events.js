
var myObj, myJSON, text, obj;

// Storing data:
myObj = { 
    "events" : [
      "March 29: Work Creek Revival",
      "July 8-12: Napoleon Dynamite Festival",
      "November 2-4: Freedom Days"
    ]
    };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("events").innerHTML = obj.events;

