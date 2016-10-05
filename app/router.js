import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('executive');
  this.route('office');
  this.route('suite');
  this.route('contact');
  this.route('pricing');
});

export default Router;
