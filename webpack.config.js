const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        'application': './src/main.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new WebpackNotifierPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/main.html',
            chunks: ['application']
        }),
    ]
};
