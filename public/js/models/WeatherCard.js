var WeatherCard = Backbone.Model.extend({
  defaults: {
    degrees: '',
    unit: '°C',
    description: '',
    time: '',
    date: '',
    day: '',
    city: ''
  },

  initialize: function() {}
});