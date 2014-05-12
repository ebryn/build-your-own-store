export default Ember.Route.extend({
  beforeModel: function() {
    this.replaceWith('posts');
  }
});
