/*
 * common-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610132029
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
                            theSS_dumpingpolicy_filterkinds_type,
                            theSS_console_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-dumpingpolicy_filterkinds_maynotdump-behavioral-test";
    var ModulePackages = "test/behavioral-test/utils-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_svce   = null;
        var aM_common_type     = null;
        var aM_dumpingpolicy_filterkinds_type = null;
        var aM_console_svce = null;
        
        
        var aBeforeRecordMillis = new Date().getMilliseconds();
        
        var aMethodName = "common_common_dumpingpolicy_fiterkinds_maynotdump__theMethodName";
        var anEventKind = "common_common_dumpingpolicy_fiterkinds_maynotdump__theEventKind";
        var aData       = "common_common_dumpingpolicy_fiterkinds_maynotdump__theData";
        var aReason     = "common_common_dumpingpolicy_fiterkinds_maynotdump__theReason";
        var aDetail     = "common_common_dumpingpolicy_fiterkinds_maynotdump__theDetail";
        
        var aMethodName2 = "common_common_dumpingpolicy_fiterkinds_maynotdump__theMethodName2";
        var anEventKind2 = "common_common_dumpingpolicy_fiterkinds_maynotdump__theEventKind2";
        var aData2       = "common_common_dumpingpolicy_fiterkinds_maynotdump__theData2";
        var aReason2     = "common_common_dumpingpolicy_fiterkinds_maynotdump__theReason2";
        var aDetail2     = "common_common_dumpingpolicy_fiterkinds_maynotdump__theDetail2";
        
        var aRecordPointerName_filterkinds_01 = "recordPointerName_filterkinds_01";
        var aRecordPointerName_filterkinds_02 = "recordPointerName_filterkinds_02";
        var aRecordPointerName_filterkinds_03 = "recordPointerName_filterkinds_03";
        
        
        var aCommon             = null;
        var aCommon_Recorder        = null;
        var aCommon_Identifier      = null;
        var aDumpingPolicyFilterKinds = null;
        var aRecord = null;
        var otherRecord = null;
        
        var someCollectedLogsBefore = null;
        var aNumCollectedLogsBefore = null;
        var someCollectedLogsAfter1 = null;
        var aNumCollectedLogsAfter1 = null;
        var someCollectedLogsAfter2 = null;
        var aNumCollectedLogsAfter2 = null;
        
        var aCommon_Recorder_SetDumpingPolicy                =  null;
        var aCommon_Recorder_SetDumpingPolicy_MayDumpRecords =  null;
        
        var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord = null;
        var aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = null;
        var aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = null;
        var aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = null;
        var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord = null;
        

        
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes', 'consoleSvce'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_, _DumpingPolicyFilterKindsType_, _ConsoleSvce_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_svce   = _RecorderSvce_;
                aM_common_type     = _CommonType_;
                aM_dumpingpolicy_filterkinds_type = _DumpingPolicyFilterKindsType_;
                aM_console_svce    = _ConsoleSvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_svce     = require('../../../src/identifying/recorder_svce');
            aM_common_type       = require('../../../src/common/common_type');
            aM_dumpingpolicy_filterkinds_type = require('../../../src/identifying/dumpingpolicy_filterkinds_type');
            aM_console_svce      = require('../../../src/utils/console_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_svce   = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aM_dumpingpolicy_filterkinds_type = theSS_dumpingpolicy_filterkinds_type;
            aM_console_svce    = theSS_console_svce;
        }
        
        
        
        
        it("Does not dump any of two recorded Records", function () {
    
    
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
            aCommon_Recorder   = aCommon._v_Recorder;
            aCommon_Identifier = aCommon._v_Identifier;
    
    
            aDumpingPolicyFilterKinds = new aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Constructor( "DumpingPolicy-for-common_svce-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
            aDumpingPolicyFilterKinds.pSetMayDumpRecords( false);
            aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole( [ ]);
            aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyFilterKinds);
            aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
            aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
            aCommon_Recorder.pClearKeptRecords();
    
            aM_console_svce.pSetWriteToConsole(          true);
            aM_console_svce.pSetCollectLogs(             true);
            aM_console_svce.pSetMaxCollectedLogsLength(  1000000);
            aM_console_svce.clear();
            someCollectedLogsBefore = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsBefore = someCollectedLogsBefore.length;
    
            aBeforeRecordMillis = new Date().getMilliseconds();
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_01, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
    
            aRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_02, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
            aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_02);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
    
            someCollectedLogsAfter1 = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsAfter1 = someCollectedLogsAfter1.length;
    
            otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
    
            aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_03, null /* point to last record */);
            aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
            aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_02);
            aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_03);
            aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);
    
            someCollectedLogsAfter2 = aM_console_svce.fCollectedLogsCopy();
            aNumCollectedLogsAfter2 = someCollectedLogsAfter2.length;
    
            aM_console_svce.pSetCollectLogs(    false);
    
            aM_console_svce.clear();
            
            
            
            
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
            
            expect( aCommon_Recorder_SetDumpingPolicy).not.toBeUndefined();
            expect( typeof aCommon_Recorder_SetDumpingPolicy).toBe( "object");
            expect( aCommon_Recorder_SetDumpingPolicy).not.toBeNull();
            expect( aCommon_Recorder_SetDumpingPolicy).toBe( aDumpingPolicyFilterKinds);
            expect( aCommon_Recorder_SetDumpingPolicy_MayDumpRecords).toBe( false);
            
            expect( aNumCollectedLogsBefore).toBe( 0);
            expect( aNumCollectedLogsAfter1).toBe( 0);
            expect( aNumCollectedLogsAfter2).toBe( 0);
            
            expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord).toBe( 0);
            expect( aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord).toBe( -1);
            expect( aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord).toBe( 0);
            expect( aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord).toBe( 1);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords).toBe( undefined);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord).toBe( undefined);
            expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord).toBe( undefined);
        });
        
    });
    
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_common_dumpingpolicy_filterkinds_maynotdump_behavioral_test",
        [
            "m_identifier_svce",
            "m_recorder_svce",
            "m_common_type",
            "m_dumpingpolicy_filterkinds_type",
            "m_console_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}


