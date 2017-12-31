"use strict";
require('./test_helpers/global_before');

var testsContext = require.context(".", true, /\.test$/);
testsContext.keys().forEach(testsContext);