
requirejs.config({
    paths: {
        uni: 'lib/unicorn',
        mustache: 'lib/mustache'
    }
});

requirejs(['app'], function(app) {
    new app()
});
