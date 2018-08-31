/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

// Internal modules
const service                 = require('./service'),
      user                    = require('./user');

module.exports = function(app) {

  app.get('/v1/detail', service.apiInfo, user.getDetail, service.response);

  app.post('/v1/detail', service.apiInfo, user.getDetail, user.postDetail, service.response);

  app.put('/v1/detail', service.apiInfo, user.getDetail, user.putDetail, service.response);

};
