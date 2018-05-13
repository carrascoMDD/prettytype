/*
 * common_type-recordingpolicy_keeprecent-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610181637
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





/// <reference path="src/common/common_type.js"/>
"use strict";




describe("prettytype Common recordingpolicy keepRecent behavioral tests", function () {



    var aNumRecordsToSubmit = 10;

    var aMustKeepRecordsMaxNumber = aNumRecordsToSubmit * 1000; /* Do not prune because of exceeding any records collection size limit */

    var aMustKeepRecordsRecentMillis = 100;

    var aDelayBeforeSecondSubmissionMillis = aMustKeepRecordsRecentMillis * 3;

    var anExtraDelayForTestsMillis = 100; /* Avoid timing too tight to event expiration deadline. There is no need for fine precission on the test, and garbage collection or asynchronous testing machinery could sometimes introduce some extra milliseconds delay */









    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    // console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    // console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    // console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    // console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);


    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    // console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverrider_title = "Overrider-Title-test"

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverrider_title);
    // console.log( "typeof anOverrider= " + typeof anOverrider);
    // console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    // console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);


    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifier_title = "Identifier-Title-test"

    var anIdentifier = new aModule_IdentifierType.Identifier_Constructor( aIdentifier_title);
    // console.log( "typeof anIdentifier= " + typeof anIdentifier);
    // console.log( "anIdentifier keys = " + Object.keys( anIdentifier));




    var aModule_RecordTypeFactory = ModuleFactory_RecordType();
    // console.log( "typeof aModule_RecordTypeFactory= " + typeof aModule_RecordTypeFactory);


    var aModule_RecordType = aModule_RecordTypeFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);


    var aModule_RecordingPolicyTypeFactory = ModuleFactory_RecordingPolicyType();
    // console.log( "typeof aModule_RecordingPolicyTypeFactory= " + typeof aModule_RecordingPolicyTypeFactory);


    var aModule_RecordingPolicyType = aModule_RecordingPolicyTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier);
    // console.log( "typeof aModule_RecordingPolicyType= " + typeof aModule_RecordingPolicyType);






    var aModule_RecordingPolicyKeepAllTypeFactory = ModuleFactory_RecordingPolicyKeepAllType();
    // console.log( "typeof aModule_RecordingPolicyKeepAllTypeFactory= " + typeof aModule_RecordingPolicyKeepAllTypeFactory);


    var aModule_RecordingPolicyKeepAllType = aModule_RecordingPolicyKeepAllTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_RecordingPolicyType);
    // console.log( "typeof aModule_RecordingPolicyKeepAllType= " + typeof aModule_RecordingPolicyKeepAllType);






    var aModule_RecordingPolicyKeepSomeTypeFactory = ModuleFactory_RecordingPolicyKeepSomeType();
    // console.log( "typeof aModule_RecordingPolicyKeepSomeTypeFactory= " + typeof aModule_RecordingPolicyKeepSomeTypeFactory);


    var aModule_RecordingPolicyKeepSomeType = aModule_RecordingPolicyKeepSomeTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_RecordingPolicyKeepAllType);
    // console.log( "typeof aModule_RecordingPolicyKeepSomeType= " + typeof aModule_RecordingPolicyKeepSomeType);





    var aModule_RecordingPolicyKeepRecentTypeFactory = ModuleFactory_RecordingPolicyKeepRecentType();
    // console.log( "typeof aModule_RecordingPolicyKeepRecentTypeFactory= " + typeof aModule_RecordingPolicyKeepRecentTypeFactory);


    var aModule_RecordingPolicyKeepRecentType = aModule_RecordingPolicyKeepRecentTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_RecordingPolicyKeepSomeType);
    // console.log( "typeof aModule_RecordingPolicyKeepRecentType= " + typeof aModule_RecordingPolicyKeepRecentType);







    var aModule_ConsoleSvceFactory = ModuleFactory_ConsoleSvce();
    // console.log( "typeof aModule_ConsoleSvceFactory= " + typeof aModule_ConsoleSvceFactory);

    var aModule_ConsoleSvce = aModule_ConsoleSvceFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_ConsoleSvce= " + typeof aModule_ConsoleSvce);




    var aModule_DumpingPolicyTypeFactory = ModuleFactory_DumpingPolicyType();
    // console.log( "typeof aModule_DumpingPolicyTypeFactory= " + typeof aModule_DumpingPolicyTypeFactory);


    var aModule_DumpingPolicyType = aModule_DumpingPolicyTypeFactory( aTypesRegistrySvce, anOverrider, anIdentifier, aModule_ConsoleSvce);
    // console.log( "typeof aModule_DumpingPolicyType= " + typeof aModule_DumpingPolicyType);




    var aModule_CommonEventKindsFactory = ModuleFactory_CommonEventKinds();
    // console.log( "typeof aModule_CommonEventKindsFactory= " + typeof aModule_CommonEventKindsFactory);

    var aModule_CommonEventKinds = aModule_CommonEventKindsFactory( aTypesRegistrySvce);
    // console.log( "typeof aModule_CommonEventKinds= " + typeof aModule_CommonEventKinds);

    var aModule_DumpingPolicyFilterKindsTypeFactory = ModuleFactory_DumpingPolicyFilterKindsType();
    // console.log( "typeof aModule_DumpingPolicyFilterKindsTypeFactory= " + typeof aModule_DumpingPolicyFilterKindsTypeFactory);


    var aModule_DumpingPolicyFilterKindsType = aModule_DumpingPolicyFilterKindsTypeFactory( aTypesRegistrySvce, anOverrider, aModule_DumpingPolicyType, aModule_CommonEventKinds);
    // console.log( "typeof aModule_DumpingPolicyFilterKindsType= " + typeof aModule_DumpingPolicyFilterKindsType);



    var aModule_RecorderTypeFactory = ModuleFactory_RecorderType();
    // console.log( "typeof aModule_RecorderTypeFactory= " + typeof aModule_RecorderTypeFactory);


    var aModule_RecorderType = aModule_RecorderTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aModule_IdentifierType,
        aModule_RecordType,
        aModule_RecordingPolicyKeepRecentType,
        aModule_DumpingPolicyFilterKindsType

    );
    // console.log( "typeof aModule_RecorderType= " + typeof aModule_RecorderType);

    var aRecorder_title = "Recorder-Title-test"

    var aRecorder = new aModule_RecorderType.Recorder_Constructor(
        aRecorder_title,
        anIdentifier
    );
    // console.log( "typeof aRecorder= " + typeof aRecorder);
    // console.log( "aRecorder keys = " + Object.keys( aRecorder));




    var aModule_CommonTypeFactory = ModuleFactory_CommonType();
    // console.log( "typeof aModule_CommonTypeFactory= " + typeof aModule_CommonTypeFactory);


    var aModule_CommonType = aModule_CommonTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aRecorder,
        aModule_CommonEventKinds
    );
    // console.log( "typeof aModule_CommonType= " + typeof aModule_CommonType);







    var aCommon_title = "Common-Title-test";

    var aMethodName = "common_type_record_test_recordingpolicykeepall__theMethodName";
    var anEventKind = "common_type_record_test_recordingpolicykeepall__theEventKind";
    var aData       = "common_type_record_test_recordingpolicykeepall__theData";
    var aReason     = "common_type_record_test_recordingpolicykeepall__theReason";
    var aDetail     = "common_type_record_test_recordingpolicykeepall__theDetail";



    var aRecordPointerName_keepsome_01         = "recordPointerName_keepsome_01";
    var aRecordPointerName_keepsome_02         = "recordPointerName_keepsome_02";
    var aRecordPointerName_keepsome_03         = "recordPointerName_keepsome_03";







    var aCommon = null;

    var aCommon_Recorder   = null;
    var aCommon_Identifier = null;

    var aRecordingPolicyKeepRecent = null;

    var aCommon_Recorder_SetRecordingPolicy = null;
    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;
    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = null;
    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsRecentMillis = null;

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







    beforeEach( function( done) {

        aCommon = new aModule_CommonType.Common_Constructor(
            aCommon_title,
            anIdentifier,
            aRecorder
        );
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));



        aCommon_Recorder   = aCommon._v_Recorder;
        aCommon_Identifier = aCommon._v_Identifier;


        aRecordingPolicyKeepRecent = new aModule_RecordingPolicyKeepRecentType.RecordingPolicyKeepRecent_Constructor( "RecordingPolicy-for-common_type-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder);

        aRecordingPolicyKeepRecent.pSetMustKeepRecords(             true);
        aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber(    aMustKeepRecordsMaxNumber);
        aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis( aMustKeepRecordsRecentMillis);

        aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepRecent);



        aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

        aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();
        aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsMaxNumber();
        aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsRecentMillis = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsRecentMillis();






        aCommon_Recorder.pClearKeptRecords();

        someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();






        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepsome_01, null /* point to last record */);
        aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_01);





        for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {

            var aPrefix = "0000" + aSubmittedRecordIdx;
            aPrefix = aPrefix.substr( aPrefix.length - 4);
            var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind + aPrefix, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
        }


        someKeptRecordsAfterFirstSubmission = aCommon_Recorder.fKeptRecords();


        aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepsome_02, null /* point to last record */);

        aCommon_Recorder_SetRecordingPointer_01_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_01);
        aCommon_Recorder_SetRecordingPointer_02_afterFirstSubmit = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_02);





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




                aCommon_Recorder.pSetRecordPointer( aRecordPointerName_keepsome_03, null /* point to last record */);


                aCommon_Recorder_SetRecordingPointer_01_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_01);
                aCommon_Recorder_SetRecordingPointer_02_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_02);
                aCommon_Recorder_SetRecordingPointer_03_afterDelay = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_keepsome_03);





                aCommon_Recorder.pClearKeptRecords();

                someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();


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



