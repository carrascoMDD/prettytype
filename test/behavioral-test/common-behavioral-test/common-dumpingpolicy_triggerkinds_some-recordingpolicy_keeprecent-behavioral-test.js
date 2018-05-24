/*
 * common-dumpingpolicy_triggerkinds_some-recordingpolicy_keeprecent-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201611031416
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
                            theSS_recorder_type,
                            theSS_common_type,
                            theSS_dumpingpolicy_triggerkinds_type,
                            theSS_recordingpolicy_keeprecent_type,
                            theSS_console_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-dumpingpolicy_triggerkinds_some-recordingpolicy_keeprecent-behavioral-test";
    var ModulePackages = "test/behavioral-test/common-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_type   = null;
        var aM_common_type     = null;
        var aM_dumpingpolicy_triggerkinds_type = null;
        var aM_recordingpolicy_keeprecent_type = null;
        var aM_console_svce = null;
    
    
        var aMustKeepRecordsMaxNumber = 10;
        var aNumRecordsToSubmit = 10;
        var aMustKeepRecordsMaxNumber = aNumRecordsToSubmit * 1000; /* Do not prune because of exceeding any records collection size limit */
        var aMustKeepRecordsRecentMillis = 100;
        var aDelayBeforeSecondSubmissionMillis = aMustKeepRecordsRecentMillis * 3;
        var anExtraDelayForTestsMillis = 100; /* Avoid timing too tight to event expiration deadline. There is no need for fine precission on the test, and garbage collection or asynchronous testing machinery could sometimes introduce some extra milliseconds delay */
    
        var aBeforeRecordMillis = new Date().getMilliseconds();
    
        var aMethodName = ModuleFullName + "__theMethodName";
        var anEventKind = ModuleFullName + "__theEventKind";
        var aData       = ModuleFullName + "__theData";
        var aReason     = ModuleFullName + "__theReason";
        var aDetail     = ModuleFullName + "__theDetail";
    
        var aMethodName2 = ModuleFullName + "__theMethodName2";
        var anEventKind2 = ModuleFullName + "__theEventKind2";
        var aData2       = ModuleFullName + "__theData2";
        var aReason2     = ModuleFullName + "__theReason2";
        var aDetail2     = ModuleFullName + "__theDetail2";
    
        var aMethodName3 = ModuleFullName + "__theMethodName3";
        var anEventKind3 = ModuleFullName + "__theEventKind3";
        var aData3       = ModuleFullName + "__theData3";
        var aReason3     = ModuleFullName + "__theReason3";
        var aDetail3     = ModuleFullName + "__theDetail3";
    
        var aRecordPointerName_triggerkinds_01 = "recordPointerName_01_" + ModuleFullName;
        var aRecordPointerName_triggerkinds_02 = "recordPointerName_02_" + ModuleFullName;
        var aRecordPointerName_triggerkinds_03 = "recordPointerName_03_" + ModuleFullName;
        var aRecordPointerName_triggerkinds_04 = "recordPointerName_04_" + ModuleFullName;
    
        var aM_console_svce            = null;
        var aLocalRecorder = null;
        var aCommon             = null;
        var aCommon_Recorder        = null;
        var aCommon_Identifier      = null;
    
        var aRecordingPolicyKeepRecent = null;
    
        var aCommon_Recorder_SetRecordingPolicy = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsRecentMillis = null;
    
        var aDumpingPolicyTriggerKinds = null;
        var aCommon_Recorder_SetDumpingPolicy                = null;
        var aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = null;
        var aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = null;
        var aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = null;
        var someCollectedLogsBefore = null;
        var aNumCollectedLogsBefore = null;
    
        var someKeptRecordsBefore = null;
        var someKeptRecordsAfterFirstSubmission = null;
        var someKeptRecordsBeforeSecondSubmission = null;
        var someKeptRecordsAfterSecondSubmission = null;
        var someKeptRecordsAfterThirdSubmission = null;
        var someKeptRecordsAfterFinalClear = null;
    
        var someCollectedLogsAfterFirstSubmit = null;
        var aNumCollectedLogsAfterFirstSubmit = null;
        var someCollectedLogsAfterDelay       = null;
        var aNumCollectedLogsAfterDelay       = null;
        var someCollectedLogsAfterDelayTriggering = null;
        var aNumCollectedLogsAfterDelayTriggering = null;
    
        var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterDelay = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterDelay = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterDelay = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterDelayTriggering = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterDelayTriggering = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterDelayTriggering = null;
        var aCommon_Recorder_SetRecordingPointer_04_afterDelayTriggering = null;
    
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstSubmit = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterDelay = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterDelayTriggering = null;
    
        var otherRecord   = null;
        var anotherRecord = null;
        
        
        
        var pBeforeEach = function()  {
    
            aLocalRecorder = new aM_recorder_type.Recorder_Constructor( aCommon_title, aM_identifier_svce);
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aLocalRecorder);
    
    
            aCommon_Recorder   = aCommon._v_Recorder;
            aCommon_Identifier = aCommon._v_Identifier;
    
            aRecordingPolicyKeepRecent = new aM_recordingpolicy_keeprecent_type.RecordingPolicyKeepRecent_Constructor( "RecordingPolicy-for-common_type-dumpingpolicy_triggerkinds-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
            aRecordingPolicyKeepRecent.pSetMustKeepRecords(             true);
            aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber(    aMustKeepRecordsMaxNumber);
            aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis( aMustKeepRecordsRecentMillis);
            aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepRecent);
            aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsMaxNumber();
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsRecentMillis = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsRecentMillis();
            aCommon_Recorder.pClearKeptRecords();
    
    
            aDumpingPolicyTriggerKinds = new aM_dumpingpolicy_triggerkinds_type.DumpingPolicyTriggerKinds_Constructor( "DumpingPolicy-for-common_type-dumpingpolicy_triggerkinds-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
    
            aDumpingPolicyTriggerKinds.pSetMayDumpRecords( true);
            aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole( [ ]);
            aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump( [ anEventKind3]);
    
            aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyTriggerKinds);
    
            aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
            aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
            aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = aCommon_Recorder_SetDumpingPolicy.fEventKindsNotForConsole();
            aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = aCommon_Recorder_SetDumpingPolicy.fEventKindsTriggeringDump();
    
    
            aM_console_svce.pSetWriteToConsole(          true);
            aM_console_svce.pSetCollectLogs(             true);
            aM_console_svce.pSetMaxCollectedLogsLength(  1000000);
    
    
            aM_console_svce.clear();
        };
    
    
    
    
        var pBeforeEach_async = function( done)  {
    
            aCommon_Recorder.pClearKeptRecords();
    
            someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();
    
            someCollectedLogsBefore = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsBefore = someCollectedLogsBefore.length;
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_01, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
    
            for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {
        
                var aPrefix = "0000" + aSubmittedRecordIdx;
                aPrefix = aPrefix.substr( aPrefix.length - 4);
                var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
            }
    
            someKeptRecordsAfterFirstSubmission = aCommon_Recorder.fKeptRecords();
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_02, null /* point to last record */);
    
            aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
            aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
    
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
    
            someCollectedLogsAfterFirstSubmit = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsAfterFirstSubmit = someCollectedLogsAfterFirstSubmit.length;
    
    
    
            var aDelayMillis = aDelayBeforeSecondSubmissionMillis + anExtraDelayForTestsMillis;
    
            setTimeout(
                function() {
            
                    someKeptRecordsBeforeSecondSubmission = aCommon_Recorder.fKeptRecords();
            
            
                    otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
            
            
                    someKeptRecordsAfterSecondSubmission = aCommon_Recorder.fKeptRecords();
            
            
                    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_03, null /* point to last record */);
            
            
                    aCommon_Recorder_SetRecordingPointer_01_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
                    aCommon_Recorder_SetRecordingPointer_02_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
                    aCommon_Recorder_SetRecordingPointer_03_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
            
                    aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
            
            
            
                    someCollectedLogsAfterDelay = aM_console_svce.fCollectedLogsCopy();
                    aNumCollectedLogsAfterDelay = someCollectedLogsAfterDelay.length;
            
            
            
            
            
                    anotherRecord = aCommon.fRecord( aMethodName3, anEventKind3, aData3, aReason3, aDetail3);
            
            
                    someKeptRecordsAfterThirdSubmission = aCommon_Recorder.fKeptRecords();
            
            
                    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_04, null /* point to last record */);
            
            
                    aCommon_Recorder_SetRecordingPointer_01_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
                    aCommon_Recorder_SetRecordingPointer_02_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
                    aCommon_Recorder_SetRecordingPointer_03_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
                    aCommon_Recorder_SetRecordingPointer_04_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_04);
            
            
                    aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
            
            
                    someCollectedLogsAfterDelayTriggering = aM_console_svce.fCollectedLogsCopy();
                    aNumCollectedLogsAfterDelayTriggering = someCollectedLogsAfterDelayTriggering.length;
            
            
            
            
                    aCommon_Recorder.pClearKeptRecords();
            
                    someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();
            
            
            
                    aM_console_svce.pSetCollectLogs(    false);
            
                    aM_console_svce.clear();
            
            
                    done();
                },
                aDelayMillis
            );
        };
    
    
    
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module('identifying', 'recording', 'common', 'console'));
            
            beforeEach( inject(function( _identifier_svce_, _recorder_type_, _common_type_, _dumpingpolicy_triggerkinds_type_, _recordingpolicy_keeprecent_type_, _console_svce_) {
                aM_identifier_svce = _identifier_svce_;
                aM_recorder_type   = _recorder_type_;
                aM_common_type     = _common_type_;
                aM_dumpingpolicy_triggerkinds_type = _dumpingpolicy_triggerkinds_type_;
                aM_recordingpolicy_keeprecent_type = _recordingpolicy_keeprecent_type_;
                aM_console_svce    = _console_svce_;
    
                pBeforeEach();
            }));
    
            beforeEach( function( done) { return pBeforeEach_async( done);});
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_type     = require('../../../src/recording/recorder_type');
            aM_common_type       = require('../../../src/common/common_type');
            aM_dumpingpolicy_triggerkinds_type = require('../../../src/recording/dumpingpolicy_triggerkinds_type');
            aM_recordingpolicy_keeprecent_type = require('../../../src/recording/recordingpolicy_keeprecent_type');
            aM_console_svce      = require('../../../src/console/console_svce');
    
            beforeEach( pBeforeEach);
    
            beforeEach( function( done) { return pBeforeEach_async( done);});
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_type   = theSS_recorder_type;
            aM_common_type     = theSS_common_type;
            aM_dumpingpolicy_triggerkinds_type = theSS_dumpingpolicy_triggerkinds_type;
            aM_recordingpolicy_keeprecent_type = theSS_recordingpolicy_keeprecent_type;
            aM_console_svce    = theSS_console_svce;
            
            beforeEach( pBeforeEach);
    
            beforeEach( function( done) { return pBeforeEach_async( done);});
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recorder_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "recorder_type"));
            aM_common_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "common", "common_type"));
            aM_dumpingpolicy_triggerkinds_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_triggerkinds_type"));
            aM_recordingpolicy_keeprecent_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keeprecent_type"));
            aM_console_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "console", "console_svce"));
    
            beforeEach( pBeforeEach);
    
            beforeEach( function( done) { return pBeforeEach_async( done);});
        }
    
    
    
    
    
    
        it("Kept only most recently submitted records", function () {
            expect( aCommon_Identifier).not.toBeUndefined();
            expect( typeof aCommon_Identifier).toBe( "object");
            expect( aCommon_Identifier).not.toBeNull();
        
            expect( aCommon_Recorder).not.toBeUndefined();
            expect( typeof aCommon_Recorder).toBe( "object");
            expect( aCommon_Recorder).not.toBeNull();
        
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepRecent);
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber).toBe( aMustKeepRecordsMaxNumber);
        
            expect( aCommon_Recorder_SetDumpingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetDumpingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetDumpingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetDumpingPolicy).toBe( aDumpingPolicyTriggerKinds);
        
            expect( aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole.length).toBe( 0);
            expect( aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump.length).toBe( 1);
            expect( aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump[ 0]).toBe( anEventKind3);
        
            expect( aCommon.fRecord).not.toBeUndefined();
            expect( typeof aCommon.fRecord).toBe( "function");
            expect( typeof aCommon.fRecord).toBe( "function");
        
            expect( someKeptRecordsBefore).not.toBeUndefined();
            expect( typeof someKeptRecordsBefore).toBe( "object");
            expect( someKeptRecordsBefore).not.toBeNull();
            expect( someKeptRecordsBefore.length).toBe( 0);
        
            expect( someKeptRecordsAfterFirstSubmission).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterFirstSubmission).toBe( "object");
            expect( someKeptRecordsAfterFirstSubmission).not.toBeNull();
            expect( someKeptRecordsAfterFirstSubmission.length).toBe( aNumRecordsToSubmit);
        
            expect( someKeptRecordsBeforeSecondSubmission).not.toBeUndefined();
            expect( typeof someKeptRecordsBeforeSecondSubmission).toBe( "object");
            expect( someKeptRecordsBeforeSecondSubmission).not.toBeNull();
            expect( someKeptRecordsBeforeSecondSubmission.length).toBe( aNumRecordsToSubmit);
        
            expect( someKeptRecordsAfterSecondSubmission).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterSecondSubmission).toBe( "object");
            expect( someKeptRecordsAfterSecondSubmission).not.toBeNull();
            expect( someKeptRecordsAfterSecondSubmission.length).toBe( 1);
        
            expect( someKeptRecordsAfterThirdSubmission).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterThirdSubmission).toBe( "object");
            expect( someKeptRecordsAfterThirdSubmission).not.toBeNull();
            expect( someKeptRecordsAfterThirdSubmission.length).toBe( 2);
        
            expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
            expect( someKeptRecordsAfterFinalClear).not.toBeNull();
            expect( someKeptRecordsAfterFinalClear.length).toBe( 0);
        
            expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit).toBe( aNumRecordsToSubmit - 1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterDelay).toBe( -11);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterDelay).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterDelay).toBe( 0);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterDelayTriggering).toBe( -11);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterDelayTriggering).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterDelayTriggering).toBe( 0);
            expect( aCommon_Recorder_SetRecordingPointer_04_afterDelayTriggering).toBe( 1);
        
            expect( aNumCollectedLogsAfterFirstSubmit).toBe( 0);
            expect( aNumCollectedLogsAfterDelay).toBe( 0);
            expect( aNumCollectedLogsAfterDelayTriggering).toBe( 2);
        });
        
    });
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "common_dumpingpolicy_triggerkinds_some_recordingpolicy_keeprecent_behavioral_test",
        [
            "identifier_svce",
            "recorder_type",
            "common_type",
            "dumpingpolicy_triggerkinds_type",
            "recordingpolicy_keeprecent_type",
            "console_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



