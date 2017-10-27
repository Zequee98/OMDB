module.exports = {
  entry: [
      './cliente/omdb.js'
    ],
    module: {
      loaders: [
        {
          test: /(\.js|\.jsx)$/,
          loader: 'babel-loader', //loader de babel
          exclude: /node_modules/,
          query: { presets: ['es2015', 'react'] }
        }
      ]
    },
    devtool: 'source-map',
    output: {
      filename: "bundle.js",
      path: __dirname + '/dist'
    }
}
