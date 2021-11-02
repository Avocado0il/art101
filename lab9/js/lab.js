/**
*@file this file
*@author Conner Murphy
*@since 11.1.21
*/

//Assign output to a variable
var outputEl = document.getElementById("output");

// create a new element and assign it to a variable
var new1El = document.createElement('p');
new1El.innerHTML= "testing..?";

var new2El = document.createElement('p');
new2El.innerHTML= "now this has gotta work!";

//append outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
