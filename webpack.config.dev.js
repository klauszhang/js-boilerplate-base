var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')
    ],
    // https://webpack.github.io/docs/configuration.html#target
    target: 'web',
    devServer: {
        contentBase: 'src'
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),

        /**
         * for https://github.com/glenjamin/webpack-hot-middleware
         */
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}