var WeatherCardView = Backbone.View.extend({

  className: 'weather-card',
  template: _.template('\
      <div class="card-info">\
        <div class="description"><%= description %></div>\
        <div class="degrees"><%= degrees %>&nbsp;<%= unit %></div>\
        <div class="time-info">\
          <span class="time"><%= time %></span>\
          <span class="date"><%= date %></span>\
          <span class="day"><%= day %></span>\
        </div>\
        <div class="city">\
          <span class="city-icon">icon</span>\
          <span><%= city %></span>\
        </div>\
      </div>\
      <div class="card-picture">\
      </div>\
    '),

  initialize: function() {
    this.render();
  },

  render: function() {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var card = this.template({
      description: this.model.get('description'),
      degrees: this.model.get('degrees'),
      unit: this.model.get('unit'),
      time: this.model.get('time'),
      date: this.model.get('date'),
      day: days[this.model.get('day') % 7],
      city: this.model.get('city')
    });

    this.$el.html(card);
    return this;
  }
});