const webpack = require('webpack');

const runner = require('./runner');

const complier = webpack({});

runner(complier);
