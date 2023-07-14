module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["."],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".png", ".svg"],
          alias: {
            "@components": './components',
            "@screens": 'screens',
            "@gStyle": './styles.ts',
            "@assets": './assets'
          },
        },
      ],
    ],
  };
};
