
/**
*@file this file
*@author Conner Murphy
*@since 11.29.21
*/

var myUrl = "https://api.unsplash.com/search/photos?query=santacruz&client_id=PBP_ZfQWDoFXXLGNxx6yqlIlo7h0-VPCoftVNPzqSxE";

$("#my-button").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",

      "id": "yS-BNOR0wy0",
      "created_at": "2020-05-17T10:31:46-04:00",
      "updated_at": "2021-11-29T14:17:37-05:00",
      "promoted_at": null,
      "width": 5884,
      "height": 3923,
      "color": "#262626",
      "blur_hash": "LSEMLDxuM{M{~qM{RjRj-;M{ofWB",
      "description": null,
      "alt_description": "grayscale photo of snow covered mountain",
      "urls":
      ;
    }
  // If the request succeeds
  // data is passed back
  done(function(data) {
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
