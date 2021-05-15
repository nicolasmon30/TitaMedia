const path = require('path'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    autoprefixer = require('autoprefixer'),
    postcssCustomProperties = require('postcss-custom-properties'),
    // htmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = { 
    entry: './sources/index.js',
    output: {
        path: path.resolve(__dirname, 'public_html/'),
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    watch: true,
    module: { // for loaders
        rules: [
            { 
                test: /\.(js)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.(css|scss)$/, 
                use: [
                    'style-loader',
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public_html/css/',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: [ 'last 2 versions' ]
                            },
                            soruceMarp: true,
                            // plugins: () => [ autoprefixer ]
                            plugins: () => [ autoprefixer, postcssCustomProperties ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3001,
            files: ['/public_html/*.html', '/public_html/css/*.css', '/public_html/*.js'],
            server: { baseDir: ['public_html/'] }
        }),
    ]
}