var Weather = Backbone.Collection.extend({
  model: WeatherCard,

  addWeatherCard: function(latitude, longitude) {
    latitude = Number(latitude);
    longitude = Number(longitude);
    var timeInfo = new Date();

    $.get(
      'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude +'&APPID=25bea2da2b435f9371fdf055cf71d548',
      function(data) {
        console.log(data);
        this.add({
          degrees: ((data.main.temp - 32) * 5 / 9).toFixed(2),
          description: data.weather[0].description,
          time: timeInfo.getHours().toString() + ':' + timeInfo.getMinutes().toString(),
          date: timeInfo.getMonth().toString() + '.' + timeInfo.getDate().toString(),
          day: timeInfo.getDay(),
          city: data.name
        })
      }.bind(this)
    )
  }
});