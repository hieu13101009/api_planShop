const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // webpack will take the files from ./src/index
    entry: './src/index.tsx',

    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 9090,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        proxy: {
            '/api': {
                target: 'http://192.168.33.21:8080',
                secure: false,
            },
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
        },
        Accept: "application/json, text/plain, */*"
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new Dotenv()
    ],
};
