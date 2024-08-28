module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          fs: false,
          stream: require.resolve('stream-browserify'),
          zlib: require.resolve('browserify-zlib'),
        };
        return webpackConfig;
      },
    },
  };
  