var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('index', './assets/image_board/index.js')
    .addEntry('post_page', './assets/image_board/post_page.js')
    .addEntry('authentication', './assets/image_board/authentication.js')

    .addStyleEntry('Layout','./assets/image_board/components/hoc/Layout/Layout.css')
    .addStyleEntry('Card','./assets/image_board/components/UI/Card/Card.css')
    .addStyleEntry('Input','./assets/image_board/components/UI/Input/Input.css')
    .addStyleEntry('Authentication','./assets/image_board/components/Containers/Authentication/Authentication.css')
    .addStyleEntry('RegistrationForm','./assets/image_board/components/Form/Authentication/RegistrationForm.css')
    .addStyleEntry('Toolbar','./assets/image_board/components/Navigation/Toolbar/Toolbar.css')
    .addStyleEntry('Button','./assets/image_board/components/UI/Button/Button.css')
    .addStyleEntry('Logo','./assets/image_board/components/Logo/Logo.css')
    .addStyleEntry('Post','./assets/image_board/components/Posts/Post/Post.css')
    .addStyleEntry('PostPage','./assets/image_board/components/Posts/PostPage/PostPage.css')
    .addStyleEntry('PostToolbar','./assets/image_board/components/Navigation/Toolbar/PostToolbar/PostToolbar.css')
    .addStyleEntry('Posts','./assets/image_board/components/Posts/Posts.css')

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