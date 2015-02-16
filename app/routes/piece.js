import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('piece', params.piece_id);
  },

  actions: {
    error: function() {
      return this.transitionTo('index');
    }
  }

});
