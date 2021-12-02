/**
*@file this file
*@author Conner Murphy
*@since 12.1.21
*/

var myUrl = "https://xkcd.com/info.0.json";

$("#my-button").click(runAPI);

function printOutput(text){
  $("#output").html(text);
};

function runAPI() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType: "json",
})
// If the request succeeds
// data is passed back
.done(function(comicObj) {
    console.log("Success:", comicObj.title, comicObj,img, comicObj.alt);
    var imgTitle = comicObj.title;
    $("#title").html(imgTitle);
    var imgTag = "<img src=" + comicObj.img + ">";
    $("#title").html(imgTag);
    var imgAlt = comicObj.alt;
    $("#alt").html(imgAlt);
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
    $("#output").html("Error")
});
}
