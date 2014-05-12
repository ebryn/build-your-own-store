export default Ember.Object.extend({
  find: function(modelClass, id) {
    var url = "/%@s/%@".fmt(modelClass.typeKey, id);
    return $.getJSON(url).then(function(json) {
      return modelClass.create(json);
    });
  }
});