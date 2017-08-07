const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;
const webpack = require('webpack');
const webpackConfig = require('./../webpack.config.js');
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV !== 'PRODUCTION') {
  const webpack = require('webpack');
  const webpackConfig = require('./../webpack.config.js');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(__dirname + './../client/static'));

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname + './../client/static/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at ${port}.`);
});