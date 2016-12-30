var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    // https://webpack.github.io/docs/configuration.html#target
    target: 'web',
    devServer: {
        contentBase: 'src'
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: './src',
        filename: 'bundle.js'
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}