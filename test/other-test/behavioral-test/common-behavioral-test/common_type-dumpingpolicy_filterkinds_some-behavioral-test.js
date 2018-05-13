/*
 * common_type-dumpingpolicy_filterkinds_some-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131318
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




describe("prettytype Common dumpingpolicy filterkinds some behavioral tests", function () {

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
        aModule_RecordingPolicyKeepAllType,
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





    var aMethodName = "common_type_record_test_dumpingpolicfilterkindsall__theMethodName";
    var anEventKind = "common_type_record_test_dumpingpolicfilterkindsall__theEventKind";
    var aData       = "common_type_record_test_dumpingpolicfilterkindsall__theData";
    var aReason     = "common_type_record_test_dumpingpolicfilterkindsall__theReason";
    var aDetail     = "common_type_record_test_dumpingpolicfilterkindsall__theDetail";



    var aMethodName2 = "common_type_record_test_dumpingpolicfilterkindsall__theMethodName2";
    var anEventKind2 = "common_type_record_test_dumpingpolicfilterkindsall__theEventKind2";
    var aData2       = "common_type_record_test_dumpingpolicfilterkindsall__theData2";
    var aReason2     = "common_type_record_test_dumpingpolicfilterkindsall__theReason2";
    var aDetail2     = "common_type_record_test_dumpingpolicfilterkindsall__theDetail2";



    var aRecordPointerName_filterkinds_01 = "recordPointerName_filterkinds_01";
    var aRecordPointerName_filterkinds_02 = "recordPointerName_filterkinds_02";
    var aRecordPointerName_filterkinds_03 = "recordPointerName_filterkinds_03";









    var aDumpingPolicyFilterKindsAll = new aModule_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_Constructor( "DumpingPolicy-for-common_type-dumpingpolicy_filterkinds_all-behavioral-test.js", aCommon_Identifier, aCommon_Recorder)

    aDumpingPolicyFilterKindsAll.pSetMayDumpRecords( true);
    aDumpingPolicyFilterKindsAll.fSetEventKindsNotForConsole( [ anEventKind2]);


    aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyFilterKindsAll);

    var aCommon_Recorder_SetDumpingPolicy                         = aCommon_Recorder.fDumpingPolicy();
    var aCommon_Recorder_SetDumpingPolicy_MayDumpRecords          = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();
    var aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole = aCommon_Recorder_SetDumpingPolicy.fEventKindsNotForConsole();


    aModule_ConsoleSvce.pSetWriteToConsole(          true);
    aModule_ConsoleSvce.pSetCollectLogs(             true);
    aModule_ConsoleSvce.pSetMaxCollectedLogsLength(  1000000);


    aModule_ConsoleSvce.clear();

    var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsBefore = someCollectedLogsBefore.length;



    var aBeforeRecordMillis = new Date().getMilliseconds();




    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_01, null /* point to last record */);


    var aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);

    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);






    var aRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);





    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_02, null /* point to last record */);

    var aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
    var aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_02);

    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);





    var someCollectedLogsAfter1 = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsAfter1 = someCollectedLogsAfter1.length;
    var aLastCollectedLogAfter1 = someCollectedLogsAfter1[ someCollectedLogsAfter1.length - 1];









    var otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);


    aCommon_Recorder.pSetRecordPointer( aRecordPointerName_filterkinds_03, null /* point to last record */);


    var aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_01);
    var aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_02);
    var aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aRecordPointerName_filterkinds_03);

    var aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord = aCommon_Recorder.fGetRecordPointerNamed( aCommon_Recorder_SetDumpingPolicy.RECORDPOINTERNAME_LASTDUMPED);



    var someCollectedLogsAfter2 = aModule_ConsoleSvce.fCollectedLogsCopy();
    var aNumCollectedLogsAfter2 = someCollectedLogsAfter2.length;



    aModule_ConsoleSvce.pSetCollectLogs(    false);

    aModule_ConsoleSvce.clear();







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
        expect( aCommon_Recorder_SetDumpingPolicy).toBe( aDumpingPolicyFilterKindsAll);
    });


    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy().fMayDumpRecords() same as set MayDumpRecords", function () {
        expect( aCommon_Recorder_SetDumpingPolicy_MayDumpRecords).toBe( true);
    });


    it("Has after pSetDumpingPolicy() _v_Recorder.fDumpingPolicy().fEventKindsNotForConsole() same as set EventKindsNotForConsole", function () {
        expect( aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole.length).toBe( 1);
        expect( aCommon_Recorder_SetDumpingPolicy_EventKindsNotForConsole[ 0]).toBe( anEventKind2);
    });







    it("Has fRecord() defined", function () {
        expect( aRecord).not.toBeUndefined();
    });

    it("Has fRecord() not null", function () {
        expect( aRecord).not.toBeNull();
    });

    it("Has fRecord() object", function () {
        expect( typeof aRecord).toBe( "object");
    });

    it("Has fRecord() _v_Timestamp number", function () {
        expect( typeof aRecord._v_Timestamp).toBe( "number");
    });

    it("Has fRecord() _v_Timestamp after", function () {
        expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
    });

    it("Has fRecord() _v_RecordId not null", function () {
        expect( aRecord._v_RecordId).not.toBeNull();
    });

    it("Has fRecord() _v_Instance self", function () {
        expect( aRecord._v_Instance).toBe( aCommon);
    });

    it("Has fRecord() _v_Step supplied", function () {
        expect( aRecord._v_Step).toBe( aMethodName);
    });

    it("Has fRecord() _v_EventKind supplied", function () {
        expect( aRecord._v_EventKind).toBe( anEventKind);
    });

    it("Has fRecord() _v_Data supplied", function () {
        expect( aRecord._v_Data).toBe( aData);
    });

    it("Has fRecord() _v_Reason supplied", function () {
        expect( aRecord._v_Reason).toBe( aReason);
    });

    it("Has fRecord() _v_Detail supplied", function () {
        expect( aRecord._v_Detail).toBe( aDetail);
    });



    it("Has other fRecord() defined", function () {
        expect( otherRecord).not.toBeUndefined();
    });

    it("Has other fRecord() not null", function () {
        expect( otherRecord).not.toBeNull();
    });

    it("Has other fRecord() _v_RecordId not null", function () {
        expect( otherRecord._v_RecordId).not.toBeNull();
    });

    it("Has other fRecord() _v_RecordId > first fRecord() _v_RecordId not null", function () {
        expect( otherRecord._v_RecordId > aRecord._v_RecordId).not.toBeNull();
    });

    it("Has fRecord() _v_Instance self", function () {
        expect( otherRecord._v_Instance).toBe( aCommon);
    });

    it("Has fRecord() _v_Step supplied", function () {
        expect( otherRecord._v_Step).toBe( aMethodName2);
    });

    it("Has fRecord() _v_EventKind supplied", function () {
        expect( otherRecord._v_EventKind).toBe( anEventKind2);
    });

    it("Has fRecord() _v_Data supplied", function () {
        expect( otherRecord._v_Data).toBe( aData2);
    });

    it("Has fRecord() _v_Reason supplied", function () {
        expect( otherRecord._v_Reason).toBe( aReason2);
    });

    it("Has fRecord() _v_Detail supplied", function () {
        expect( otherRecord._v_Detail).toBe( aDetail2);
    });







    it("Has aNumCollectedLogsBefore == 0", function () {
        expect( aNumCollectedLogsBefore).toBe( 0);
    });


    it("Has aNumCollectedLogsAfter1 == 1", function () {
        expect( aNumCollectedLogsAfter1).toBe( 1);
    });

    it("Has aLastCollectedLogAfter1 == aRecord", function () {

        expect( aLastCollectedLogAfter1).toBeTruthy();

        var aLastCollectedLogAfter1_kind    = aLastCollectedLogAfter1[ 0];
        var aLastCollectedLogAfter1_message = aLastCollectedLogAfter1[ 1];

        expect( aLastCollectedLogAfter1_kind).toBe( "log");
        expect( aLastCollectedLogAfter1_message).toBe( "," + aRecord.fLogString());
    });



    it("Has aNumCollectedLogsAfter2 == 1", function () {
        expect( aNumCollectedLogsAfter2).toBe( 1);
    });





    it("Has aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords == -1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_beforeAnyRecords).toBe( -1);
    });


    it("Has aCommon_Recorder_SetRecordingPointer_01_afterExactlyMaxRecords == -1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_afterFirstRecord).toBe( -1);
    });


    it("Has aCommon_Recorder_SetRecordingPointer_02_afterExactlyMaxRecords == 0", function () {
        expect( aCommon_Recorder_SetRecordingPointer_02_afterFirstRecord).toBe( 0);
    });



    it("Has aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord == -1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_01_afterSecondRecord).toBe( -1);
    });


    it("Has aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord == 0", function () {
        expect( aCommon_Recorder_SetRecordingPointer_02_afterSecondRecord).toBe( 0);
    });


    it("Has aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord == 1", function () {
        expect( aCommon_Recorder_SetRecordingPointer_03_afterSecondRecord).toBe( 1);
    });




    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords == undefined", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_beforeAnyRecords).toBe( undefined);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord == 0", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterFirstRecord).toBe( 0);
    });

    it("Has aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord == 0", function () {
        expect( aCommon_Recorder_SetRecordingPointer_LastDumpedRecord_afterSecondRecord).toBe( 0);
    });



});



