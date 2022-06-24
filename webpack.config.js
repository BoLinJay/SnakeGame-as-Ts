const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
   optimization:{
       minimize: false // 关闭代码压缩，可选
   },

   entry: "./src/main.ts",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js",
   },
   watchOptions: {
    ignored: /node_modules/,
    poll: 1000
    },
   module: {
       rules: [
           {
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                "less-loader"
            ]
           },
           {
               test: /\.ts$/,
               use: {
                   loader: "ts-loader"     
               },
               exclude: /node_modules/
           },
           {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.(ts|js)$/,
            resolve: {
              fullySpecified: false, // disable the behaviour
            },
          },
       ]
   },

   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           template: './src/index.html'
       }),
   ],
   devServer: {
    host: 'localhost',
    port: '8080',
    open: true
    },
   mode: 'development',
   devtool: "inline-source-map",
    // 用来设置可以被作为模块的文件
    resolve: {
      extensions: [".ts", ".js"],
    },
}