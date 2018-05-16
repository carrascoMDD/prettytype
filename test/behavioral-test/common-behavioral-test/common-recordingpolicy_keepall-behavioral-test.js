/*
 * common-recordingpolicy_keepall-behavioral-test.js
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
                            theSS_recordingpolicy_keepall_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-recordingpolicy_keepall-behavioral-test";
    var ModulePackages = "test/behavioral-test/utils-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_svce   = null;
        var aM_common_type     = null;
        var aM_recordingpolicy_keepall_type = null;
    
        var aMethodName = "common_recordingpolicykeepall__theMethodName";
        var anEventKind = "common_recordingpolicykeepall__theEventKind";
        var aData       = "common_recordingpolicykeepall__theData";
        var aReason     = "common_recordingpolicykeepall__theReason";
        var aDetail     = "common_recordingpolicykeepall__theDetail";
    
        var aMethodName2 = "common_recordingpolicykeepall__theMethodName2";
        var anEventKind2 = "common_recordingpolicykeepall__theEventKind2";
        var aData2       = "common_recordingpolicykeepall__theData2";
        var aReason2     = "common_recordingpolicykeepall__theReason2";
        var aDetail2     = "common_recordingpolicykeepall__theDetail2";
    
        var aRecordPointerName_keepall_01         = "recordPointerName_keepall_01";
        var aRecordPointerName_keepall_02         = "recordPointerName_keepall_02";
        var aRecordPointerName_keepall_03         = "recordPointerName_keepall_03";
    
        var aCommon                 = null;
        var aCommon_Recorder        = null;
        var aCommon_Identifier      = null;
        var aRecordingPolicyKeepAll = null;
        var aCommon_Recorder_SetRecordingPolicy = null;
        var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;
        var aBeforeRecordMillis = null;
        var someKeptRecordsBefore = null;
        var aRecord = null;
        var otherRecord = null;
        var someKeptRecords = null;
        var aKeptRecord_1 = null;
        var aKeptRecord_2 = null;
        var someKeptRecordsAfterFinalClear = null;
    
        var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = null;
        
    
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_, _RecordingPolicyKeepAllType_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_svce   = _RecorderSvce_;
                aM_common_type     = _CommonType_;
                aM_recordingpolicy_keepall_type = _RecordingPolicyKeepAllType_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_svce     = require('../../../src/identifying/recorder_svce');
            aM_common_type       = require('../../../src/common/common_type');
            aM_recordingpolicy_keepall_type = require('../../../src/identifying/recordingpolicy_keepall_type');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_svce   = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aM_recordingpolicy_keepall_type = theSS_recordingpolicy_keepall_type;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recorder_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"));
            aM_common_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "common", "common_type"));
            aM_recordingpolicy_keepall_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepall_type"));
        }
        

    
    
        it("Keeps two recorded Records", function () {
    
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
            aCommon_Recorder   = aCommon._v_Recorder;
            aCommon_Identifier = aCommon._v_Identifier;
    
            aRecordingPolicyKeepAll = new aM_recordingpolicy_keepall_type.RecordingPolicyKeepAll_Constructor( "RecordingPolicy-for-common_svce-recordingpolicy_keepall-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
            aRecordingPolicyKeepAll.pSetMustKeepRecords( true);
            aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepAll);
    
            aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();
            aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
            aCommon_Recorder.pClearKeptRecords();
    
    
            aBeforeRecordMillis = new Date().getMilliseconds();
    
            someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepall_01, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_01);
    
            aRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepall_02, null /* point to last record */);
    
            aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_01);
            aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_02);
    
    
            otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
    
            someKeptRecords = aCommon_Recorder.fKeptRecords();
            aKeptRecord_1 = someKeptRecords[ 0];
            aKeptRecord_2 = someKeptRecords[ 1];
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepall_03, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_01);
            aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_02);
            aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_03);
    
    
            aCommon_Recorder.pClearKeptRecords();
            someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();
            
            
    
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepAll);
            expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
    
            expect( someKeptRecordsBefore).not.toBeUndefined();
            expect( typeof someKeptRecordsBefore).toBe( "object");
            expect( someKeptRecordsBefore).not.toBeNull();
            expect( someKeptRecordsBefore.length).toBe( 0);
    
            expect( someKeptRecords).not.toBeUndefined();
            expect( typeof someKeptRecords).toBe( "object");
            expect( someKeptRecords).not.toBeNull();
            expect( someKeptRecords.length).toBe( 2);
    
            expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
            expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
            expect( someKeptRecordsAfterFinalClear).not.toBeNull();
            expect( someKeptRecordsAfterFinalClear.length).toBe( 0);
    
            expect( aCommon.fRecord).not.toBeUndefined();
            expect( typeof aCommon.fRecord).toBe( "function");
    
            expect( aRecord).not.toBeUndefined();
            expect( typeof aRecord).toBe( "object");
            expect( aRecord).not.toBeNull();
            expect( typeof aRecord._v_Timestamp).toBe( "number");
            expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
            expect( aRecord._v_RecordId).not.toBeNull();
            expect( aRecord._v_Instance).toBe( aCommon);
            expect( aRecord._v_Step).toBe( aMethodName);
            expect( aRecord._v_EventKind).toBe( anEventKind);
            expect( aRecord._v_Data).toBe( aData);
            expect( aRecord._v_Reason).toBe( aReason);
            expect( aRecord._v_Detail).toBe( aDetail);
    
            expect( otherRecord).not.toBeUndefined();
            expect( typeof otherRecord).toBe( "object");
            expect( typeof otherRecord._v_Timestamp).toBe( "number");
            expect( otherRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
            expect( otherRecord._v_Timestamp >= aRecord._v_Timestamp).toBe( true);
            expect( otherRecord).not.toBeNull();
            expect( otherRecord._v_RecordId).not.toBeNull();
            expect( otherRecord._v_RecordId > aRecord._v_RecordId).toBe( true);
            expect( otherRecord._v_Instance).toBe( aCommon);
            expect( otherRecord._v_Step).toBe( aMethodName2);
            expect( otherRecord._v_EventKind).toBe( anEventKind2);
            expect( otherRecord._v_Data).toBe( aData2);
            expect( otherRecord._v_Reason).toBe( aReason2);
            expect( otherRecord._v_Detail).toBe( aDetail2);
    
    
            expect( aKeptRecord_1).not.toBeUndefined();
            expect( typeof aKeptRecord_1).toBe( "object");
            expect( aKeptRecord_1).not.toBeNull();
            expect( typeof aKeptRecord_1._v_Timestamp).toBe( "number");
            expect( aKeptRecord_1._v_Timestamp >= aBeforeRecordMillis).toBe( true);
            expect( aKeptRecord_1._v_RecordId).not.toBeNull();
            expect( aKeptRecord_1._v_Instance).toBe( aCommon);
            expect( aKeptRecord_1._v_Step).toBe( aMethodName);
            expect( aKeptRecord_1._v_EventKind).toBe( anEventKind);
            expect( aKeptRecord_1._v_Data).toBe( aData);
            expect( aKeptRecord_1._v_Reason).toBe( aReason);
            expect( aKeptRecord_1._v_Detail).toBe( aDetail);
    
            expect( aKeptRecord_2).not.toBeUndefined();
            expect( typeof aKeptRecord_2).toBe( "object");
            expect( typeof aKeptRecord_2._v_Timestamp).toBe( "number");
            expect( aKeptRecord_2._v_Timestamp >= aBeforeRecordMillis).toBe( true);
            expect( aKeptRecord_2._v_Timestamp >= aKeptRecord_1._v_Timestamp).toBe( true);
            expect( aKeptRecord_2).not.toBeNull();
            expect( aKeptRecord_2._v_RecordId).not.toBeNull();
            expect( aKeptRecord_2._v_RecordId > aKeptRecord_1._v_RecordId).toBe( true);
            expect( aKeptRecord_2._v_Instance).toBe( aCommon);
            expect( aKeptRecord_2._v_Step).toBe( aMethodName2);
            expect( aKeptRecord_2._v_EventKind).toBe( anEventKind2);
            expect( aKeptRecord_2._v_Data).toBe( aData2);
            expect( aKeptRecord_2._v_Reason).toBe( aReason2);
            expect( aKeptRecord_2._v_Detail).toBe( aDetail2);
    
            expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord).toBe( 0);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord).toBe( 0);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord).toBe( 1);
        });
    
    
    });
    
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_common_recordingpolicy_keepall_behavioral_test",
        [
            "m_identifier_svce",
            "m_recorder_svce",
            "m_common_type",
            "m_recordingpolicy_keepall_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



