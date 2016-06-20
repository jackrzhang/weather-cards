var InputView = Backbone.View.extend({

  template: _.template('\
      <div class="input">\
        <div class="input-label">Latitude</div>\
        <input type="text" placeholder="Enter a latitude." class="input-field latitude"></input>\
        <div class="input-label">Longitude</div>\
        <input type="text" placeholder="Enter a longitude." class="input-field longitude"></input>\
        <div>\
          <button class="input-submit">Get Weather Card</button>\
        </div>\
      </div>'),

  events: {
    'click .input-submit': 'inputSubmit'
  },

  initialize: function() {
    this.render();
  },

  inputSubmit: function() {
    var $latitudeInput = this.$el.find('input.latitude');
    var $longitudeInput = this.$el.find('input.longitude');

    // Validate latitude -90.XXXXXX to 90.XXXXXX, longitude -180.XXXXXX to 180.XXXXXX
    if (!$latitudeInput.val().trim().match(/^-?([0-8]?[0-9]|90)\.[0-9]{1,6}/)) {
      $latitudeInput.attr({
        placeholder: 'Invalid latitude.'
      });
      $latitudeInput.val('');
    } else if (!$longitudeInput.val().trim().match(/-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,6}$/)) {
      $longitudeInput.attr({
        placeholder: 'Invalid longitude.'
      });
      $longitudeInput.val('');
    } else {
      console.log('yee');
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});