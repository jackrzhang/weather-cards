var AppView = Backbone.View.extend({
  el: 'div#app',

  initialize: function() {
    this.title = new TitleView();
    this.render();
  },

  render: function() {
    this.$el.append([
      this.title.$el
    ]);
    return this;
  }
});