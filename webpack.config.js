var path = require('path');

// Define the distribution directory
var DIST_DIR = path.resolve(__dirname, 'dist');
// Define the source directory
var SRC_DIR = path.resolve(__dirname, 'src');

// Setup webpack configuration
var config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
