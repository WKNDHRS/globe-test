// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
//     assetExts: ['glb', 'gltf', 'png', 'jpg', 'ktx2', 'webp'],
//   },
// };


// CLIENT CONFIG...
const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

// const defaultConfig = getDefaultConfig(__dirname);
// const dataModelPath = path.resolve(__dirname, '../kkc-data-model');
// defaultConfig.watchFolders.push(dataModelPath);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      sourceExts: [...sourceExts, 'cjs', 'mjs'],
      assetExts: [...assetExts, 'glb', 'gltf', 'ktx2'],
    },
  }
});