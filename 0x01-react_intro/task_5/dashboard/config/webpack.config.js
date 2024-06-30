const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '../src/index.js',
    entry: path.join(__dirname, "../src/index.js"),

    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
        path:path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    mode: 'development',

    devtool: 'inline-source-map',
    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../dist/index.html"),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extentions: ['.js', '.jsx']
        },

    devServer: {
    port: 3000,
    },
        plugins: [
            new HtmlWebpackPlugin({
                template: '../dist/index.html',
            }),
        ],
};