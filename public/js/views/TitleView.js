var TitleView = Backbone.View.extend({

  template: _.template('\
    <div>\
      <h1 class="title">Weather Cards</h1>\
    </div>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});