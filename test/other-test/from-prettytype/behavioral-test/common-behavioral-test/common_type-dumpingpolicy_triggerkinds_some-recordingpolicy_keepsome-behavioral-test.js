/*
 * common_type-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610281628
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




describe("prettytype Common dumpingpolicy triggerkinds some recordingpolicy keep some behavioral tests", function () {




    var aMustKeepRecordsMaxNumber = 10;



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


    var aModule_RecordingPolicyKeepAllType = aModule_RecordingPolicyKeepAllTypeFactory( aTypesRegistrySvce, anOverrider, aModule_RecordingPolicyType);
    // console.log( "typeof aModule_RecordingPolicyKeepAllType= " + typeof aModule_RecordingPolicyKeepAllType);






    var aModule_RecordingPolicyKeepSomeTypeFactory = ModuleFactory_RecordingPolicyKeepSomeType();
    // console.log( "typeof aModule_RecordingPolicyKeepSomeTypeFactory= " + typeof aModule_RecordingPolicyKeepSomeTypeFactory);


    var aModule_RecordingPolicyKeepSomeType = aModule_RecordingPolicyKeepSomeTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_RecordingPolicyKeepAllType);
    // console.log( "typeof aModule_RecordingPolicyKeepSomeType= " + typeof aModule_RecordingPolicyKeepSomeType);






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




    var aModule_DumpingPolicyTriggerKindsTypeFactory = ModuleFactory_DumpingPolicyTriggerKindsType();
    // console.log( "typeof aModule_DumpingPolicyTriggerKindsTypeFactory= " + typeof aModule_DumpingPolicyTriggerKindsTypeFactory);

    var aModule_DumpingPolicyTriggerKindsType = aModule_DumpingPolicyTriggerKindsTypeFactory( 
        aTypesRegistrySvce, 
        anOverrider,
        aModule_DumpingPolicyFilterKindsType,
        aModule_CommonEventKinds);
    // console.log( "typeof aModule_DumpingPolicyTriggerKindsType= " + typeof aModule_DumpingPolicyTriggerKindsType);





    var aModule_RecorderTypeFactory = ModuleFactory_RecorderType();
    // console.log( "typeof aModule_RecorderTypeFactory= " + typeof aModule_RecorderTypeFactory);


    var aModule_RecorderType = aModule_RecorderTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aModule_IdentifierType,
        aModule_RecordType,
        aModule_RecordingPolicyKeepSomeType,
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

    var aCommon = new aModule_CommonType.Common_Constructor(
        aCommon_title,
        anIdentifier,
        aRecorder
    );
    // console.log( "typeof aCommon= " + typeof aCommon);
    // console.log( "aCommon keys = " + Object.keys( aCommon));




    var aCommon_Identifier = aCommon._v_Identifier;
    var aCommon_Recorder   = aCommon._v_Recorder;






    var aMethodName = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theMethodName";
    var anEventKind = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theEventKind";
    var aData       = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theData";
    var aReason     = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theReason";
    var aDetail     = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theDetail";


    var aMethodName2 = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theMethodName2";
    var anEventKind2 = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theEventKind2";
    var aData2       = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theData2";
    var aReason2     = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theReason2";
    var aDetail2     = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theDetail2";


    var aMethodName3 = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theMethodName3";
    var anEventKind3 = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theEventKind3";
    var aData3       = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theData3";
    var aReason3     = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theReason3";
    var aDetail3     = "common_type_record_test_dumpingpolictriggerkindsall__recordingpolicykeepsome__theDetail3";


    var aRecordPointerName_triggerkinds_01 = "recordPointerName_triggerkinds_01";
    var aRecordPointerName_triggerkinds_02 = "recordPointerName_triggerkinds_02";
    var aRecordPointerName_triggerkinds_03 = "recordPointerName_triggerkinds_03";
    var aRecordPointerName_triggerkinds_04 = "recordPointerName_triggerkinds_04";









    var aRecordingPolicyKeepSome = new aModule_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Constructor( "RecordingPolicy-for-common_type-recordingpolicy_keepsome-behavioral-test.js", aCommon_Identifier, aCommon_Recorder)
    aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepSome);

    var aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

    aRecordingPolicyKeepSome.pSetMustKeepRecords( true);
    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();


    aRecordingPolicyKeepSome.pSetMustKeepRecordsMaxNumber( aMustKeepRecordsMaxNumber);
    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecordsMaxNumber();








    var aDumpingPolicyTriggerKinds = new aModule_DumpingPolicyTriggerKindsType.DumpingPolicyTriggerKinds_Constructor( "DumpingPolicy-for-common_type-dumpingpolicy_triggerkinds_all-behavioral-test.js", aCommon_Identifier, aCommon_Recorder)

    aDumpingPolicyTriggerKinds.pSetMayDumpRecords( true);
    aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole( [ ]);
    aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump( [ anEventKind3]);

    aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyTriggerKinds);

    var aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
    var aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
    var aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole  = aCommon_Recorder_SetDumpingPolicy.fEventKindsNotForConsole();
    var aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump = aCommon_Recorder_SetDumpingPolicy.fEventKindsTriggeringDump();


    aModule_ConsoleSvce.pSetWriteToConsole(          true);
    aModule_ConsoleSvce.pSetCollectLogs(             true);
    aModule_ConsoleSvce.pSetMaxCollectedLogsLength(  1000000);


    aModule_ConsoleSvce.clear();

    var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsBefore = someCollectedLogsBefore.length;








    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_01, null /* point to last record */);

    var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);

    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);








    for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aMustKeepRecordsMaxNumber; aSubmittedRecordIdx++) {

        var aPrefix = "0000" + aSubmittedRecordIdx;
        aPrefix = aPrefix.substr( aPrefix.length - 4);
        var aSubmittedRecord = aCommon.fRecord( aMethodName + aPrefix, anEventKind, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
    }



    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_02, null /* point to last record */);

    var aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
    var aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);


    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);




    var someCollectedLogsAfterExactlyMaxRecords = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsAfterExactlyMaxRecords = someCollectedLogsAfterExactlyMaxRecords.length;








    var otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);



    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_03, null /* point to last record */);


    var aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
    var aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
    var aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);

    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);





    var someCollectedLogsAfterExceedingMaxRecordsNoTrigger = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger = someCollectedLogsAfterExceedingMaxRecordsNoTrigger.length;








    var anotherRecord = aCommon.fRecord( aMethodName3, anEventKind3, aData3, aReason3, aDetail3);



    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_triggerkinds_04, null /* point to last record */);


    var aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_01);
    var aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_02);
    var aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_03);
    var aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_triggerkinds_04);

    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);


    var someCollectedLogsAfterExceedingMaxRecordsTriggering = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsAfterExceedingMaxRecordsTriggering = someCollectedLogsAfterExceedingMaxRecordsTriggering.length;





    aModule_ConsoleSvce.pSetCollectLogs(    false);

    aModule_ConsoleSvce.clear();







    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy() defined", function () {
        expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
    });

    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy() typeof object", function () {
        expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
    });

    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy() not null", function () {
        expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
    });

    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy() same as set", function () {
        expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepSome);
    });


    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy().fMustKeepRecords same as set MustKeepRecords", function () {
        expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
    });


    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy().fMustKeepRecordsMaxNumber() same as set MustKeepRecordsMaxNumber", function () {
        expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecordsMaxNumber).toBe( aMustKeepRecordsMaxNumber);
    });






    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy() defined", function () {
        expect( aCommon_Recorder_SetDumpingPolicy).not.toBeUndefined();
    });

    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy() typeof object", function () {
        expect( typeof aCommon_Recorder_SetDumpingPolicy).toBe( "object");
    });

    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy() not null", function () {
        expect( aCommon_Recorder_SetDumpingPolicy).not.toBeNull();
    });

    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy() same as set", function () {
        expect( aCommon_Recorder_SetDumpingPolicy).toBe( aDumpingPolicyTriggerKinds);
    });


    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy() same as set fMayDumpRecords", function () {
        expect( aCommon_Recorder_SetDumpingPolicy_MayDumpRecords).toBe( true);
    });

    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy().fEventKindsNotForConsole() same as set EventKindsNotForConsole", function () {
        expect( aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole.length).toBe( 0);
    });

    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy().fEventKindsTriggeringDump() same as set EventKindsTriggeringDump", function () {
        expect( aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump.length).toBe( 1);
        expect( aCommon_Recorder_SetDumpingPolicy_EventKindsTriggeringDump[ 0]).toBe( anEventKind3);
    });














    it("Has aNumCollectedLogsBefore == 0", function () {
        expect( aNumCollectedLogsBefore).toBe( 0);
    });


    it("Has aNumCollectedLogsAfterExactlyMaxRecords == 0", function () {
        expect( aNumCollectedLogsAfterExactlyMaxRecords).toBe( 0);
    });


    it("Has aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger == 0", function () {
        expect( aNumCollectedLogsAfterExceedingMaxRecordsNoTrigger).toBe( 0);
    });



    it("Has aNumCollectedLogsAfterExceedingMaxRecordsTriggering == 10", function () {
        expect( aNumCollectedLogsAfterExceedingMaxRecordsTriggering).toBe( 10);
    });





    it("Has aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords == -1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
    });

    
    
    

    it("Has aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords == -1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords).toBe( -1);
    });


    it("Has aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords == aMustKeepRecordsMaxNumber - 1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords).toBe( aMustKeepRecordsMaxNumber - 1);
    });





    it("Has aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger == -1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsNoTrigger).toBe( -2);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger == aMustKeepRecordsMaxNumber - 1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsNoTrigger).toBe( aMustKeepRecordsMaxNumber - 2);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger == aMustKeepRecordsMaxNumber - 1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsNoTrigger).toBe( aMustKeepRecordsMaxNumber - 1);
    });




    it("Has aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering == -3", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_afterExceedingMaxRecordsTriggering).toBe( -3);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering == aMustKeepRecordsMaxNumber - 3", function () {
        expect( aCommon_Recorder_SetRecordingPointer_02_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 3);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering == aMustKeepRecordsMaxNumber - 2", function () {
        expect( aCommon_Recorder_SetRecordingPointer_03_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 2);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering == aMustKeepRecordsMaxNumber - 1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_04_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 1);
    });


    

    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords == undefined", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords).toBe( undefined);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords == undefined", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExactlyMaxRecords).toBe( undefined);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger == undefined", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsNoTrigger).toBe( undefined);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering == aMustKeepRecordsMaxNumber - 1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterExceedingMaxRecordsTriggering).toBe( aMustKeepRecordsMaxNumber - 1);
    });

});



