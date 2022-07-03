const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:"./js/index.js",
    output:{
        filename:"main.[contenthash].js",
        path: path.resolve(__dirname,"dist"),
        clean:true,
    },
    plugins:[
        new HtmlWebpackPlugin({template:"index.html"}),
    ],
    module:{
        rules:[
            {
                test:/\.css/,
                use: ["style-loader","css-loader"],
            }
        ]
    }
}