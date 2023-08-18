const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
        'process.env.REACT_APP_PRODUCTS_API_URL': JSON.stringify('http://myWebApp.azurewebsites.net/'),
        }),
    ],
});