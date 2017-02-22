
module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'app.js',
    path: './',
  },
  module: {
    loaders: [
      /*{
        test: /\.json$/,
        loader: 'json',
      },*/
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      }/*,
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules')
      }*/
    ]
  },
  target: 'node'/*,
  plugins: [
    new ExtractTextPlugin('../built/statics/styles.css'),
  ],*/
};
