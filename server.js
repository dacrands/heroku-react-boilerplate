const express = require('express');
const webpack  = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.prod.js')

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.set('port', process.env.PORT || 8888)

app.listen(app.get('port'), function() {
    console.log('Listening on port 3000')
});