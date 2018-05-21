/*
 * karma-angularjs.conf.js
 *
 * Created @author Antonio Carrasco Valero 201805111532
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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
    
    /* Order of files is mandatory as stated to the dependency injection in angular module definitions */
    
    '../../bower_components/angular/angular.js',
    '../../bower_components/angular-mocks/angular-mocks.js',
    
    /*
    './dist/prettytype.min.js',
    */
    
    '../../src/modboot/logmoduleloads.js',
    
    '../../src/modboot/typesregistry.js',
    
    '../../src/modboot/modboot_types.js',
    '../../src/modboot/overrider_type.js',
    '../../src/modboot/overrider_svce.js',
    
    
    '../../src/utils/console_svce.js',
    '../../src/utils/traversals.js',
    '../../src/utils/checks.js',
    '../../src/utils/stacktrace_svce.js',
    '../../src/utils/exceptiondetails_svce.js',
    '../../src/utils/decoratesystemprototypes_svce.js',
    
    '../../src/eventkinds/eventkinds_common.js',
    
    '../../src/identifying/identifying_types.js',
    '../../src/identifying/identifier_type.js',
    '../../src/identifying/identifier_svce.js',
    '../../src/identifying/record_type.js',
    '../../src/identifying/recordingpolicy_type.js',
    '../../src/identifying/recordingpolicy_keepall_type.js',
    '../../src/identifying/recordingpolicy_keepsome_type.js',
    '../../src/identifying/recordingpolicy_keeprecent_type.js',
    '../../src/identifying/dumpingpolicy_type.js',
    '../../src/identifying/dumpingpolicy_filterkinds_type.js',
    '../../src/identifying/dumpingpolicy_triggerkinds_type.js',
    '../../src/identifying/recorder_type.js',
    '../../src/identifying/recorder_svce.js',
    
    '../../src/common/common_types.js',
    '../../src/common/common_type.js',
    
    '../../src/index.js',
    

    '../structural-test/modboot-structural-test/typesregistry-structural-test.js',
    '../structural-test/modboot-structural-test/overrider_type-structural-test.js',
    '../structural-test/modboot-structural-test/overrider_svce-structural-test.js',
    
    '../structural-test/utils-structural-test/traversals-structural-test.js',
    '../structural-test/utils-structural-test/checks-structural-test.js',
    '../structural-test/utils-structural-test/console_svce-structural-test.js',
    '../structural-test/utils-structural-test/stacktrace_svce-structural-test.js',
    '../structural-test/utils-structural-test/exceptiondetails_svce-structural-test.js',
    '../structural-test/utils-structural-test/decoratesystemprototypes_svce-structural-test.js',
    
    '../structural-test/eventkinds-structural-test/eventkinds_common-structural-test.js',
    
    '../structural-test/identifying-structural-test/identifier_type-structural-test.js',
    '../structural-test/identifying-structural-test/identifier_svce-structural-test.js',
    '../structural-test/identifying-structural-test/record_type-structural-test.js',
    '../structural-test/identifying-structural-test/recordingpolicy_type-structural-test.js',
    '../structural-test/identifying-structural-test/recordingpolicy_keepall_type-structural-test.js',
    '../structural-test/identifying-structural-test/recordingpolicy_keepsome_type-structural-test.js',
    '../structural-test/identifying-structural-test/recordingpolicy_keeprecent_type-structural-test.js',
    '../structural-test/identifying-structural-test/dumpingpolicy_type-structural-test.js',
    '../structural-test/identifying-structural-test/dumpingpolicy_filterkinds_type-structural-test.js',
    '../structural-test/identifying-structural-test/dumpingpolicy_triggerkinds_type-structural-test.js',
    '../structural-test/identifying-structural-test/recorder_type-structural-test.js',
    '../structural-test/identifying-structural-test/recorder_svce-structural-test.js',
    
    '../structural-test/common-structural-test/common_type-structural-test.js',
    '../structural-test/common-structural-test/common_type-eventkinds_common-structural-test.js',
    
    '../structural-test/index-structural-test.js',
    
    
    '../behavioral-test/modboot-behavioral-test/typesregistry-behavioral-test.js',
    '../behavioral-test/modboot-behavioral-test/overrider_svce-behavioral-test.js',
    
    '../behavioral-test/utils-behavioral-test/traversals-fgFirstDiff-behavioral-test.js',
    '../behavioral-test/utils-behavioral-test/console_svce-behavioral-test.js',
    
    '../behavioral-test/identifying-behavioral-test/identifier_svce-behavioral-test.js',
    
    '../behavioral-test/common-behavioral-test/common-record-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-recordingpolicy_keepall-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-recordingpolicy_keepall_donotkeep-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-recordingpolicy_keepsome-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-recordingpolicy_keeprecent-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_all-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_some-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_all-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_none-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-recordingpolicy_keeprecent-behavioral-test.js',
    '../behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test.js'
];


module.exports = function(config){
    config.set({
        
        basePath : './',
        
        files: someKarmaConfFiles,
        
        autoWatch : false,
        
        frameworks: ['jasmine'],
        
        browsers : ['Chrome'],
        
        port:  9877,
        colors:  true ,
        
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
    
        proxies: {
        },
    
        logLevel: config.LOG_DEBUG,
        /* logLevel: config.LOG_INFO,
           logLevel: config.LOG_DEBUG
         */
    
        browserNoActivityTimeout: 240000
    });
};
