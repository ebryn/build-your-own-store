/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  getEnvJSON: require('./config/environment')
});

app.import('vendor/FakeXMLHttpRequest/fake_xml_http_request.js');

app.import('vendor/route-recognizer/dist/route-recognizer.amd.js', {
  'route-recognizer': ['default']
});

app.import('vendor/pretender/pretender.js');

// Use this to add additional libraries to the generated output files.
// app.import('vendor/ember-data/ember-data.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});


module.exports = app.toTree();
