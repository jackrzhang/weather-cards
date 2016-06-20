var Weather = Backbone.Collection.extend({
  model: WeatherCard,

  addWeatherCard: function(latitude, longitude) {
    latitude = Number(latitude);
    longitude = Number(longitude);

    $.get(
      'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude +'&APPID=25bea2da2b435f9371fdf055cf71d548',
      function(data) {
        console.log(data);
      }.bind(this)
    )
  }
});