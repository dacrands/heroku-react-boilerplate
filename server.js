const express = require('express');
const webpack  = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.prod.js')

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// app.set('port', process.env.PORT || 8888)
app.get('/', function(req, res){
    res.send('hi');
});
app.listen(process.env.PORT || 8888, function() {
    console.log('Listening on port 3000')
});