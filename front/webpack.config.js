/**
 * 
 * @authors riddleoo (648262030@qq.com)
 * @date    2016-04-23
 */
var webpack = require("webpack");

module.exports={   
    entry:'./src/index.js',
    output:{
        path:'./public',
        publicPath:'./public',
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test    :/\.css$/,
                loader  :'style!css-loader?modules&importLoaders=1&localIdentName=riddleoo__local___[hash:base64:5]'
            },
            
            {      
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                loader  : 'babel-loader',
                query:{
                    presets:['es2015','react'],
                    plugins:['transform-class-properties','babel-plugin-transform-object-rest-spread']
                }
            },
            
            {
                test   : /\.(png|jpg)$/,
                loader : 'url-loader?name=images/riddleoo-[sha512:hash:base64:7].[ext]'
            },

            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader?&name=fonts/riddleoo-[sha512:hash:base64:7].[ext]'
            },
            
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
}