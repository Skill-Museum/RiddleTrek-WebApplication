// webpack.config.js

module.exports = {
  // Your existing webpack configuration

  resolve: {
    fallback: {
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
