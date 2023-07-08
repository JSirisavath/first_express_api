// This file was created automatically when vue app was created with these presets
// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// Config and deploy to this devServer
module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:3000',
  },
};
