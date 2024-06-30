const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "../src/index.js"),

    output: {
        path:path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },

    mode: 'development',

    // inline source map
    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../dist/index.html"),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
            }
            },
            {
                test: /\.css$/,
                // style loader & css loader
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        bypassOnDebug: true,
                        disable: true,
                    },
                    },
                ],
            },
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    devServer: {
    port: 3000,
    },
};