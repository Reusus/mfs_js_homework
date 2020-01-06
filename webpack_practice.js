// webpack.config.js
import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
module.exports = {
    entry:{
        main: './src/main.js'
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {test:/\.txt$/,use: 'raw-loader'},
            {test:/\.styl$/,use:[
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'stylus-loader'}
            ]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ]
}

// main.js
import axios from 'axios'
import text from './text.txt'
import stylus from './styles.styl'

axios.get('/').then(data=>{
    console.log(data)
})

// 实现热刷新需要安装并open webpack-dev-server