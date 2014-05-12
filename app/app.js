import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'model-playground', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'model-playground');

function response(obj) {
  return [200, {}, JSON.stringify(obj)];
}

var postId = 1;
function generatePost(title, id) {
  return {
    id: id || postId++,
    title: title,
    author: "John Doe",
    body: "This is post #" + postId
  };
}

new Pretender(function() {
  this.get('/posts', function(req) {
    return response({
      posts: [
        generatePost("Hello"),
        generatePost("Goodbye"),
        generatePost("Ciao")
      ]
    });
  });

  this.get('/posts/:post_id', function(req) {
    return response(generatePost("Foo", req.params.post_id));
  });


  this.get('/*', function(req) {
    return [404, {}, "null"];
  });
});

export default App;
