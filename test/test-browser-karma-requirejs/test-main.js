/*
 * test-main.js
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



requirejs.config({
    
    waitSeconds: 60, /* Usually 7 */
    
    // Karma serves files from '/base'
    baseUrl: '/base',
    
    /* ask Require.js to load these scripts, which shall include all our tests, but not the modules to be tested,
    which shall be loaded as dependencies of the tests below.
     */
    deps: [
        
        "typesregistry_type_structural_test",
        "typesregistry_svce_structural_test",
        "overrider_type_structural_test",
        "overrider_svce_structural_test",
        "eventkinds_common_structural_test",
        "console_type_structural_test",
        "console_svce_structural_test",
        "stacktrace_type_structural_test",
        "stacktrace_svce_structural_test",
        "exceptiondetails_type_structural_test",
        "exceptiondetails_svce_structural_test",
        "identifier_type_structural_test",
        "identifier_svce_structural_test",
        "record_type_structural_test",
        "recordingpolicy_type_structural_test",
        "recordingpolicy_keepall_type_structural_test",
        "recordingpolicy_keepsome_type_structural_test",
        "recordingpolicy_keeprecent_type_structural_test",
        "dumpingpolicy_type_structural_test",
        "dumpingpolicy_filterkinds_type_structural_test",
        "dumpingpolicy_triggerkinds_type_structural_test",
        "recorder_type_structural_test",
        "recorder_svce_structural_test",
        "traversals_structural_test",
        "checks_structural_test",
        "decoratesystemprototypes_structural_test",
        "common_type_structural_test",
        "allmodules_structural_test",
        
        "typesregistry_svce_behavioral_test",
        "overrider_svce_behavioral_test",
        "console_svce_behavioral_test",
        "identifier_svce_behavioral_test",
        "traversals_fgFirstDiff_behavioral_test",
      "common_record_behavioral_test",
       "common_recordingpolicy_keepall_behavioral_test",
       "common_recordingpolicy_keepall_donotkeep_behavioral_test",
       "common_recordingpolicy_keepsome_behavioral_test",
       "common_recordingpolicy_keeprecent_behavioral_test",
       "common_dumpingpolicy_filterkinds_all_behavioral_test",
       "common_dumpingpolicy_filterkinds_maynotdump_behavioral_test",
       "common_dumpingpolicy_filterkinds_some_behavioral_test",
       "common_dumpingpolicy_triggerkinds_all_behavioral_test",
       "common_dumpingpolicy_triggerkinds_none_behavioral_test",
       "common_dumpingpolicy_triggerkinds_some_behavioral_test",
       "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keeprecent_behavioral_test",
       "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome_behavioral_test"
    ],
    
    /* map test modules from symbolic name to a file system path WITHOUT THE .js FILE EXTENSION relative to base ... baseURL?
     */
    paths: {
        'typesregistry_type_structural_test':                    './test/structural-test/typesregistry-structural-test/typesregistry_type-structural-test',
        'typesregistry_svce_structural_test':                    './test/structural-test/typesregistry-structural-test/typesregistry_svce-structural-test',
        'overrider_type_structural_test':                        './test/structural-test/overrider-structural-test/overrider_type-structural-test',
        'overrider_svce_structural_test':                        './test/structural-test/overrider-structural-test/overrider_svce-structural-test',
        
        'eventkinds_common_structural_test':                     './test/structural-test/eventkinds-structural-test/eventkinds_common-structural-test',
        'console_type_structural_test':                          './test/structural-test/console-structural-test/console_type-structural-test',
        'console_svce_structural_test':                          './test/structural-test/console-structural-test/console_svce-structural-test',
        'stacktrace_type_structural_test':                       './test/structural-test/exceptionstack-structural-test/stacktrace_type-structural-test',
        'stacktrace_svce_structural_test':                       './test/structural-test/exceptionstack-structural-test/stacktrace_svce-structural-test',
        'exceptiondetails_type_structural_test':                 './test/structural-test/exceptionstack-structural-test/exceptiondetails_type-structural-test',
        'exceptiondetails_svce_structural_test':                 './test/structural-test/exceptionstack-structural-test/exceptiondetails_svce-structural-test',
        'identifier_type_structural_test':                       './test/structural-test/identifying-structural-test/identifier_type-structural-test',
        'identifier_svce_structural_test':                       './test/structural-test/identifying-structural-test/identifier_svce-structural-test',
        'record_type_structural_test':                           './test/structural-test/recording-structural-test/record_type-structural-test',
        'recordingpolicy_type_structural_test':                  './test/structural-test/recording-structural-test/recordingpolicy_type-structural-test',
        'recordingpolicy_keepall_type_structural_test':          './test/structural-test/recording-structural-test/recordingpolicy_keepall_type-structural-test',
        'recordingpolicy_keepsome_type_structural_test':         './test/structural-test/recording-structural-test/recordingpolicy_keepsome_type-structural-test',
        'recordingpolicy_keeprecent_type_structural_test':       './test/structural-test/recording-structural-test/recordingpolicy_keeprecent_type-structural-test',
        'dumpingpolicy_type_structural_test':                    './test/structural-test/recording-structural-test/dumpingpolicy_type-structural-test',
        'dumpingpolicy_filterkinds_type_structural_test':        './test/structural-test/recording-structural-test/dumpingpolicy_filterkinds_type-structural-test',
        'dumpingpolicy_triggerkinds_type_structural_test':       './test/structural-test/recording-structural-test/dumpingpolicy_triggerkinds_type-structural-test',
        'recorder_type_structural_test':                         './test/structural-test/recording-structural-test/recorder_type-structural-test',
        'recorder_svce_structural_test':                         './test/structural-test/recording-structural-test/recorder_svce-structural-test',
        'traversals_structural_test':                            './test/structural-test/utils-structural-test/traversals-structural-test',
        'checks_structural_test':                                './test/structural-test/utils-structural-test/checks-structural-test',
        'decoratesystemprototypes_structural_test':              './test/structural-test/lowinstrument-structural-test/decoratesystemprototypes-structural-test',
        'common_type_structural_test':                           './test/structural-test/common-structural-test/common_type-structural-test',
        'allmodules_structural_test':                            './test/structural-test/allmodules-structural-test',
        'typesregistry_svce_behavioral_test':                    './test/behavioral-test/typesregistry-behavioral-test/typesregistry_svce-behavioral-test',
        'overrider_svce_behavioral_test':                        './test/behavioral-test/overrider-behavioral-test/overrider_svce-behavioral-test',
        'console_svce_behavioral_test':                          './test/behavioral-test/console-behavioral-test/console_svce-behavioral-test',
        'identifier_svce_behavioral_test':                       './test/behavioral-test/identifying-behavioral-test/identifier_svce-behavioral-test',
        'traversals_fgFirstDiff_behavioral_test':                './test/behavioral-test/utils-behavioral-test/traversals-fgFirstDiff-behavioral-test',
        'common_record_behavioral_test':                    './test/behavioral-test/common-behavioral-test/common-record-behavioral-test',
        'common_recordingpolicy_keepall_behavioral_test':   './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keepall-behavioral-test',
        'common_recordingpolicy_keepall_donotkeep_behavioral_test':   './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keepall_donotkeep-behavioral-test',
        'common_recordingpolicy_keepsome_behavioral_test':  './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keepsome-behavioral-test',
        'common_recordingpolicy_keeprecent_behavioral_test':  './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keeprecent-behavioral-test',
        'common_dumpingpolicy_filterkinds_all_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_all-behavioral-test',
        'common_dumpingpolicy_filterkinds_maynotdump_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_maynotdump-behavioral-test',
        'common_dumpingpolicy_filterkinds_some_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_some-behavioral-test',
        'common_dumpingpolicy_triggerkinds_all_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_all-behavioral-test',
        'common_dumpingpolicy_triggerkinds_none_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_none-behavioral-test',
        'common_dumpingpolicy_triggerkinds_some_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-behavioral-test',
        'common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test',
        'common_dumpingpolicy_triggerkinds_some_recordingpolicy_keeprecent_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-recordingpolicy_keeprecent-behavioral-test'
    },
    
    // start test run, once Require.js is done loading scripts
    callback: window.__karma__.start
});


