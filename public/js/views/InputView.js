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

    this.$latitudeInput = this.$el.find('input.latitude');
    this.$longitudeInput = this.$el.find('input.longitude');
  },

  inputSubmit: function() {
    // Validate latitude -90.XXXXXX to 90.XXXXXX, longitude -180.XXXXXX to 180.XXXXXX
    if (!this.$latitudeInput.val().trim().match(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)) {
      this.invalidLatitude();
    } else if (!this.$longitudeInput.val().trim().match(/(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/)) {
      this.invalidLongitude();
    } else {
      this.collection.addWeatherCard(this.$latitudeInput.val(), this.$longitudeInput.val());
      this.resetInput();
    }
  },

  invalidLatitude: function() {
    this.$latitudeInput.attr({ placeholder: 'Invalid latitude.' });
    this.$latitudeInput.val('');
  },

  invalidLongitude: function() {
    this.$longitudeInput.attr({ placeholder: 'Invalid longitude.' });
    this.$longitudeInput.val('');
  },

  resetInput: function() {
    this.$latitudeInput.attr({ placeholder: 'Enter a latitude.' });
    this.$latitudeInput.val('');

    this.$longitudeInput.attr({ placeholder: 'Enter a longitude.' });
    this.$longitudeInput.val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});