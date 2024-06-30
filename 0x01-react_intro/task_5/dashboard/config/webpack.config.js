const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "../src/index.js"),

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },

    devServer: {
        port: 3000,
    },
};
