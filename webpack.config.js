var webpack = require('webpack');
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './app',
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            exclude: /pace-theme-/,
            loaders: ['style', 'css']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000"
        }, {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file'
        }, {
            test: /bootstrap-sass\\assets\\javascripts\\/,
            loader: 'imports?jQuery=jquery'
        }]
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
