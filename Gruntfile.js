/* Gruntfile for prettytype

 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {

                files: [
                    'src/modboot/logmoduleloads.js',
                    'src/modboot/modboot_types.js',
                    'src/modboot/typesregistry.js',
                    'src/modboot/overrider_type.js',
                    'src/modboot/overrider_svce.js',
    
                    'src/utils/decoratesystemprototypes_svce.js',
                    'src/utils/stacktrace.js',
                    'src/utils/exceptiondetails_svce.js',
                    'src/utils/console_svce.js',
                    'src/utils/traversals.js',
                    'src/utils/checks.js',
    
                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_type.js',
                    'src/identifying/identifier_svce.js',
                    'src/identifying/record_type.js',
                    'src/identifying/recordingpolicy_type.js',
                    'src/identifying/recordingpolicy_keepall_type.js',
                    'src/identifying/recordingpolicy_keepsome_type.js',
                    'src/identifying/recordingpolicy_keeprecent_type.js',
                    'src/identifying/dumpingpolicy_type.js',
                    'src/identifying/dumpingpolicy_filterkinds_type.js',
                    'src/identifying/dumpingpolicy_triggerkinds_type.js',
                    'src/identifying/recorder_type.js',
                    'src/identifying/recorder_svce.js',
    
                    'src/eventkinds/eventkinds_common.js',
    
                    'src/common/common_types.js',
                    'src/common/common_type.js'
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
                    'src/modboot/logmoduleloads.js',
                    'src/modboot/modboot_types.js',
                    'src/modboot/typesregistry.js',
                    'src/modboot/overrider_type.js',
                    'src/modboot/overrider_svce.js',
                    
                    'src/utils/decoratesystemprototypes_svce.js',
                    'src/utils/stacktrace.js',
                    'src/utils/exceptiondetails_svce.js',
                    'src/utils/console_svce.js',
                    'src/utils/traversals.js',
                    'src/utils/checks.js',
    
                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_type.js',
                    'src/identifying/identifier_svce.js',
                    'src/identifying/record_type.js',
                    'src/identifying/recordingpolicy_type.js',
                    'src/identifying/recordingpolicy_keepall_type.js',
                    'src/identifying/recordingpolicy_keepsome_type.js',
                    'src/identifying/recordingpolicy_keeprecent_type.js',
                    'src/identifying/dumpingpolicy_type.js',
                    'src/identifying/dumpingpolicy_filterkinds_type.js',
                    'src/identifying/dumpingpolicy_triggerkinds_type.js',
                    'src/identifying/recorder_type.js',
                    'src/identifying/recorder_svce.js',
    
                    'src/eventkinds/eventkinds_common.js',
                    
                    'src/common/common_types.js',
                    'src/common/common_type.js'
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
