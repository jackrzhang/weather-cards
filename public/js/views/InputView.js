var InputView = Backbone.View.extend({

  template: _.template('\
      <div class="input">\
        <div class="input-label">Latitude</div>\
        <input type="text" placeholder="Enter a latitude" class="input-field latitude"></input>\
        <div class="input-label">Longitude</div>\
        <input type="text" placeholder="Enter a longitude" class="input-field longitude"></input>\
        <button class="input-submit">Get Weather Card</button>\
      </div>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});