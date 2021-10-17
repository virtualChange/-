const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://test.blog.com'
            }
        },
    },
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    },
    publicPath: './',
}
