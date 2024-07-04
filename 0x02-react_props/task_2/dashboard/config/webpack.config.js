const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '../src/index.js',
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        path:path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },

    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, "../dist/index.html"),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
            },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ],
    },
    devServer: {
    port: 3000,
    hot: true,
    },
};
