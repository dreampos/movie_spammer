
// $.ajax({
//     method: "GET",
//     url: "http://api.marketstack.com/v1/intraday?access_key=9d9fe11b8521cac73a6ea86730711a5b&symbols=AAPL",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (er) {
//         console.log(er);
//     }
// });


// function ajax_get(url, callback) {

//     var xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

//             try {
//                 var data = JSON.parse(xmlhttp.responseText);
//             } catch(err) {
//                 console.log(err.message + " in " + xmlhttp.responseText);
//                 return;
//             }
//             callback(data);
//         }
//     };
 
//     xmlhttp.open("GET", url, true);
//     xmlhttp.send();
// }

// ajax_get('http://api.marketstack.com/v1/intraday?access_key=9d9fe11b8521cac73a6ea86730711a5b&symbols=AAPL', function(data) {
    
//     console.log(data["data"][0])
// });

let params = {
    access_key: '9d9fe11b8521cac73a6ea86730711a5b',
    symbols: 'AAPL'
}

fetch(`http://api.marketstack.com/v1/intraday?access_key=
${params['access_key']}&symbols=${params['symbols']}`)
  .then(response => response.json())
  .then(result => console.log(result['data']))