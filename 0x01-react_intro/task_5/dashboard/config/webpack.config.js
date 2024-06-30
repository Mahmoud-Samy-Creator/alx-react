const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    devtool: 'inline-source-map', // Enable inline source maps for easier debugging

    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '../dist/index.html')
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // Handle CSS files
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource' // Handle image files
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true
    }
};
