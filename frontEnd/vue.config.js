const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // lintOnSave:true,
  transpileDependencies: true,
  //md文件loader
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: "raw-loader", // npm install -D raw-loader
        },
      ],
    },
  },
});
