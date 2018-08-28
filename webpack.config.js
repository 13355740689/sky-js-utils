const webpack = require('webpack')
const join = require('path').join

const config = {
    context: __dirname,
    entry: join(__dirname, 'src', 'index.js'),
    output: {
        path: join(__dirname, 'dist'),
        filename: 'utils.min.js' ,
        library: 'utils',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, drop_console: true } })],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader' ,
                include: [join(__dirname, 'src')]
            }
        ]
    },
}

module.exports = config