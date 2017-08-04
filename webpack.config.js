const path = require('path');
const webpack= require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'client', 'static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: './'
  }
}