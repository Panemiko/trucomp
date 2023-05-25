// updates the app directory path
process.env.EXPO_ROUTER_APP_ROOT = "../../src/app";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv"],
      require.resolve("expo-router/babel"),
      "nativewind/babel",
    ],
  };
};
