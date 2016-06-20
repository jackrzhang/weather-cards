var WeatherCard = Backbone.Model.extend({
  defaults: {
    latitude: '',
    longitude: '',
    degrees: '',
    unit: '°F',
    icon: '',
    time: '',
    date: '',
    day: '',
    city: ''
  }
});