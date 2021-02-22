const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@containers': path.resolve(__dirname, "src/containers/"),
      '@common': path.resolve(__dirname, "src/common/"),
      '@routers': path.resolve(__dirname, "src/routers/"),
      '@services': path.resolve(__dirname, "src/services/"),
      '@http': path.resolve(__dirname, "src/services/http"),
      '@store': path.resolve(__dirname, "src/store/"),
      '@actions': path.resolve(__dirname, "src/store/actions"),
      '@validations': path.resolve(__dirname, "src/validations/"),
    }
  }
}