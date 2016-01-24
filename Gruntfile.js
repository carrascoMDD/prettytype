/* Gruntfile for prettytype

 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {

                files: [ 'src/**/*.js'],

                tasks: ['concat', 'uglify'],

                options: {

                    spawn:false,
                    event:['all']
                },
            },
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            }
        },
        concat : {
            options : {
                separator: ';',
                sourceMap :true
            },
            dist : {
                src  : [ '<%= watch.scripts.files %>' ],
                dest : 'build/prettytype.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap : true,
                sourceMapIncludeSources : true
            },
            build: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/prettytype.min.js'
            }
        },

        karma: {
            options: {
                files: [
                    'src/**/*.js',
                    'test/common-test/typesregistry-test.js',
                    'test/roots-test/overrider_type-test.js'
                ]
            },
            unit: {
                configFile: 'karma.conf.js',
                UNUSED_port: 9999,
                UNUSED_background: true,
                UNUSED_singleRun: true,
                UNUSED_logLevel: 'ERROR',
                UNUSED_autoWatch: true
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};