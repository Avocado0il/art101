/**
*@file this file
*@author Conner Murphy
*@since 11.8.21
*/

// Find the section you want to add the button to
// Create a button
// give it a label
// add to section
$("#challenge").append("<button id='c-button'>Button</button>");

$("#problem").append("<button id='p-button'>Button</button>");

$("#results").append("<button id='r-button'>Button</button>");

// using jQuery, add a click event to each button
$("#c-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  $(this).parent().toggleClass("special");
})
