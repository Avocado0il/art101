/**
*@file this file defines the myclass class
*@author Akilah Bussey & Conner Murphy
*@since 10.20.21
*/

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
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
