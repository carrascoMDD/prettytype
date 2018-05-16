/*
 * test-main.js
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



requirejs.config({
    
    waitSeconds: 60, /* Usually 7 */
    
    // Karma serves files from '/base'
    baseUrl: '/base',
    
    /* ask Require.js to load these scripts, which shall include all our tests, but not the modules to be tested,
    which shall be loaded as dependencies of the tests below.
     */
    deps: [
        
        "m_typesregistry_structural_test",
        "m_overrider_type_structural_test",
        "m_overrider_svce_structural_test",
        "m_traversals_structural_test",
        "m_checks_structural_test",
        "m_console_svce_structural_test",
        "m_stacktrace_svce_structural_test",
        "m_exceptiondetails_svce_structural_test",
        "m_decoratesystemprototypes_svce_structural_test",
        "m_eventkinds_common_structural_test",
    
        "m_identifier_type_structural_test",
        "m_identifier_svce_structural_test",
        "m_record_type_structural_test",
        "m_recordingpolicy_type_structural_test",
        "m_recordingpolicy_keepall_type_structural_test",
        "m_recordingpolicy_keepsome_type_structural_test",
        "m_recordingpolicy_keeprecent_type_structural_test",
        "m_dumpingpolicy_type_structural_test",
        "m_dumpingpolicy_filterkinds_type_structural_test",
        "m_dumpingpolicy_triggerkinds_type_structural_test",
        "m_recorder_type_structural_test",
        "m_recorder_svce_structural_test",

        "m_common_type_structural_test",
        "m_common_type_eventkinds_common_structural_test",
    
        "m_index_structural_test",
    
        
        "m_typesregistry_behavioral_test",
        "m_overrider_svce_behavioral_test",
        
        "m_traversals_fgFirstDiff_behavioral_test",
        "m_console_svce_behavioral_test",
        
        "m_identifier_svce_behavioral_test",
        
        "m_common_record_behavioral_test",
        "m_common_recordingpolicy_keepall_behavioral_test",
        "m_common_recordingpolicy_keepall_donotkeep_behavioral_test",
        "m_common_recordingpolicy_keepsome_behavioral_test",
        "m_common_recordingpolicy_keeprecent_behavioral_test",
        "m_common_dumpingpolicy_filterkinds_all_behavioral_test",
        "m_common_dumpingpolicy_filterkinds_maynotdump_behavioral_test",
        "m_common_dumpingpolicy_filterkinds_some_behavioral_test",
        "m_common_dumpingpolicy_triggerkinds_all_behavioral_test",
        "m_common_dumpingpolicy_triggerkinds_none_behavioral_test",
        "m_common_dumpingpolicy_triggerkinds_some_behavioral_test",
        "m_common_dumpingpolicy_triggerkinds_some_recordingpolicy_keeprecent_behavioral_test",
        "m_common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome_behavioral_test"

    ],
    
    /* map test modules from symbolic name to a file system path WITHOUT THE .js FILE EXTENSION relative to base ... baseURL?
     */
    paths: {
        'm_typesregistry_structural_test':                    './test/structural-test/modboot-structural-test/typesregistry-structural-test',
        'm_overrider_type_structural_test':                   './test/structural-test/modboot-structural-test/overrider_type-structural-test',
        'm_overrider_svce_structural_test':                   './test/structural-test/modboot-structural-test/overrider_svce-structural-test',
        'm_traversals_structural_test':                       './test/structural-test/utils-structural-test/traversals-structural-test',
        'm_checks_structural_test':                           './test/structural-test/utils-structural-test/checks-structural-test',
        'm_console_svce_structural_test':                     './test/structural-test/utils-structural-test/console_svce-structural-test',
        'm_stacktrace_svce_structural_test':                  './test/structural-test/utils-structural-test/stacktrace_svce-structural-test',
        'm_exceptiondetails_svce_structural_test':            './test/structural-test/utils-structural-test/exceptiondetails_svce-structural-test',
        'm_decoratesystemprototypes_svce_structural_test':    './test/structural-test/utils-structural-test/decoratesystemprototypes_svce-structural-test',
      
        'm_eventkinds_common_structural_test':                './test/structural-test/eventkinds-structural-test/eventkinds_common-structural-test',
        
        'm_identifier_type_structural_test':                  './test/structural-test/identifying-structural-test/identifier_type-structural-test',
        'm_identifier_svce_structural_test':                  './test/structural-test/identifying-structural-test/identifier_svce-structural-test',
        'm_record_type_structural_test':                      './test/structural-test/identifying-structural-test/record_type-structural-test',
        'm_recordingpolicy_type_structural_test':             './test/structural-test/identifying-structural-test/recordingpolicy_type-structural-test',
        'm_recordingpolicy_keepall_type_structural_test':     './test/structural-test/identifying-structural-test/recordingpolicy_keepall_type-structural-test',
        'm_recordingpolicy_keepsome_type_structural_test':    './test/structural-test/identifying-structural-test/recordingpolicy_keepsome_type-structural-test',
        'm_recordingpolicy_keeprecent_type_structural_test':  './test/structural-test/identifying-structural-test/recordingpolicy_keeprecent_type-structural-test',
        'm_dumpingpolicy_type_structural_test':               './test/structural-test/identifying-structural-test/dumpingpolicy_type-structural-test',
        'm_dumpingpolicy_filterkinds_type_structural_test':   './test/structural-test/identifying-structural-test/dumpingpolicy_filterkinds_type-structural-test',
        'm_dumpingpolicy_triggerkinds_type_structural_test':  './test/structural-test/identifying-structural-test/dumpingpolicy_triggerkinds_type-structural-test',
        'm_recorder_type_structural_test':                    './test/structural-test/identifying-structural-test/recorder_type-structural-test',
        'm_recorder_svce_structural_test':                    './test/structural-test/identifying-structural-test/recorder_svce-structural-test',
    
        'm_common_type_structural_test':                      './test/structural-test/common-structural-test/common_type-structural-test',
        'm_common_type_eventkinds_common_structural_test':    './test/structural-test/common-structural-test/common_type-eventkinds_common-structural-test',
    
        'm_index_structural_test':                            './test/structural-test/index-structural-test',
        
        
        'm_typesregistry_behavioral_test':                    './test/behavioral-test/modboot-behavioral-test/typesregistry-behavioral-test',
        'm_overrider_svce_behavioral_test':                   './test/behavioral-test/modboot-behavioral-test/overrider_svce-behavioral-test',
        
        'm_traversals_fgFirstDiff_behavioral_test':           './test/behavioral-test/utils-behavioral-test/traversals-fgFirstDiff-behavioral-test',
        'm_console_svce_behavioral_test':                     './test/behavioral-test/utils-behavioral-test/console_svce-behavioral-test',
    
        'm_identifier_svce_behavioral_test':                  './test/behavioral-test/identifying-behavioral-test/identifier_svce-behavioral-test',
    
        'm_common_record_behavioral_test':                    './test/behavioral-test/common-behavioral-test/common-record-behavioral-test',
        'm_common_recordingpolicy_keepall_behavioral_test':   './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keepall-behavioral-test',
        'm_common_recordingpolicy_keepall_donotkeep_behavioral_test':   './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keepall_donotkeep-behavioral-test',
        'm_common_recordingpolicy_keepsome_behavioral_test':  './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keepsome-behavioral-test',
        'm_common_recordingpolicy_keeprecent_behavioral_test':  './test/behavioral-test/common-behavioral-test/common-recordingpolicy_keeprecent-behavioral-test',
        'm_common_dumpingpolicy_filterkinds_all_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_all-behavioral-test',
        'm_common_dumpingpolicy_filterkinds_maynotdump_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_maynotdump-behavioral-test',
        'm_common_dumpingpolicy_filterkinds_some_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_filterkinds_some-behavioral-test',
        'm_common_dumpingpolicy_triggerkinds_all_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_all-behavioral-test',
        'm_common_dumpingpolicy_triggerkinds_none_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_none-behavioral-test',
        'm_common_dumpingpolicy_triggerkinds_some_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-behavioral-test',
        'm_common_dumpingpolicy_triggerkinds_some_recordingpolicy_keeprecent_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-recordingpolicy_keeprecent-behavioral-test',
        'm_common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome_behavioral_test': './test/behavioral-test/common-behavioral-test/common-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test'
    },

    // start test run, once Require.js is done loading scripts
    callback: window.__karma__.start
});


