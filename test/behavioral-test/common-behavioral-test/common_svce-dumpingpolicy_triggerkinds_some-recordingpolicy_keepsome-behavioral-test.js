/*
 * common_svce-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201611031335
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




describe("prettytypes-ng CommonSvce dumping policy triggerkinds some recording policy keep some behavioral tests", function () {


    var aMustKeepRecordsMaxNumber = 10;


    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs", "consoleSvce"));




    var aBeforeRecordMillis = new Date().getMilliseconds();


    var aMethodName = "common_svce_test_dumpingpolicytriggerkindsall__theMethodName";
    var anEventKind = "common_svce_test_dumpingpolicytriggerkindsall__theEventKind";
    var aData       = "common_svce_test_dumpingpolicytriggerkindsall__theData";
    var aReason     = "common_svce_test_dumpingpolicytriggerkindsall__theReason";
    var aDetail     = "common_svce_test_dumpingpolicytriggerkindsall__theDetail";

    var aMethodName2 = "common_svce_test_dumpingpolicytriggerkindsall__theMethodName2";
    var anEventKind2 = "common_svce_test_dumpingpolicytriggerkindsall__theEventKind2";
    var aData2       = "common_svce_test_dumpingpolicytriggerkindsall__theData2";
    var aReason2     = "common_svce_test_dumpingpolicytriggerkindsall__theReason2";
    var aDetail2     = "common_svce_test_dumpingpolicytriggerkindsall__theDetail2";


    var aMethodName3 = "common_type_record_test_dumpingpolicfilterkindsall__theMethodName3";
    var anEventKind3 = "common_type_record_test_dumpingpolicfilterkindsall__theEventKind3";
    var aData3       = "common_type_record_test_dumpingpolicfilterkindsall__theData3";
    var aReason3     = "common_type_record_test_dumpingpolicfilterkindsall__theReason3";
    var aDetail3     = "common_type_record_test_dumpingpolicfilterkindsall__theDetail3";


    var aRecordPointerName_triggerkinds_01 = "recordPointerName_triggerkinds_01";
    var aRecordPointerName_triggerkinds_02 = "recordPointerName_triggerkinds_02";
    var aRecordPointerName_triggerkinds_03 = "recordPointerName_triggerkinds_03";
    var aRecordPointerName_triggerkinds_04 = "recordPointerName_triggerkinds_04";

    var aCommonSvce             = null;
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








    beforeEach( inject(function( _CommonSvce_, _ConsoleSvce_, _RecordingPolicyKeepSomeType_, _DumpingPolicyTriggerKindsType_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = _CommonSvce_;
        // console.log( "typeof aCommonSvce= " + typeof aCommonSvce);
        // console.log( "aCommonSvce keys = " + Object.keys( aCommonSvce));


        aCommon_Recorder   = aCommonSvce._v_Recorder;
        aCommon_Identifier = aCommonSvce._v_Identifier;





        aRecordingPolicyKeepSome = new _RecordingPolicyKeepSomeType_.RecordingPolicyKeepSome_Constructor( "RecordingPolicy-for-common_svce-dumpingpolicy_triggerkinds_some-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);
        aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepSome);

        aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

        aRecordingPolicyKeepSome.pSetMustKeepRecords( true);
        aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();


        aRecordingPolicyKeepSome.pSetMustKeepRecordsMaxNumber( aMustKeepRecordsMaxNumber);
        aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsMaxNumber();





        aDumpingPolicyTriggerKinds = new _DumpingPolicyTriggerKindsType_.DumpingPolicyTriggerKinds_Constructor( "DumpingPolicy-for-common_svce-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);

        aDumpingPolicyTriggerKinds.pSetMayDumpRecords( true);
        aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole( [ ]);
        aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump( [ anEventKind3]);


        aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyTriggerKinds);

        aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
        aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
        aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = aCommon_Recorder_SetDumpingPolicy.fEventKindsNotForConsole();
        aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = aCommon_Recorder_SetDumpingPolicy.fEventKindsTriggeringDump();


        _ConsoleSvce_.pSetWriteToConsole(          true);
        _ConsoleSvce_.pSetCollectLogs(             true);
        _ConsoleSvce_.pSetMaxCollectedLogsLength(  1000000);


        _ConsoleSvce_.clear();

        someCollectedLogsBefore = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsBefore = someCollectedLogsBefore.length;



        aBeforeRecordMillis = new Date().getMilliseconds();






        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_01, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);

        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);








        for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aMustKeepRecordsMaxNumber; aSubmittedRecordIdx++) {

            var aPrefix = "0000" + aSubmittedRecordIdx;
            aPrefix = aPrefix.substr( aPrefix.length - 4);
            var aSubmittedRecord = aCommonSvce.fRecord( aMethodName + aPrefix, anEventKind, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
        }



        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_02, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
        aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);


        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);




        someCollectedLogsAfterExactlyMaxRecords = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsAfterExactlyMaxRecords = someCollectedLogsAfterExactlyMaxRecords.length;








        otherRecord = aCommonSvce.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);



        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_03, null /* point to last record */);


        aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
        aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
        aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);

        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);





        someCollectedLogsAfterExceedingMaxRecordsNoTrigger = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger = someCollectedLogsAfterExceedingMaxRecordsNoTrigger.length;








        anotherRecord = aCommonSvce.fRecord( aMethodName3, anEventKind3, aData3, aReason3, aDetail3);



        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_04, null /* point to last record */);


        aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
        aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
        aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
        aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_04);

        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);


        someCollectedLogsAfterExceedingMaxRecordsTriggering = _ConsoleSvce_.fCollectedLogsCopy();
        aNumCollectedLogsAfterExceedingMaxRecordsTriggering = someCollectedLogsAfterExceedingMaxRecordsTriggering.length;





        _ConsoleSvce_.pSetCollectLogs(    false);

        _ConsoleSvce_.clear();

    }));







    it("Dumps two recorded Records", function () {

        expect( aCommonSvce.fRecord).not.toBeUndefined();
        expect( typeof aCommonSvce.fRecord).toBe( "function");

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


