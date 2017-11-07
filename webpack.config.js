var path = require("path");

module.exports = {
    entry: './src/main.js', //文件入口
    output: {
     path: path.resolve(__dirname, 'bin'),//输出路径
     filename: 'index.merge.js' // 输出文件名
    }
}