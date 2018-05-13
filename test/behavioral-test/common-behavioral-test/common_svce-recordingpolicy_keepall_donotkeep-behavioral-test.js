/*
 * common_svce-recordingpolicy_keepall_donotkeep-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131942
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




describe("prettytypes-ng CommonSvce recording policy keep all do not keep behavioral tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs"));


    var aBeforeRecordMillis = new Date().getMilliseconds();


    var aMethodName = "common_svce_test_recordingpolicykeepall__theMethodName";
    var anEventKind = "common_svce_test_recordingpolicykeepall__theEventKind";
    var aData       = "common_svce_test_recordingpolicykeepall__theData";
    var aReason     = "common_svce_test_recordingpolicykeepall__theReason";
    var aDetail     = "common_svce_test_recordingpolicykeepall__theDetail";

    var aMethodName2 = "common_svce_test_recordingpolicykeepall__theMethodName2";
    var anEventKind2 = "common_svce_test_recordingpolicykeepall__theEventKind2";
    var aData2       = "common_svce_test_recordingpolicykeepall__theData2";
    var aReason2     = "common_svce_test_recordingpolicykeepall__theReason2";
    var aDetail2     = "common_svce_test_recordingpolicykeepall__theDetail2";



    var aRecordPointerName_keepall_01         = "recordPointerName_keepall_01";
    var aRecordPointerName_keepall_02         = "recordPointerName_keepall_02";
    var aRecordPointerName_keepall_03         = "recordPointerName_keepall_03";



    var aCommonSvce             = null;
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



    beforeEach( inject(function( _CommonSvce_, _RecordingPolicyKeepAllType_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = _CommonSvce_;
        // console.log( "typeof aCommonSvce= " + typeof aCommonSvce);
        // console.log( "aCommonSvce keys = " + Object.keys( aCommonSvce));


        aCommon_Recorder   = aCommonSvce._v_Recorder;
        aCommon_Identifier = aCommonSvce._v_Identifier;



        aRecordingPolicyKeepAll = new _RecordingPolicyKeepAllType_.RecordingPolicyKeepAll_Constructor( "RecordingPolicy-for-common_svce-recordingpolicy_keepall-donotkeep-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);

        aRecordingPolicyKeepAll.pSetMustKeepRecords( false);

        aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepAll);


        aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

        aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();




        aBeforeRecordMillis = new Date().getMilliseconds();



        aCommon_Recorder.pClearKeptRecords();

        someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();





        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepall_01, null /* point to last record */);
        aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_01);







        aRecord = aCommonSvce.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);



        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepall_02, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_01);
        aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_02);








        otherRecord = aCommonSvce.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);


        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepall_03, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_01);
        aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_02);
        aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepall_03);




        someKeptRecords = aCommon_Recorder.fKeptRecords();



        aCommon_Recorder.pClearKeptRecords();

        someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();

    }));







    it("Does not Keep any of two recorded Records", function () {

        expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
        expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
        expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
        expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepAll);
        expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( false);

        expect( someKeptRecordsBefore).not.toBeUndefined();
        expect( typeof someKeptRecordsBefore).toBe( "object");
        expect( someKeptRecordsBefore).not.toBeNull();
        expect( someKeptRecordsBefore.length).toBe( 0);

        expect( someKeptRecords).not.toBeUndefined();
        expect( typeof someKeptRecords).toBe( "object");
        expect( someKeptRecords).not.toBeNull();
        expect( someKeptRecords.length).toBe( 0);

        expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
        expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
        expect( someKeptRecordsAfterFinalClear).not.toBeNull();
        expect( someKeptRecordsAfterFinalClear.length).toBe( 0);

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



        expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
        expect( aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord).toBe( -1);
        expect( aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord).toBe( -1);
        expect( aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord).toBe( -1);
        expect( aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord).toBe( -1);
        expect( aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord).toBe( -1);

        
    });



});


