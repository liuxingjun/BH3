
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  publicPath:'./',
  // assetsDir:"./BH3",
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, //console
              drop_debugger: false,
              pure_funcs: ["console.log"] //移除console
            }
          }
        })
      ]
    }
  }
};
