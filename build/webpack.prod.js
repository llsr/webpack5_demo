const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
                // options: {
                //   esModule: false, //在开发环境中启用false
                // },
            }
        ]
    },
    plugins: [new BundleAnalyzerPlugin(),new CompressionPlugin(),new CssMinimizerPlugin(),],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
            cacheGroups: {
                'echarts.vendor': {
                    name: 'echarts.vendor',
                    priority: 40,
                    test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
                    chunks: 'all'
                },
                lodash: {
                    name: 'lodash',
                    chunks: 'async',
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    priority: 40
                },
                'async-common': {
                    chunks: 'async',
                    minChunks: 2,
                    name: 'async-commons',
                    priority: 30
                },
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                    priority: 20
                }
            },
        }
    }
});
