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
.done(function(data) {
    console.log("Success:", data);
    var comicObj = "https://xkcd.com/info.0.json";
    var comicImg = data.img;
    var imgTag = "<img src=" + comicImg + ">";
    $("#output").html(imgTag)
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
    $("#output").html("Error")
});
}
