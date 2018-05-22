/* Gruntfile for prettytype

 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {

                files: [
                    'src/lowinstrument/logmoduleloads.js',
                    'src/lowinstrument/decoratesystemprototypes_svce.js',
                    'src/typesregistry/typesregistry_types.js',
                    'src/typesregistry/typesregistry_type.js',
                    'src/typesregistry/typesregistry_svce.js',
                    'src/overrider/overrider_types.js',
                    'src/overrider/overrider_type.js',
                    'src/overrider/overrider_svce.js',
                    'src/eventkinds/eventkinds_types.js',
                    'src/eventkinds/eventkinds_common.js',
                    'src/exceptionstack/exceptionstack_types.js',
                    'src/exceptionstack/stacktrace_type.js',
                    'src/exceptionstack/stacktrace_svce.js',
                    'src/exceptionstack/exceptiondetails_type.js',
                    'src/exceptionstack/exceptiondetails_svce.js',
                    'src/console/console_types.js',
                    'src/console/console_type.js',
                    'src/console/console_svce.js',
                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_type.js',
                    'src/identifying/identifier_svce.js',
                    'src/recording/recording_types.js',
                    'src/recording/dumpingpolicy_type.js',
                    'src/recording/dumpingpolicy_filterkinds_type.js',
                    'src/recording/dumpingpolicy_triggerkinds_type.js',
                    'src/recording/record_type.js',
                    'src/recording/recordingpolicy_type.js',
                    'src/recording/recordingpolicy_keepall_type.js',
                    'src/recording/recordingpolicy_keepsome_type.js',
                    'src/recording/recordingpolicy_keeprecent_type.js',
                    'src/recording/recorder_type.js',
                    'src/recording/recorder_svce.js',
                    'src/utils/checks.js',
                    'src/utils/traversals.js',
                    'src/common/common_types.js',
                    'src/common/common_type.js',
                    'src/index.js'
                ],

                tasks: ['concat', 'uglify'],

                options: {

                    spawn:false,
                    event:['all']
                }
            }
        },


        clean: [ "build/**/*", "dist/**/*"],


        concat : {
            options : {
                separator: ';',
                sourceMap :true
            },
            dist : {
                src  : [
                    'src/lowinstrument/logmoduleloads.js',
                    'src/lowinstrument/decoratesystemprototypes_svce.js',
                    'src/typesregistry/typesregistry_types.js',
                    'src/typesregistry/typesregistry_type.js',
                    'src/typesregistry/typesregistry_svce.js',
                    'src/overrider/overrider_types.js',
                    'src/overrider/overrider_type.js',
                    'src/overrider/overrider_svce.js',
                    'src/eventkinds/eventkinds_types.js',
                    'src/eventkinds/eventkinds_common.js',
                    'src/exceptionstack/exceptionstack_types.js',
                    'src/exceptionstack/stacktrace_type.js',
                    'src/exceptionstack/stacktrace_svce.js',
                    'src/exceptionstack/exceptiondetails_type.js',
                    'src/exceptionstack/exceptiondetails_svce.js',
                    'src/console/console_types.js',
                    'src/console/console_type.js',
                    'src/console/console_svce.js',
                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_type.js',
                    'src/identifying/identifier_svce.js',
                    'src/recording/recording_types.js',
                    'src/recording/dumpingpolicy_type.js',
                    'src/recording/dumpingpolicy_filterkinds_type.js',
                    'src/recording/dumpingpolicy_triggerkinds_type.js',
                    'src/recording/record_type.js',
                    'src/recording/recordingpolicy_type.js',
                    'src/recording/recordingpolicy_keepall_type.js',
                    'src/recording/recordingpolicy_keepsome_type.js',
                    'src/recording/recordingpolicy_keeprecent_type.js',
                    'src/recording/recorder_type.js',
                    'src/recording/recorder_svce.js',
                    'src/utils/checks.js',
                    'src/utils/traversals.js',
                    'src/common/common_types.js',
                    'src/common/common_type.js',
                    'src/index.js'
                ],
                dest : 'build/prettytype.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - */\n',
                sourceMap : true,
                sourceMapIncludeSources : true,
                sourceMapIn: 'build/prettytype.js.map'
            },
            build: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/prettytype.min.js'
            }
        },

        karma: {
            angularjs: {
                configFile: 'test/test-browser-karma-angularjs/karma-angularjs.conf.js',
                singleRun: true
            },
    
            requirejs: {
                configFile: 'test/test-browser-karma-requirejs/karma-requirejs.conf.js',
                // configFile: 'karma-requirejs.conf.js',
                singleRun: true
            },
    
            nomod: {
                configFile: 'test/test-browser-karma-nomod/karma-nomod.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [ 'concat', 'uglify']);

};
