/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

const _                   = require('lodash'),
// Internal Modules
      console             = require('../config/logger').file,
      lib                 = require('../lib'),
      DB                  = lib.DB;

module.exports = {

    getDetail: async (req, res, next) => {

        // Check if request consists `error` or not
        if( _.get(req, ['error', 'isError'], false) ) {
            return next();
        }

        // Fetch `input` from request
        let body          = _.get(req, ['body'], {});
        // Extracting `email` and `id` from `body` using destructuring
        let { email, id } = body;

        try {
            // Fetching user details from database
            let userDetails   = await DB.getDetail(email, id);
            // Set userDetails in request for `next` function
            _.set(req, ['response', 'statusCode'], 200);
            _.set(req, ['response', 'data'], userDetails);
        }
        catch( error ) {
            // Set `error` to `true`
            _.set(req, ['error', 'statusCode'], 400);
            _.set(req, ['error', 'data'], error);
            _.set(req, ['error', 'isError'], true);
        }
        finally {
            // Call next function
            return next();
        }

    },

    postDetail: async (req, res, next) => {

        if( _.get(req, ['error', 'isError'], false) ) {
            return next();
        }

        let body          = _.get(req, ['body'], {});
        let { email, fName, lName, contract, gender, password } = body;

        try {
            let userDetails   = await DB.postDetail( email, fName, lName, contract, gender, password );
        
            _.set(req, ['response', 'statusCode'], 200);
            _.set(req, ['response', 'data'], userDetails);
        }
        catch( error ) {
            _.set(req, ['error', 'statusCode'], 400);
            _.set(req, ['error', 'data'], error);
            _.set(req, ['error', 'isError'], true);
        }
        finally {
            return next();
        }
    },

    putDetail: async (req, res, next) => {

        if( _.get(req, ['error', 'isError'], false) ) {
            return next();
        }

        let body          = _.get(req, ['body'], {});
        let { email, fName, lName, contract, gender } = body;


        try {
            let userDetails   = await DB.putDetail( email, fName, lName, contract, gender );
        
            _.set(req, ['response', 'statusCode'], 200);
            _.set(req, ['response', 'data'], userDetails);
        }
        catch( error ) {
            _.set(req, ['error', 'statusCode'], 400);
            _.set(req, ['error', 'data'], error);
            _.set(req, ['error', 'isError'], true);
        }
        finally {
            return next();
        }
    }

};
