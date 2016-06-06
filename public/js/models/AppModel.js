var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('WeatherCollection', new WeatherCollection());
  }
});

// Using initialize vs defaults: 
// http://stackoverflow.com/questions/8434611/when-to-use-defaults-vs-the-initialize-constructor-on-a-model
