/**
*
*@link URL
*@file this file defines the myclass class
*@author Akilah Bussey & Conner Murphy
*@since 10.20.21
*/

// define variables
myTransport = [ "Ford Taurus", "Walking", "Bus", "Carpooling", "Driving"
  ];

// define variables
myMainRide = {
  make : "Ford",
  model : "Taurus",
  color : "Blue",
  year : 1995,
  age : function() {
      return 2021 - age;
  }
}

// output
document.writeln ("Kinds of Transportation I Use: ", myTransport, "</br>");
document.writeln ("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
