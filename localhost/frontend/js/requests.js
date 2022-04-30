

// fetch("https://google.com").then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log(data);
//   }).catch(function() {
//     console.log("Booo");
//   });


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


httpGet("https://stackoverflow.com/questions/247483/http-get-request-in-javascript");