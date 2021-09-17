function myFunction() {
    fetch('url')
    .then(function(weatherResponse) {
        return weatherResponse.json();
    })
    .then(function(weatherResponse) {
        console.log(weatherResponse);
    })
}