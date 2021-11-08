/**
*@file this file
*@author Conner Murphy
*@since 11.3.21
*/

// Attach an event listener to your button that gets the value of your input field
document.getElementById("mybutton").addEventListener("click", function() {
document.getElementById("demo").innerHTML = "Hello World";
// Prompt the user to enter their name
var name = prompt ("Please enter your name:");
// Use this input to change the text from 'Hello, World!' to "Hello' + the user's name
var headingEl = document.getElementById ("myButton");
    headingEl. innerHTML = "Hello, " + name;
});

// sortUserNAme - a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName=", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort The array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// Output
document.writeln("Hello, ",
document.getElementById(), "</br>");
