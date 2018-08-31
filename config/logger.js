/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

const simpleLogger       = require('simple-node-logger');

// create a rolling file logger based on date/time that fires process events
const opts = {
    logFilePath:        './logger/logger.log', // NOTE: folder must exist and be writable...
    timestampFormat:    'YYYY-MM-DD HH:mm:ss.SSS',
    level:              'all'
};

module.exports = {
    "file":             simpleLogger.createSimpleFileLogger( opts ),
    "log":              simpleLogger.createSimpleLogger(opts)
};