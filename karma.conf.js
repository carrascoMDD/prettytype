module.exports = function(config){
    config.set({

        basePath : './',


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
            'src/identifying/recorder_type.js',


            'test/structural-test/typesregistry-test.js',
            'test/structural-test/roots-structural-test/overrider_type-structural-test.js',
            'test/structural-test/utils-structural-test/console_svce-structural-test.js',
            'test/structural-test/identifying-structural-test/identifier_type-structural-test.js',
            'test/structural-test/identifying-structural-test/record_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recordingpolicy_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recordingpolicy_keepall_type-structural-test.js',
            'test/structural-test/identifying-structural-test/dumpingpolicy_type-structural-test.js',
            'test/structural-test/identifying-structural-test/dumpingpolicy_filterkinds_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recorder_type-structural-test.js',
            'test/structural-test/common-structural-test/common_type-structural-test.js',
            'test/structural-test/common-structural-test/common_type-recorder-structural-test.js',
            'test/structural-test/common-structural-test/common_type-misc-structural-test.js',
            'test/structural-test/common-structural-test/qngmock.js',
            'test/structural-test/common-structural-test/prominstr_type-structural-test.js',
            'test/structural-test/common-structural-test/withprominstr_type-structural-test.js',
            'test/structural-test/common-structural-test/appbaseurlmock.js',
            'test/structural-test/common-structural-test/apibaseurlmock.js',
            'test/structural-test/common-structural-test/locationngmock.js',
            'test/structural-test/common-structural-test/common_ctrl_type-structural-test.js',
            'test/structural-test/common-structural-test/common_svce_type-structural-test.js',
            'test/structural-test/common-structural-test/prominstrexception-structural-test.js',


            'test/behavioral-test/utils-behavioral-test/console_svce-behavioral-test.js',


            'test/behavioral-test/common-behavioral-test/common_type-record-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_type-recordingpolicy_keepall-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_type-recordingpolicy_keepall-donotkeep-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_type-dumpingpolicy_filterkinds_all-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_type-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_type-dumpingpolicy_filterkinds_some-behavioral-test.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        port:  9876,
        colors:  true ,

        logLevel: config.LOG_INFO,

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });
};