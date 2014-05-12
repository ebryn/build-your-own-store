export default Ember.Object.extend({
  find: function(name, value) {
    var modelClass = this.container.lookupFactory('model:' + name);
    var adapter    = this.container.lookup('adapter:' + name) || this.container.lookup('adapter:application');

    modelClass.typeKey = name;

    var record = modelClass.create()
    var data = adapter.find(name, value);
    return record.create(data);

    // return $.getJSON("/%@s/%@".fmt(name, value));
  }
});