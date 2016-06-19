var WeatherView = Backbone.View.extend({

  class: 'weather-list',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    //this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.empty();

    this.weatherCardViews = this.collection.models.map(function(model) {
      return new WeatherCardView({
        model: model
      });
    });

    var $els = this.weatherCardViews.map(function(entry) {
      return entry.$el;
    });
    this.$el.append($els);

    return this;
  }
});