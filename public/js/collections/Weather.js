var Weather = Backbone.Collection.extend({
  model: WeatherCard,

  addWeatherCard: function(latitude, longitude) {
    console.log(typeof latitude, typeof longitude);
  }
});