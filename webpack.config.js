const webpack = require('webpack');

const path = require('path');

module.exports = {
    entry: './js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.REACT_APP_PRODUCTS_API_URL': JSON.stringify('http://localhost:1340'),
        }),
    ],
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     compress: true,
//     port: 3000,
//   }
};
