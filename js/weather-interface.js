var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
{
      $('.showWeather').text("The city you have chosen is " + city + " is " + response.main.humidity + "%" + " & " + response.main.temp + " & " + response.main.sea_level);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);

   });
  });
});
