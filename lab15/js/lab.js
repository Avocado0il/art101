/**
*@file this file
*@author Conner Murphy
*@since 11.29.21
*/

document.getElementById("mybutton").addEventListener("click", function() {
document.getElementById("demo").innerHTML = "Hello World";
});

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.chucknorris.io/jokes/random",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
              "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
              "id" : "rA3RdsMISqOvd5Vmsxpfxw",
              "url" : "",
              "value" : "Chuck Norris built the hostpital he was born in."
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
