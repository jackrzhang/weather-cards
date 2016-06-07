var WeatherCard = Backbone.Model.extend({
  defaults: {
    latitude: '',
    longitude: '',
    degrees: '',
    unit: '°F',
    time: '',
    date: '',
    day: '',
    city: ''
  }
});