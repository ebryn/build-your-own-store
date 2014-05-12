var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('post', {path: 'posts/:post_id'});
});

export default Router;
