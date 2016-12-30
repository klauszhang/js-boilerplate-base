import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import chalk from 'chalk';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const port = 3000;
const app = express();
const compiler = webpack(config);

console.log(chalk.green('Starting dev server...'));

app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// https://github.com/glenjamin/webpack-hot-middleware
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err); // eslint-disable-line no-console
    } else {
        console.log(chalk.green('Server ready, listening on:'));
        console.log('http://localhost:' + port);
    }
});