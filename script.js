var requestUrl = "http://www.omdbapi.com/?i=tt1285016&apikey=4b38cacc";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then (function(data) {
    console.log(data);
})