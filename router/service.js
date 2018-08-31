/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

const _                   	= require('lodash'),
// Internal Modules
	  console             	= require('../config/logger').log,
	  consoleFile			= require('../config/logger').file;

module.exports = {

	apiInfo: (req, res, next) => {

		const url 			= _.get(req, ["route", "path"], ""),
			  method        = _.get(req, ["method"], ""),
			  body 			= method === "GET" ? _.get(req, ["query"], {}) : _.get(req, ["body"], {});

		_.set(req, ['body'], body);
		console.info(method + ": " + url);
		consoleFile.info("Request data: ", JSON.stringify(body));

		return next();

	},

	response: (req, res) => {

		let response, statusCode;

		if ( _.get(req, ['error', 'isError'], false) ) {

			response              	= _.get(req, ['error'], {});
			statusCode 				= _.get(response, ['statusCode'], 400);

			console.error("Error occured in request: ", JSON.stringify(response));

		} else {

			response              	= _.get(req, ['response'], {});
			statusCode       		= _.get(response, ['statusCode'], 200);
			
			console.info("Success, sending response: ", JSON.stringify(response));

		}

		return res.status(statusCode).send(response);

	}

};
