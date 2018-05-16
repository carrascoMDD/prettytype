/*
 * common-dumpingpolicy_triggerkinds_some-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201611031210
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Jasmine tests in Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

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



/// <reference path="src/common/common_svce.js"/>
"use strict";



var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recorder_svce,
                            theSS_common_type,
                            theSS_dumpingpolicy_triggerkinds_type,
                            theSS_recordingpolicy_keepsome_type,
                            theSS_console_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test";
    var ModulePackages = "test/behavioral-test/utils-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_type   = null;
        var aM_common_type     = null;
        var aM_dumpingpolicy_triggerkinds_type = null;
        var aM_recordingpolicy_keepsome_type = null;
        var aM_console_svce = null;
    
    
    
        var aMustKeepRecordsMaxNumber = 10;
        var aBeforeRecordMillis = new Date().getMilliseconds();
    
        var aMethodName = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theMethodName";
        var anEventKind = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theEventKind";
        var aData       = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theData";
        var aReason     = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theReason";
        var aDetail     = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theDetail";
    
        var aMethodName2 = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theMethodName2";
        var anEventKind2 = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theEventKind2";
        var aData2       = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theData2";
        var aReason2     = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theReason2";
        var aDetail2     = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theDetail2";
    
        var aMethodName3 = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theMethodName3";
        var anEventKind3 = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theEventKind3";
        var aData3       = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theData3";
        var aReason3     = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theReason3";
        var aDetail3     = "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome__theDetail3";
    
        var aRecordPointerName_triggerkinds_01 = "recordPointerName_triggerkinds_01";
        var aRecordPointerName_triggerkinds_02 = "recordPointerName_triggerkinds_02";
        var aRecordPointerName_triggerkinds_03 = "recordPointerName_triggerkinds_03";
        var aRecordPointerName_triggerkinds_04 = "recordPointerName_triggerkinds_04";
    
        var aLocalRecorder = null;
        var aCommon             = null;
        var aCommon_Recorder        = null;
        var aCommon_Identifier      = null;
        var aDumpingPolicyTriggerKinds = null;
    
        var someCollectedLogsBefore = null;
        var aNumCollectedLogsBefore = null;
    
        var aRecordingPolicyKeepSome = null;
    
        var aCommon_Recorder_SetRecordingPolicy = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = null;
    
        var aCommon_Recorder_SetDumpingPolicy                =  null;
        var aCommon_Recorder_SetDumpingPolicy_MayDumpRecords =  null;
        var aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = null;
        var aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = null;
    
        var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords                      = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords                = null;
        var someCollectedLogsAfterExactlyMaxRecords                                                     = null;
        var aNumCollectedLogsAfterExactlyMaxRecords                                                     = null;
        var otherRecord                                                                                 = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger                   = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger                   = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger                   = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger     = null;
        var someCollectedLogsAfterExceedingMaxRecordsNoTrigger                                          = null;
        var aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger                                          = null;
        var anotherRecord                                                                               = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering                  = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering                  = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering                  = null;
        var aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering                  = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering    = null;
        var someCollectedLogsAfterExceedingMaxRecordsTriggering                                         = null;
        var aNumCollectedLogsAfterExceedingMaxRecordsTriggering                                         = null;
    
    
    
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes', 'consoleSvce'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderType_, _CommonType_, _DumpingPolicyTriggerKindsType_, _RecordingPolicyKeepSomeType_, _ConsoleSvce_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_type   = _RecorderType_;
                aM_common_type     = _CommonType_;
                aM_dumpingpolicy_triggerkinds_type = _DumpingPolicyTriggerKindsType_;
                aM_recordingpolicy_keepsome_type = _RecordingPolicyKeepSomeType_;
                aM_console_svce    = _ConsoleSvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_type     = require('../../../src/identifying/recorder_type');
            aM_common_type       = require('../../../src/common/common_type');
            aM_dumpingpolicy_triggerkinds_type = require('../../../src/identifying/dumpingpolicy_triggerkinds_type');
            aM_recordingpolicy_keepsome_type = require('../../../src/identifying/recordingpolicy_keepsome_type');
            aM_console_svce      = require('../../../src/utils/console_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_type   = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aM_dumpingpolicy_triggerkinds_type = theSS_dumpingpolicy_triggerkinds_type;
            aM_recordingpolicy_keepsome_type = theSS_recordingpolicy_keepsome_type;
            aM_console_svce    = theSS_console_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recorder_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recorder_type"));
            aM_common_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "common", "common_type"));
            aM_dumpingpolicy_triggerkinds_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_triggerkinds_type"));
            aM_recordingpolicy_keepsome_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepsome_type"));
            aM_console_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "utils", "console_svce"));
        }
    
    
    
    
    
        it("Dumps two recorded Records", function () {
    
            aLocalRecorder = new aM_recorder_type.Recorder_Constructor( aCommon_title, aM_identifier_svce);
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aLocalRecorder);
    
    
            aCommon_Recorder   = aCommon._v_Recorder;
            aCommon_Identifier = aCommon._v_Identifier;
    
            aRecordingPolicyKeepSome = new aM_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_Constructor( "RecordingPolicy-for-common_svce-dumpingpolicy_triggerkinds_some-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
            aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepSome);
            aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();
            aRecordingPolicyKeepSome.pSetMustKeepRecords( true);
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
            aRecordingPolicyKeepSome.pSetMustKeepRecordsMaxNumber( aMustKeepRecordsMaxNumber);
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsMaxNumber();
    
            aDumpingPolicyTriggerKinds = new aM_dumpingpolicy_triggerkinds_type.DumpingPolicyTriggerKinds_Constructor( "DumpingPolicy-for-common_svce-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
            aDumpingPolicyTriggerKinds.pSetMayDumpRecords( true);
            aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole( [ ]);
            aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump( [ anEventKind3]);
            aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyTriggerKinds);
            aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
            aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
            aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = aCommon_Recorder_SetDumpingPolicy.fEventKindsNotForConsole();
            aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = aCommon_Recorder_SetDumpingPolicy.fEventKindsTriggeringDump();
            aCommon_Recorder.pClearKeptRecords();
    
    
            aM_console_svce.pSetWriteToConsole(          true);
            aM_console_svce.pSetCollectLogs(             true);
            aM_console_svce.pSetMaxCollectedLogsLength(  1000000);
            aM_console_svce.clear();
            someCollectedLogsBefore = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsBefore = someCollectedLogsBefore.length;
    
            aBeforeRecordMillis = new Date().getMilliseconds();
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_01, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
    
            for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aMustKeepRecordsMaxNumber; aSubmittedRecordIdx++) {
                var aPrefix = "0000" + aSubmittedRecordIdx;
                aPrefix = aPrefix.substr( aPrefix.length - 4);
                var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
            }
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_02, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
            aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
            someCollectedLogsAfterExactlyMaxRecords = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsAfterExactlyMaxRecords = someCollectedLogsAfterExactlyMaxRecords.length;
    
            otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_03, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
            aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
            aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
            someCollectedLogsAfterExceedingMaxRecordsNoTrigger = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger = someCollectedLogsAfterExceedingMaxRecordsNoTrigger.length;
    
            anotherRecord = aCommon.fRecord( aMethodName3, anEventKind3, aData3, aReason3, aDetail3);
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_04, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
            aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
            aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
            aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_04);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
            someCollectedLogsAfterExceedingMaxRecordsTriggering = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsAfterExceedingMaxRecordsTriggering = someCollectedLogsAfterExceedingMaxRecordsTriggering.length;
    
            aM_console_svce.pSetCollectLogs(    false);
            aM_console_svce.clear();
    
    
    
            
            expect( aCommon.fRecord).not.toBeUndefined();
            expect( typeof aCommon.fRecord).toBe( "function");
    
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepSome);
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber).toBe( aMustKeepRecordsMaxNumber);
    
    
            expect( aCommon_Recorder_SetDumpingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetDumpingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetDumpingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetDumpingPolicy).toBe( aDumpingPolicyTriggerKinds);
            expect( aCommon_Recorder_SetDumpingPolicy_MayDumpRecords).toBe( true);
            expect( aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole.length).toBe( 0);
            expect( aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump.length).toBe( 1);
            expect( aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump[ 0]).toBe( anEventKind3);
    
    
    
    
            expect( aNumCollectedLogsBefore).toBe( 0);
    
    
            expect( aNumCollectedLogsAfterExactlyMaxRecords).toBe( 0);
            expect( aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger).toBe( 0);
            expect( aNumCollectedLogsAfterExceedingMaxRecordsTriggering).toBe( 10);
            expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords).toBe( aMustKeepRecordsMaxNumber - 1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger).toBe( -2);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger).toBe( aMustKeepRecordsMaxNumber - 2);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger).toBe( aMustKeepRecordsMaxNumber - 1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering).toBe( -3);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 3);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 2);
            expect( aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 1);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords).toBe( undefined);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords).toBe( undefined);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger).toBe( undefined);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 1);
        });
        
    });
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_common_dumpingpolicy_triggerkinds_some_recordingpolicy_keepsome_behavioral_test",
        [
            "m_identifier_svce",
            "m_recorder_type",
            "m_common_type",
            "m_dumpingpolicy_triggerkinds_type",
            "m_recordingpolicy_keepsome_type",
            "m_console_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



