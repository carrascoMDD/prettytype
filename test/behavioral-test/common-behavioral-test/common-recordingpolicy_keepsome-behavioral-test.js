/*
 * common-recordingpolicy_keepsome-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131925
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
                            theSS_recordingpolicy_keepsome_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-recordingpolicy_keepsome-behavioral-test";
    var ModulePackages = "test/behavioral-test/utils-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_svce   = null;
        var aM_common_type     = null;
        var aM_recordingpolicy_keepsome_type = null;
    
    
    
        var aMustKeepRecordsMaxNumber = 10;
        var aNumRecordsToSubmit = aMustKeepRecordsMaxNumber + 1;
    
        var aMethodName = "common_svce_test_recordingpolicykeepall__theMethodName";
        var anEventKind = "common_svce_test_recordingpolicykeepall__theEventKind";
        var aData       = "common_svce_test_recordingpolicykeepall__theData";
        var aReason     = "common_svce_test_recordingpolicykeepall__theReason";
        var aDetail     = "common_svce_test_recordingpolicykeepall__theDetail";
    
        var aRecordPointerName_keepsome_01         = "recordPointerName_keepsome_01";
        var aRecordPointerName_keepsome_02         = "recordPointerName_keepsome_02";
    
    
        var aCommon             = null;
        var aCommon_Recorder        = null;
        var aCommon_Identifier      = null;
        var aRecordingPolicyKeepSome = null;
        var aCommon_Recorder_SetRecordingPolicy = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;
        var someKeptRecordsBefore = null;
        var aRecord = null;
        var otherRecord = null;
        var someKeptRecords = null;
        var aKeptRecord_1 = null;
        var aKeptRecord_2 = null;
        var someKeptRecordsAfterFinalClear = null;
    
        var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords = null;
    
    
    
    
    
    
        var aBeforeEach_allPlatforms = function() {
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);

            aCommon_Recorder   = aCommon._v_Recorder;
            aCommon_Identifier = aCommon._v_Identifier;
    
            aRecordingPolicyKeepSome = new aM_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_Constructor( "RecordingPolicy-for-common_svce-recordingpolicy_keepsome-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
            aRecordingPolicyKeepSome.pSetMustKeepRecords( true);
            aRecordingPolicyKeepSome.pSetMustKeepRecordsMaxNumber( aMustKeepRecordsMaxNumber);
            aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepSome);
    
            aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
    
            aCommon_Recorder.pClearKeptRecords();
            someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepsome_01, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_01);
    
            for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {
        
                var aPrefix = "0000" + aSubmittedRecordIdx;
                aPrefix = aPrefix.substr( aPrefix.length - 4);
                var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind + aPrefix, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
                if( aSubmittedRecord){}/*CQT*/
            }
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepsome_02, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_01);
            aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_02);
    
            someKeptRecords = aCommon_Recorder.fKeptRecords();
            aCommon_Recorder.pClearKeptRecords();
            someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();
        };
        
        
        
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_, _RecordingPolicyKeepSomeType_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_svce   = _RecorderSvce_;
                aM_common_type     = _CommonType_;
                aM_recordingpolicy_keepsome_type = _RecordingPolicyKeepSomeType_;
                
                aBeforeEach_allPlatforms();
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_svce     = require('../../../src/identifying/recorder_svce');
            aM_common_type       = require('../../../src/common/common_type');
            aM_recordingpolicy_keepsome_type = require('../../../src/identifying/recordingpolicy_keepsome_type');
            
            aBeforeEach_allPlatforms();
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_svce   = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aM_recordingpolicy_keepsome_type = theSS_recordingpolicy_keepsome_type;
            
            aBeforeEach_allPlatforms();
        }
    
    
    
        it("Has main structural features defined, and kept submitted records up to a maximum number of records", function () {
        
            expect( aCommon.fRecord).not.toBeUndefined();
            expect( typeof aCommon.fRecord).toBe( "function");
        
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepSome);
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
        
            expect( someKeptRecordsBefore).not.toBeUndefined();
            expect( typeof someKeptRecordsBefore).toBe( "object");
            expect( someKeptRecordsBefore).not.toBeNull();
            expect( someKeptRecordsBefore.length).toBe( 0);
        
            expect( someKeptRecords).not.toBeUndefined();
            expect( typeof someKeptRecords).toBe( "object");
            expect( someKeptRecords).not.toBeNull();
            expect( someKeptRecords.length).toBe( aMustKeepRecordsMaxNumber);
        
            expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
            expect( someKeptRecordsAfterFinalClear).not.toBeNull();
            expect( someKeptRecordsAfterFinalClear.length).toBe( 0);
        
        
            expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords).toBe( -2);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords).toBe( 9);
        
        });
    
    
    
    });
    
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_common_recordingpolicy_keepsome_behavioral_test",
        [
            "m_identifier_svce",
            "m_recorder_svce",
            "m_common_type",
            "m_recordingpolicy_keepsome_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



