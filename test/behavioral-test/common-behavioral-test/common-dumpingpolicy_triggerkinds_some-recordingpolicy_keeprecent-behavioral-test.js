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




describe("prettytypes-ng CommonSvce dumping policy triggerkinds some recording policy keep some behavioral tests", function () {


    var aMustKeepRecordsMaxNumber = 10;


    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs", "consoleSvce"));




    var aNumRecordsToSubmit = 10;

    var aMustKeepRecordsMaxNumber = aNumRecordsToSubmit * 1000; /* Do not prune because of exceeding any records collection size limit */

    var aMustKeepRecordsRecentMillis = 100;

    var aDelayBeforeSecondSubmissionMillis = aMustKeepRecordsRecentMillis * 3;

    var anExtraDelayForTestsMillis = 100; /* Avoid timing too tight to event expiration deadline. There is no need for fine precission on the test, and garbage collection or asynchronous testing machinery could sometimes introduce some extra milliseconds delay */






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

    var aConsoleSvce            = null;
    var aCommonSvce             = null;
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




    beforeEach( inject(function( _CommonSvce_, _ConsoleSvce_, _RecordingPolicyKeepRecentType_, _DumpingPolicyTriggerKindsType_) {


        aConsoleSvce = _ConsoleSvce_;
        
        aCommonSvce = _CommonSvce_;

        aCommon_Recorder   = aCommonSvce._v_Recorder;
        aCommon_Identifier = aCommonSvce._v_Identifier;

        

        aRecordingPolicyKeepRecent = new _RecordingPolicyKeepRecentType_.RecordingPolicyKeepRecent_Constructor( "RecordingPolicy-for-common_type-dumpingpolicy_triggerkinds-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);

        aRecordingPolicyKeepRecent.pSetMustKeepRecords(             true);
        aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber(    aMustKeepRecordsMaxNumber);
        aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis( aMustKeepRecordsRecentMillis);

        aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepRecent);

        aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

        aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
        aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsMaxNumber();
        aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsRecentMillis = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsRecentMillis();





        aDumpingPolicyTriggerKinds = new _DumpingPolicyTriggerKindsType_.DumpingPolicyTriggerKinds_Constructor( "DumpingPolicy-for-common_type-dumpingpolicy_triggerkinds-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);

        aDumpingPolicyTriggerKinds.pSetMayDumpRecords( true);
        aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole( [ ]);
        aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump( [ anEventKind3]);

        aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyTriggerKinds);

        aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
        aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
        aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = aCommon_Recorder_SetDumpingPolicy.fEventKindsNotForConsole();
        aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = aCommon_Recorder_SetDumpingPolicy.fEventKindsTriggeringDump();


        aConsoleSvce.pSetWriteToConsole(          true);
        aConsoleSvce.pSetCollectLogs(             true);
        aConsoleSvce.pSetMaxCollectedLogsLength(  1000000);


        aConsoleSvce.clear();

    }));









    beforeEach( function( done) {

        aCommon_Recorder.pClearKeptRecords();

        someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();





        someCollectedLogsBefore = aConsoleSvce.fCollectedLogsCopy();
        aNumCollectedLogsBefore = someCollectedLogsBefore.length;







        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_01, null /* point to last record */);
        aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);





        for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {

            var aPrefix = "0000" + aSubmittedRecordIdx;
            aPrefix = aPrefix.substr( aPrefix.length - 4);
            var aSubmittedRecord = aCommonSvce.fRecord( aMethodName + aPrefix, anEventKind, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
        }


        someKeptRecordsAfterFirstSubmission = aCommon_Recorder.fKeptRecords();


        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_02, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
        aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);


        aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);



        someCollectedLogsAfterFirstSubmit = aConsoleSvce.fCollectedLogsCopy();
        aNumCollectedLogsAfterFirstSubmit = someCollectedLogsAfterFirstSubmit.length;





        var aDelayMillis = aDelayBeforeSecondSubmissionMillis + anExtraDelayForTestsMillis;

        setTimeout(
            function() {

                someKeptRecordsBeforeSecondSubmission = aCommon_Recorder.fKeptRecords();


                otherRecord = aCommonSvce.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);


                someKeptRecordsAfterSecondSubmission = aCommon_Recorder.fKeptRecords();


                aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_03, null /* point to last record */);


                aCommon_Recorder_SetRecordingPointer_01_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
                aCommon_Recorder_SetRecordingPointer_02_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
                aCommon_Recorder_SetRecordingPointer_03_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);

                aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);



                someCollectedLogsAfterDelay = aConsoleSvce.fCollectedLogsCopy();
                aNumCollectedLogsAfterDelay = someCollectedLogsAfterDelay.length;





                anotherRecord = aCommonSvce.fRecord( aMethodName3, anEventKind3, aData3, aReason3, aDetail3);


                someKeptRecordsAfterThirdSubmission = aCommon_Recorder.fKeptRecords();


                aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_04, null /* point to last record */);


                aCommon_Recorder_SetRecordingPointer_01_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
                aCommon_Recorder_SetRecordingPointer_02_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
                aCommon_Recorder_SetRecordingPointer_03_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
                aCommon_Recorder_SetRecordingPointer_04_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_04);


                aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterDelayTriggering = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);


                someCollectedLogsAfterDelayTriggering = aConsoleSvce.fCollectedLogsCopy();
                aNumCollectedLogsAfterDelayTriggering = someCollectedLogsAfterDelayTriggering.length;




                aCommon_Recorder.pClearKeptRecords();

                someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();



                aConsoleSvce.pSetCollectLogs(    false);

                aConsoleSvce.clear();


                done();
            },
            aDelayMillis
        );



    });







    it("Has main structural features defined, and kept only most recently submitted records", function () {
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


        expect( aCommonSvce.fRecord).not.toBeUndefined();
        expect( typeof aCommonSvce.fRecord).toBe( "function");
        expect( typeof aCommonSvce.fRecord).toBe( "function");

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


