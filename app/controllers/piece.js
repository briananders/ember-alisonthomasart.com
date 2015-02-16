import Ember from 'ember';

export default Ember.Controller.extend({

  isRetina: function() {
    return window.devicePixelRatio > 1;
  }.property()

});
