const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
    })],
}