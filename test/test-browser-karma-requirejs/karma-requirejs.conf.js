/*
 * karma-requirejs.conf.js
 *
 * Created @author Antonio Carrasco Valero 201805111532
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */

var someKarmaConfFiles = [
    
    './test/test-browser-karma-requirejs/test-main.js',
    
    './src/typesregistry/typesregistry_type.js',
    './src/typesregistry/typesregistry_svce.js',
    './src/overrider/overrider_type.js',
    './src/overrider/overrider_svce.js',
    './src/eventkinds/eventkinds_common.js',
    './src/console/console_type.js',
    './src/console/console_svce.js',
    "./src/exceptionstack/stacktrace_type.js",
    "./src/exceptionstack/stacktrace_svce.js",
    "./src/exceptionstack/exceptiondetails_type.js",
    "./src/exceptionstack/exceptiondetails_svce.js",
    "./src/identifying/identifier_type.js",
    "./src/identifying/identifier_svce.js",
    "./src/recording/record_type.js",
    "./src/recording/recordingpolicy_type.js",
    "./src/recording/recordingpolicy_keepall_type.js",
    "./src/recording/recordingpolicy_keepsome_type.js",
    "./src/recording/recordingpolicy_keeprecent_type.js",
    "./src/recording/dumpingpolicy_type.js",
    "./src/recording/dumpingpolicy_filterkinds_type.js",
    "./src/recording/dumpingpolicy_triggerkinds_type.js",
    "./src/recording/recorder_type.js",
    "./src/recording/recorder_svce.js",
    "./src/utils/traversals.js",
    "./src/utils/checks.js",
    "./src/lowinstrument/decoratesystemprototypes.js",
    "./src/common/common_type.js",

    
    './test/structural-test/typesregistry-structural-test/typesregistry_type-structural-test.js',
    './test/structural-test/typesregistry-structural-test/typesregistry_svce-structural-test.js',
    
    './test/structural-test/overrider-structural-test/overrider_type-structural-test.js',
    './test/structural-test/overrider-structural-test/overrider_svce-structural-test.js',
    './test/structural-test/eventkinds-structural-test/eventkinds_common-structural-test.js',
    './test/structural-test/console-structural-test/console_type-structural-test.js',
    './test/structural-test/console-structural-test/console_svce-structural-test.js',
    './test/structural-test/exceptionstack-structural-test/stacktrace_type-structural-test.js',
    './test/structural-test/exceptionstack-structural-test/stacktrace_svce-structural-test.js',
    './test/structural-test/exceptionstack-structural-test/exceptiondetails_type-structural-test.js',
    './test/structural-test/exceptionstack-structural-test/exceptiondetails_svce-structural-test.js',
    "./test/structural-test/identifying-structural-test/identifier_type-structural-test.js",
    "./test/structural-test/identifying-structural-test/identifier_svce-structural-test.js",
    "./test/structural-test/recording-structural-test/record_type-structural-test.js",
    "./test/structural-test/recording-structural-test/recordingpolicy_type-structural-test.js",
    "./test/structural-test/recording-structural-test/recordingpolicy_keepall_type-structural-test.js",
    "./test/structural-test/recording-structural-test/recordingpolicy_keepsome_type-structural-test.js",
    "./test/structural-test/recording-structural-test/recordingpolicy_keeprecent_type-structural-test.js",
    "./test/structural-test/recording-structural-test/dumpingpolicy_type-structural-test.js",
    "./test/structural-test/recording-structural-test/dumpingpolicy_filterkinds_type-structural-test.js",
    "./test/structural-test/recording-structural-test/dumpingpolicy_triggerkinds_type-structural-test.js",
    "./test/structural-test/recording-structural-test/recorder_type-structural-test.js",
    "./test/structural-test/recording-structural-test/recorder_svce-structural-test.js",
    "./test/structural-test/utils-structural-test/traversals-structural-test.js",
    "./test/structural-test/utils-structural-test/checks-structural-test.js",
    "./test/structural-test/lowinstrument-structural-test/decoratesystemprototypes-structural-test.js",
    "./test/structural-test/common-structural-test/common_type-structural-test.js"
];


module.exports = function(config){
    config.set({
        
        basePath : '../..',
        
        files: someKarmaConfFiles,
        
        autoWatch : false,
    
        frameworks: ['jasmine', 'requirejs'],
        
        browsers : ['Chrome'],
        
        port:  9877,
        colors:  true ,
        
        /* plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
       
    
        proxies: {
        },
        */
        logLevel: config.LOG_INFO,
        /* logLevel: config.LOG_INFO,
           logLevel: config.LOG_DEBUG
         */
    
        browserNoActivityTimeout: 240000
    
    
    });
};
