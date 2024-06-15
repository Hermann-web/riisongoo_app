const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    transformer: {
      babelTransformerPath: require.resolve('react-native-typescript-transformer'),
    },
  };
})();
