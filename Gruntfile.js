module.exports = function(grunt) {

    var base_url = 'static/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'true'
                },
                files: [
                    {
                        expand: true,
                        cwd: base_url + 'scss/',
                        src: ['**/*.scss'],
                        dest: base_url + 'css/',
                        ext: '.css'
                    }
                ]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 9'],
                map: false

            },
            no_dest_multiple: {
                src: base_url + 'css/*.css'
            }
        },

        requirejs: {
            compile_main: {
                options: {
                    baseUrl: base_url + 'js',
                    mainConfigFile: base_url + 'js/main.js',
                    name: 'lib/require',
                    include: 'main',
                    out: base_url + 'js/main.min.js',
                    optimize: 'none' /** USE FOR NON-UGLYFIED JS **/
                }
            }
        },

        mustache: {
            dist: {
                src: [base_url + 'js/templates/**/*'],
                dest: base_url + 'js/templates/mustache.templates.js',
                options: {
                    prefix: 'define(',
                    postfix: ');',
                    verbose: false
                }
            }
        },

        watch: {
            css: {
                files: [base_url + '**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            },
            mustache: {
                files: [base_url + 'js/templates/**/*.mustache'],
                tasks: ['mustache'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');  // https://github.com/gruntjs/grunt-contrib-requirejs
    grunt.loadNpmTasks('grunt-contrib-watch');      // https://github.com/gruntjs/grunt-contrib-watch
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-mustache');
    grunt.registerTask('default', ['watch']);

};
