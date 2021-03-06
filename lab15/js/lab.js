/**
*@file this file
*@author Conner Murphy
*@since 11.29.21
*/

var myUrl = "https://catfact.ninja/fact";

$("#my-button").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      //$("#output").html(JSON.stringify(data));
      $("#output").append("<p>" + data.fact + "<br>");
  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
      $("#output").html("Error")
	})
}
