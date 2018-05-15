/*
 * common-recordingpolicy_keeprecent-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610181807
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
                            theSS_recordingpolicy_keeprecent_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-recordingpolicy_keeprecent-behavioral-test";
    var ModulePackages = "test/behavioral-test/utils-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_svce   = null;
        var aM_common_type     = null;
        var aM_recordingpolicy_keeprecent_type = null;
    
        var aNumRecordsToSubmit = 10;
        var aMustKeepRecordsMaxNumber = aNumRecordsToSubmit * 1000; /* Do not prune because of exceeding any records collection size limit */
        var aMustKeepRecordsRecentMillis = 100;
        var aDelayBeforeSecondSubmissionMillis = aMustKeepRecordsRecentMillis * 3;
        var anExtraDelayForTestsMillis = 100; /* Avoid timing too tight to event expiration deadline. There is no need for fine precission on the test, and garbage collection or asynchronous testing machinery could sometimes introduce some extra milliseconds delay */
    
        var aMethodName = "common_recordingpolicykeeprecent__theMethodName";
        var anEventKind = "common_recordingpolicykeeprecent__theEventKind";
        var aData       = "common_recordingpolicykeeprecent__theData";
        var aReason     = "common_recordingpolicykeeprecent__theReason";
        var aDetail     = "common_recordingpolicykeeprecent__theDetail";
    
        var aRecordPointerName_keeprecent_01         = "recordPointerName_keeprecent_01";
        var aRecordPointerName_keeprecent_02         = "recordPointerName_keeprecent_02";
        var aRecordPointerName_keeprecent_03         = "recordPointerName_keeprecent_03";
    
        var aCommon = null;
    
        var aCommon_Recorder   = null;
        var aCommon_Identifier = null;
    
        var aRecordingPolicyKeepRecent = null;
    
        var aCommon_Recorder_SetRecordingPolicy = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;
    
        var someKeptRecordsBefore = null;
        var someKeptRecordsAfterFirstSubmission = null;
        var someKeptRecordsBeforeSecondSubmission = null;
        var someKeptRecordsAfterSecondSubmission = null;
        var someKeptRecordsAfterFinalClear = null;
    
        var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterDelay = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterDelay = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterDelay = null;
    
    
    
    
    
        var aBeforeEach_allPlatforms = function() {
    
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
            aCommon_Recorder   = aCommon._v_Recorder;
            aCommon_Identifier = aCommon._v_Identifier;
    
            aRecordingPolicyKeepRecent = new aM_recordingpolicy_keeprecent_type.RecordingPolicyKeepRecent_Constructor( "RecordingPolicy-for-common_type-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
    
            aRecordingPolicyKeepRecent.pSetMustKeepRecords(             true);
            aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber(    aMustKeepRecordsMaxNumber);
            aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis( aMustKeepRecordsRecentMillis);
    
            aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepRecent);
    
            aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
        };
        
        
        
        
        var aBeforeEach_async = function( done) {
    
            aCommon_Recorder.pClearKeptRecords();
            someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keeprecent_01, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keeprecent_01);
    
            for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {
                var aPrefix = "0000" + aSubmittedRecordIdx;
                aPrefix = aPrefix.substr( aPrefix.length - 4);
                var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind + aPrefix, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
                if( aSubmittedRecord){}/*CQT*/
            }
    
            someKeptRecordsAfterFirstSubmission = aCommon_Recorder.fKeptRecords();
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keeprecent_02, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keeprecent_01);
            aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keeprecent_02);
    
    
            var aDelayMillis = aDelayBeforeSecondSubmissionMillis + anExtraDelayForTestsMillis;
    
            setTimeout(
                function() {
                    someKeptRecordsBeforeSecondSubmission = aCommon_Recorder.fKeptRecords();
                    for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {
                        var aPrefix = "0000" + aSubmittedRecordIdx + "-2";
                        aPrefix = aPrefix.substr( aPrefix.length - 6);
                        var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind + aPrefix, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
                    }
                    someKeptRecordsAfterSecondSubmission = aCommon_Recorder.fKeptRecords();
                    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keeprecent_03, null /* point to last record */);
                    aCommon_Recorder_SetRecordingPointer_01_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keeprecent_01);
                    aCommon_Recorder_SetRecordingPointer_02_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keeprecent_02);
                    aCommon_Recorder_SetRecordingPointer_03_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keeprecent_03);
            
                    aCommon_Recorder.pClearKeptRecords();
                    someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();
            
                    if( typeof done === "function") {
                        done();
                    }
                },
                aDelayMillis
            );
        };
    
    
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_, _RecordingPolicyKeepRecentType_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_svce   = _RecorderSvce_;
                aM_common_type     = _CommonType_;
                aM_recordingpolicy_keeprecent_type = _RecordingPolicyKeepRecentType_;
                
                aBeforeEach_allPlatforms();
            }));
    
            beforeEach( function( done) { return aBeforeEach_async( done);});
            
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_svce     = require('../../../src/identifying/recorder_svce');
            aM_common_type       = require('../../../src/common/common_type');
            aM_recordingpolicy_keeprecent_type = require('../../../src/identifying/recordingpolicy_keeprecent_type');
    
            beforeEach( aBeforeEach_allPlatforms);
    
            beforeEach( function( done) { return aBeforeEach_async( done);});
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_svce   = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aM_recordingpolicy_keeprecent_type = theSS_recordingpolicy_keeprecent_type;
    
            beforeEach( aBeforeEach_allPlatforms);
    
            beforeEach( function( done) { return aBeforeEach_async( done);});
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
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
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
            expect( someKeptRecordsAfterSecondSubmission.length).toBe( aNumRecordsToSubmit);
        
            expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
            expect( someKeptRecordsAfterFinalClear).not.toBeNull();
            expect( someKeptRecordsAfterFinalClear.length).toBe( 0);
        
            expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit).toBe( aNumRecordsToSubmit - 1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterDelay).toBe( -11);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterDelay).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterDelay).toBe( aNumRecordsToSubmit - 1);
        });
    
    });
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_common_recordingpolicy_keeprecent_behavioral_test",
        [
            "m_identifier_svce",
            "m_recorder_svce",
            "m_common_type",
            "m_recordingpolicy_keeprecent_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}


