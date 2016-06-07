var TitleView = Backbone.View.extend({
  el: 'div.title',

  template: _.template('\
    <h1>Weather Cards</h1>\
  '),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});