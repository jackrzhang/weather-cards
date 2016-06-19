var AppView = Backbone.View.extend({
  el: 'div#app',

  initialize: function() {
    this.titleView = new TitleView();
    this.weatherView = new WeatherView({
      collection: this.collection
    });

    this.render();
  },

  render: function() {
    this.$el.append([
      this.titleView.$el,
      this.weatherView.$el
    ]);
    return this;
  }
});