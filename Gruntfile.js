/* Gruntfile for prettytype

 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {

                files: [
                    'src/roots/logmoduleloads.js',

                    'src/utils/decoratesystemprototypes_svce.js',
                    'src/utils/stacktrace.js',
                    'src/utils/exceptiondetails_svce.js',
                    'src/utils/console_svce.js',

                    'src/typesregistry.js',
                    'src/roots/overrider_type.js',

                    'src/commoneventkinds.js',
                    'src/common/common_type.js',
                    'src/common/prominstrexception.js',
                    'src/common/prominstr_type.js',
                    'src/common/withprominstr_type.js',
                    'src/common/common_ctrl_type.js',
                    'src/common/common_svce_type.js',

                    'src/identifying/identifier_type.js',
                    'src/identifying/record_type.js',
                    'src/identifying/recordingpolicy_type.js',
                    'src/identifying/recordingpolicy_keepall_type.js',
                    'src/identifying/dumpingpolicy_type.js',
                    'src/identifying/dumpingpolicy_filterkinds_type.js',
                    'src/identifying/record_type.js',
                    'src/identifying/recorder_type.js'
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
                    'src/roots/logmoduleloads.js',

                    'src/typesregistry.js',

                    'src/utils/decoratesystemprototypes_svce.js',
                    'src/utils/stacktrace.js',
                    'src/utils/exceptiondetails_svce.js',
                    'src/utils/console_svce.js',

                    'src/roots/overrider_type.js',

                    'src/commoneventkinds.js',
                    'src/common/common_type.js',
                    'src/common/prominstrexception.js',
                    'src/common/prominstr_type.js',
                    'src/common/withprominstr_type.js',
                    'src/common/common_ctrl_type.js',
                    'src/common/common_svce_type.js',

                    'src/identifying/identifier_type.js',
                    'src/identifying/record_type.js',
                    'src/identifying/recordingpolicy_type.js',
                    'src/identifying/recordingpolicy_keepall_type.js',
                    'src/identifying/dumpingpolicy_type.js',
                    'src/identifying/dumpingpolicy_filterkinds_type.js',
                    'src/identifying/record_type.js',
                    'src/identifying/recorder_type.js'
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
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', [ 'concat', 'uglify']);

};
