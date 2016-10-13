/*
 * common_type-recordingpolicy_keepall-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610121553
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




describe("prettytype Common recordingpolicy keepAll behavioral tests", function () {

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
        aRecorder
    );
    // console.log( "typeof aModule_CommonType= " + typeof aModule_CommonType);

    var aCommon_title = "Common-Title-test"

    var aCommon = new aModule_CommonType.Common_Constructor(
        aCommon_title,
        anIdentifier,
        aRecorder
    );
    // console.log( "typeof aCommon= " + typeof aCommon);
    // console.log( "aCommon keys = " + Object.keys( aCommon));





    var aCommon_Recorder   = aCommon._v_Recorder;
    var aCommon_Identifier = aCommon._v_Identifier;




    var aRecordingPolicyKeepAll = new aModule_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Constructor( "RecordingPolicy-for-common_type-recordingpolicy_keepall-behavioral-test.js", aCommon_Identifier, aCommon_Recorder)

    aRecordingPolicyKeepAll.pSetMustKeepRecords( true);

    aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepAll);


    var aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();


    var aBeforeRecordMillis = new Date().getMilliseconds();

    var aMethodName = "common_type_record_test_recordingpolicykeepall__theMethodName";
    var anEventKind = "common_type_record_test_recordingpolicykeepall__theEventKind";
    var aData       = "common_type_record_test_recordingpolicykeepall__theData";
    var aReason     = "common_type_record_test_recordingpolicykeepall__theReason";
    var aDetail     = "common_type_record_test_recordingpolicykeepall__theDetail";



    aCommon_Recorder.pClearKeptRecords();

    var someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();

    var aRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);

    var aMethodName2 = "common_type_record_test_recordingpolicykeepall__theMethodName2";
    var anEventKind2 = "common_type_record_test_recordingpolicykeepall__theEventKind2";
    var aData2       = "common_type_record_test_recordingpolicykeepall__theData2";
    var aReason2     = "common_type_record_test_recordingpolicykeepall__theReason2";
    var aDetail2     = "common_type_record_test_recordingpolicykeepall__theDetail2";

    var otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);


    var someKeptRecords = aCommon_Recorder.fKeptRecords();
    var aKeptRecord_1 = someKeptRecords[ 0];
    var aKeptRecord_2 = someKeptRecords[ 1];








    aCommon_Recorder.pClearKeptRecords();

    var someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();
    
    
    
    
    
    it("Has _v_Identifier defined", function () {
        expect( aCommon_Identifier).not.toBeUndefined();
    });

    it("Has _v_Identifier typeof object", function () {
        expect( typeof aCommon_Identifier).toBe( "object");
    });

    it("Has _v_Identifier not null", function () {
        expect( aCommon_Identifier).not.toBeNull();
    });


    


    it("Has _v_Recorder defined", function () {
        expect( aCommon_Recorder).not.toBeUndefined();
    });

    it("Has _v_Recorder typeof object", function () {
        expect( typeof aCommon_Recorder).toBe( "object");
    });

    it("Has _v_Recorder not null", function () {
        expect( aCommon_Recorder).not.toBeNull();
    });





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
        expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepAll);
    });


    it("Has after pSetRecordingPolicy() _v_Recorder.fRecordingPolicy() same as set fMustKeepRecords", function () {
        expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
    });




    it("Has fRecord defined", function () {
        expect( aCommon.fRecord).not.toBeUndefined();
    });

    it("Has fRecord typeof function", function () {
        expect( typeof aCommon.fRecord).toBe( "function");
    });




    it("Has fRecord typeof function", function () {
        expect( typeof aCommon.fRecord).toBe( "function");
    });






    it("Has aCommon_Recorder.fKeptRecords() defined", function () {
        expect( someKeptRecordsBefore).not.toBeUndefined();
    });

    it("Has aCommon_Recorder.fKeptRecords() typeof object", function () {
        expect( typeof someKeptRecordsBefore).toBe( "object");
    });

    it("Has aCommon_Recorder.fKeptRecords() not null", function () {
        expect( someKeptRecordsBefore).not.toBeNull();
    });

    it("Has aCommon_Recorder.fKeptRecords() length == 0", function () {
        expect( someKeptRecordsBefore.length).toBe( 0);
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




    it("Has aCommon_Recorder.fKeptRecords() defined", function () {
        expect( someKeptRecords).not.toBeUndefined();
    });

    it("Has aCommon_Recorder.fKeptRecords() typeof object", function () {
        expect( typeof someKeptRecords).toBe( "object");
    });

    it("Has aCommon_Recorder.fKeptRecords() not null", function () {
        expect( someKeptRecords).not.toBeNull();
    });

    it("Has aCommon_Recorder.fKeptRecords() length == 2", function () {
        expect( someKeptRecords.length).toBe( 2);
    });







    it("Has aCommon_Recorder.fKeptRecords()[ 0] defined", function () {
        expect( aKeptRecord_1).not.toBeUndefined();
    });

    it("Has aCommon_Recorder.fKeptRecords()[ 0] typeof object", function () {
        expect( typeof aKeptRecord_1).toBe( "object");
    });

    it("Has aCommon_Recorder.fKeptRecords()[ 0] not null", function () {
        expect( aKeptRecord_1).not.toBeNull();
    });

    it("Has fRecord() _v_Timestamp number", function () {
        expect( typeof aKeptRecord_1._v_Timestamp).toBe( "number");
    });

    it("Has fRecord() _v_Timestamp after", function () {
        expect( aKeptRecord_1._v_Timestamp >= aBeforeRecordMillis).toBe( true);
    });

    it("Has fRecord() _v_RecordId not null", function () {
        expect( aKeptRecord_1._v_RecordId).not.toBeNull();
    });

    it("Has fRecord() _v_Instance self", function () {
        expect( aKeptRecord_1._v_Instance).toBe( aCommon);
    });

    it("Has fRecord() _v_Step supplied", function () {
        expect( aKeptRecord_1._v_Step).toBe( aMethodName);
    });

    it("Has fRecord() _v_EventKind supplied", function () {
        expect( aKeptRecord_1._v_EventKind).toBe( anEventKind);
    });

    it("Has fRecord() _v_Data supplied", function () {
        expect( aKeptRecord_1._v_Data).toBe( aData);
    });

    it("Has fRecord() _v_Reason supplied", function () {
        expect( aKeptRecord_1._v_Reason).toBe( aReason);
    });

    it("Has fRecord() _v_Detail supplied", function () {
        expect( aKeptRecord_1._v_Detail).toBe( aDetail);
    });








    it("Has aCommon_Recorder.fKeptRecords()[ 1] defined", function () {
        expect( aKeptRecord_2).not.toBeUndefined();
    });

    it("Has aCommon_Recorder.fKeptRecords()[ 1] typeof object", function () {
        expect( typeof aKeptRecord_2).toBe( "object");
    });

    it("Has aCommon_Recorder.fKeptRecords()[ 1] not null", function () {
        expect( aKeptRecord_2).not.toBeNull();
    });

    it("Has fRecord() _v_Timestamp number", function () {
        expect( typeof aKeptRecord_2._v_Timestamp).toBe( "number");
    });

    it("Has fRecord() _v_Timestamp after", function () {
        expect( aKeptRecord_2._v_Timestamp >= aBeforeRecordMillis).toBe( true);
    });

    it("Has fRecord() _v_RecordId not null", function () {
        expect( aKeptRecord_2._v_RecordId).not.toBeNull();
    });

    it("Has fRecord() _v_Instance self", function () {
        expect( aKeptRecord_2._v_Instance).toBe( aCommon);
    });

    it("Has fRecord() _v_Step supplied", function () {
        expect( aKeptRecord_2._v_Step).toBe( aMethodName2);
    });

    it("Has fRecord() _v_EventKind supplied", function () {
        expect( aKeptRecord_2._v_EventKind).toBe( anEventKind2);
    });

    it("Has fRecord() _v_Data supplied", function () {
        expect( aKeptRecord_2._v_Data).toBe( aData2);
    });

    it("Has fRecord() _v_Reason supplied", function () {
        expect( aKeptRecord_2._v_Reason).toBe( aReason2);
    });

    it("Has fRecord() _v_Detail supplied", function () {
        expect( aKeptRecord_2._v_Detail).toBe( aDetail2);
    });





    it("Has aCommon_Recorder.fKeptRecords() defined", function () {
        expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
    });

    it("Has aCommon_Recorder.fKeptRecords() typeof object", function () {
        expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
    });

    it("Has aCommon_Recorder.fKeptRecords() not null", function () {
        expect( someKeptRecordsAfterFinalClear).not.toBeNull();
    });

    it("Has aCommon_Recorder.fKeptRecords() length == 0", function () {
        expect( someKeptRecordsAfterFinalClear.length).toBe( 0);
    });



});


