var Weather = require('./../js/weather.js').Weather;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var humidity = currentWeatherObject.getWeather(city);
    $('.showWeather').text("The humidity in " + city + " is " + humidity + "%");
  });
});
