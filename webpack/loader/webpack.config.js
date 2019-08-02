const path = require('path')

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use:['html-loader', {
        loader: 'html-minify-loader',
        options: {
          comments: false
        }
      }]
    }]
  },
  resolveLoader: {
    modules: [path.join(__dirname,'./loaders'), 'node_modules']
  }
}