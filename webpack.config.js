var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('index', './assets/image_board/index.js')

    .addStyleEntry('Layout','./assets/image_board/components/hoc/Layout/Layout.css')
    .addStyleEntry('Toolbar','./assets/image_board/components/Navigation/Toolbar/Toolbar.css')
    .addStyleEntry('Button','./assets/image_board/components/UI/Button/Button.css')
    .addStyleEntry('Logo','./assets/image_board/components/Logo/Logo.css')
    .addStyleEntry('Post','./assets/image_board/components/Containers/Post/Post.css')
    .addStyleEntry('Posts','./assets/image_board/components/Containers/Posts/Posts.css')

    .configureCssLoader(options => { options.modules = true })

    .enablePostCssLoader()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()

    .configureBabel(function (babelConfig) {
        babelConfig.plugins = [
            "@babel/plugin-proposal-object-rest-spread","@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
        ]
    })
;

module.exports = Encore.getWebpackConfig();