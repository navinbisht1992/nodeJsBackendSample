/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

const MYSQL                     = require('mysql');

const connection = MYSQL.createConnection({
    host:                       'localdev.c3uouiq5i1lr.us-east-1.rds.amazonaws.com',
    user:                       'root',
    password:                   'rootSnap',
    database:                   'root'
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) console.log(error);
    console.log('The solution is: ', results);
  });
module.exports = connection;