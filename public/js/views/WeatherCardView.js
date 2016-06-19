var TitleView = Backbone.View.extend({

  class: 'weather-card',
  template: _.template('Weather Card'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});