const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: {
        'app':'./src/index.ts'
    },
    output:{
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.ts?$/,
                use:[{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}