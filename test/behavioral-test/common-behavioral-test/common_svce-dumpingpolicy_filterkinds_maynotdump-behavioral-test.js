/*
 * common_svce-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js
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




describe("prettytypes-ng CommonSvce dumping policy filterkinds maynotdump behavioral tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs", "consoleSvce"));


    var aBeforeRecordMillis = new Date().getMilliseconds();


    var aMethodName = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theMethodName";
    var anEventKind = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theEventKind";
    var aData       = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theData";
    var aReason     = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theReason";
    var aDetail     = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theDetail";

    var aMethodName2 = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theMethodName2";
    var anEventKind2 = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theEventKind2";
    var aData2       = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theData2";
    var aReason2     = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theReason2";
    var aDetail2     = "common_svce_test_dumpingpolicyfilterkindsmaynotdump__theDetail2";

    var aRecordPointerName_filterkinds_01 = "recordPointerName_filterkinds_01";
    var aRecordPointerName_filterkinds_02 = "recordPointerName_filterkinds_02";
    var aRecordPointerName_filterkinds_03 = "recordPointerName_filterkinds_03";


    var aCommonSvce             = null;
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



    beforeEach( inject(function( _CommonSvce_, _ConsoleSvce_, _DumpingPolicyFilterKindsType_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = _CommonSvce_;
        // console.log( "typeof aCommonSvce= " + typeof aCommonSvce);
        // console.log( "aCommonSvce keys = " + Object.keys( aCommonSvce));


        aCommon_Recorder   = aCommonSvce._v_Recorder;
        aCommon_Identifier = aCommonSvce._v_Identifier;




        aDumpingPolicyFilterKinds = new _DumpingPolicyFilterKindsType_.DumpingPolicyFilterKinds_Constructor( "DumpingPolicy-for-common_svce-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);

        aDumpingPolicyFilterKinds.pSetMayDumpRecords( false);
        aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole( [ ]);


        aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyFilterKinds);

        aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
        aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();


        _ConsoleSvce_.pSetWriteToConsole(          true);
        _ConsoleSvce_.pSetCollectLogs(             true);
        _ConsoleSvce_.pSetMaxCollectedLogsLength(  1000000);


        _ConsoleSvce_.clear();

        someCollectedLogsBefore = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsBefore = someCollectedLogsBefore.length;



        aBeforeRecordMillis = new Date().getMilliseconds();






        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_01, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);

        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);




        aRecord = aCommonSvce.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);




        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_02, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
        aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_02);
        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);








        someCollectedLogsAfter1 = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsAfter1 = someCollectedLogsAfter1.length;




        otherRecord = aCommonSvce.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);



        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_03, null /* point to last record */);


        aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
        aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_02);
        aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_03);
        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);




        someCollectedLogsAfter2 = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsAfter2 = someCollectedLogsAfter2.length;


        _ConsoleSvce_.pSetCollectLogs(    false);

        _ConsoleSvce_.clear();

    }));







    it("Does not dump any of two recorded Records", function () {

        expect( aCommonSvce.fRecord).not.toBeUndefined();
        expect( typeof aCommonSvce.fRecord).toBe( "function");

        expect( aRecord).not.toBeUndefined();
        expect( typeof aRecord).toBe( "object");
        expect( aRecord).not.toBeNull();
        expect( typeof aRecord._v_Timestamp).toBe( "number");
        expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
        expect( aRecord._v_RecordId).not.toBeNull();
        expect( aRecord._v_Instance).toBe( aCommonSvce);
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
        expect( otherRecord._v_Instance).toBe( aCommonSvce);
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


