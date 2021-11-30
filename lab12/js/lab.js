/**
*@file this file
*@author Conner Murphy
*@since 11.15.21
*/


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;

  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

var myButton = $("#button");

myButton.click(function(){
  var name = $("#input").val();
  var house = sortingHat(name + length);
  var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  $("p#output").html(newText);
})
