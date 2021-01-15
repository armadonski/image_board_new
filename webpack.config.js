var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('index', './assets/image_board/index.js')
    .addEntry('post_page', './assets/image_board/post_page.js')
    .addEntry('authentication', './assets/image_board/authentication.js')
    .addEntry('profile_page', './assets/image_board/profile_page.js')

    .addStyleEntry('Layout','./assets/image_board/components/hoc/Layout/Layout.css')
    .addStyleEntry('Backdrop','./assets/image_board/components/hoc/Backdrop/Backdrop.css')
    .addStyleEntry('Card','./assets/image_board/components/UI/Card/Card.css')
    .addStyleEntry('Modal','./assets/image_board/components/UI/Modal/Modal.css')
    .addStyleEntry('Avatar','./assets/image_board/components/UI/Avatar/Avatar.css')
    .addStyleEntry('Label','./assets/image_board/components/UI/Label/Label.css')
    .addStyleEntry('Input','./assets/image_board/components/UI/Input/Input.css')
    .addStyleEntry('Authentication','./assets/image_board/components/Containers/Authentication/Authentication.css')
    .addStyleEntry('RegistrationForm','./assets/image_board/components/Form/Authentication/RegistrationForm/RegistrationForm.css')
    .addStyleEntry('CommentForm','./assets/image_board/components/Form/CommentForm/CommentForm.css')
    .addStyleEntry('LoginForm','./assets/image_board/components/Form/Authentication/LoginForm/LoginForm.css')
    .addStyleEntry('Toolbar','./assets/image_board/components/Navigation/Toolbar/Toolbar.css')
    .addStyleEntry('PostComment','./assets/image_board/components/Navigation/PostComment/PostComment.css')
    .addStyleEntry('BackToIndex','./assets/image_board/components/Navigation/BackToIndex/BackToIndex.css')
    .addStyleEntry('NavButtons','./assets/image_board/components/Navigation/Toolbar/NavButtons/NavButtons.css')
    .addStyleEntry('Button','./assets/image_board/components/UI/Button/Button.css')
    .addStyleEntry('Logo','./assets/image_board/components/Logo/Logo.css')
    .addStyleEntry('Post','./assets/image_board/components/Posts/Post/Post.css')
    .addStyleEntry('Comments','./assets/image_board/components/Posts/Comments/Comments.css')
    .addStyleEntry('CommentContent','./assets/image_board/components/Posts/Comments/CommentContent/CommentContent.css')
    .addStyleEntry('Upload','./assets/image_board/components/Posts/Upload/Upload.css')
    .addStyleEntry('PostPage','./assets/image_board/components/Posts/PostPage/PostPage.css')
    .addStyleEntry('PostWidgetToolbar','./assets/image_board/components/Navigation/PostWidgetToolbar/PostWidgetToolbar.css')
    .addStyleEntry('Posts','./assets/image_board/components/Posts/Posts.css')
    .addStyleEntry('ProfilePage','./assets/image_board/components/Containers/ProfilePage/ProfilePage.css')
    .addStyleEntry('PostPageContainer','./assets/image_board/components/Containers/ImageBoard/PostPage/PostPageContainer.css')

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