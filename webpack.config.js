var webpack = require('webpack');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = {
  output: {
    library: 'ReactQueryBuilder',
    libraryTarget: 'umd'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
/*    "react-pure-render/function": {
      root: 'ReactPureRender',
      commonjs2: 'react-pure-render',
      commonjs: 'react-pure-render',
      amd: 'react-pure-render'
    },
    "react-redux": {
      root: 'ReactRedux',
      commonjs2: 'react-redux',
      commonjs: 'react-redux',
      amd: 'react-redux'
    },*/
    immutable: {
      root: 'Immutable',
      commonjs2: 'immutable',
      commonjs: 'immutable',
      amd: 'immutable'
    }
  }],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
        {
            test: /(\.css|\.scss)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap'],
//        exclude: /node_modules/
        },
        {
            test: /\.less$/,
            loader: "style!css!less"
        }
    ]
  },
  node: {
    Buffer: false
  },
  plugins: plugins
};
