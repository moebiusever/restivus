Package.describe({
  name: 'mrest:restivus',
  summary: 'Create authenticated REST APIs in Meteor 0.9+ via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
  version: '0.8.13',
  git: 'https://github.com/meteor-rest/restivus.git'
});

Package.onUse(function (api) {
  // Minimum Meteor version
  api.versionsFrom('METEOR@0.9.0');

  // Meteor dependencies
  api.use('check');
  api.use('coffeescript@2.3.2');
  api.use('underscore');
  api.use('accounts-password@1.3.3');
  api.use('simple:json-routes@2.1.0');

  api.addFiles('lib/auth.coffee', 'server');
  api.addFiles('lib/iron-router-error-to-response.js', 'server');
  api.addFiles('lib/route.coffee', 'server');
  api.addFiles('lib/restivus.coffee', 'server');

  // Exports
  api.export('Restivus', 'server');
});

Package.onTest(function (api) {
  // Meteor dependencies
  api.use('practicalmeteor:munit');
  api.use('test-helpers');
  api.use('mrest:restivus');
  api.use('http');
  api.use('coffeescript');
  api.use('underscore');
  api.use('accounts-base');
  api.use('accounts-password');
  api.use('mongo');

  api.addFiles('lib/route.coffee', 'server');
  api.addFiles('test/api_tests.coffee', 'server');
  api.addFiles('test/route_unit_tests.coffee', 'server');
  api.addFiles('test/authentication_tests.coffee', 'server');
  api.addFiles('test/user_hook_tests.coffee', 'server');
});
