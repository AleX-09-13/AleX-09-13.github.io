const {
  addWebpackAlias,
  override,
  addWebpackPlugin,
  addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    // здесь вы можете добавлять любые необходимые алиасы
  }),
  addWebpackModuleRule({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '../fonts/',
        },
      },
    ],
  })
);
