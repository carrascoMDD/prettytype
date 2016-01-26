module.exports = function(config){
    config.set({

        basePath : './',


        files: [
            'src/**/*.js',
            'test/typesregistry-test.js',
            'test/roots-test/overrider_type-test.js',
            'test/identifying-test/identifier_type-test.js',
            'test/identifying-test/recorder_type-test.js',
            'test/common-test/common_type-test.js',
            'test/common-test/common_type-record-test.js',
            'test/common-test/common_type-misc-test.js',
            'test/common-test/qngmock.js',
            'test/common-test/prominstr_type-test.js',
            'test/common-test/withprominstr_type-test.js',
            'test/common-test/appbaseurlmock.js',
            'test/common-test/apibaseurlmock.js',
            'test/common-test/locationngmock.js',
            'test/common-test/common_ctrl_type-test.js',
            'test/common-test/common_svce_type-test.js',
            'test/common-test/prominstrexception-test.js'
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