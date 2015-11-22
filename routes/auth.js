'use strict';

module.exports = function(app) {
	var auth = app.controllers.auth;
	app.get('/authenticate', auth.index);
	app.get('/authenticate/:code', auth.code);
};