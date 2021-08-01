module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.md$/,
      // 此时可以直接使用路径
      use: [
        'html-loader',
        './markdown-loader',
      ]
    }]
  }
}
