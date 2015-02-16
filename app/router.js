import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', { path: '/' });
  this.resource('piece', { path: '/*piece_id' });
});

export default Router;
