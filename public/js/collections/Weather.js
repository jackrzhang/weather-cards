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
          latitude: data.coord.lat,
          longitude: data.coord.long,
          degrees: data.main.temp.toFixed(2),
          icon: data.main.description,
          time: timeInfo.getHours().toString() + ':' + timeInfo.getMinutes().toString(),
          date: timeInfo.getMonth.toString() + '.' + timeInfo.getDate().toString(),
          day: timeInfo.getDay(),
          city: data.name
        })
      }.bind(this)
    )
  }
});