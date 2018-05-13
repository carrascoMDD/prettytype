/*
 * recordingpolicy_keepall_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610061702
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






/// <reference path="src/identifying/recordingpolicy_keepall_type.js"/>
"use strict";




describe("prettytype  RecordingPolicyKeepAll structural tests", function () {

    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    //console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    //console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    //console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    //console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);


    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    //console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverriderType_title = "Overrider-Title-test";

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverriderType_title);
    //console.log( "typeof anOverrider= " + typeof anOverrider);
    //console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    //console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);


    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    //console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifierType_title = "Identifier-Title-test";

    var anIdentifier = new aModule_IdentifierType.Identifier_Constructor( aIdentifierType_title);
    //console.log( "typeof anIdentifier= " + typeof anIdentifier);
    //console.log( "anIdentifier keys = " + Object.keys( anIdentifier));




    var aModule_RecordTypeFactory = ModuleFactory_RecordType();
    //console.log( "typeof aModule_RecordTypeFactory= " + typeof aModule_RecordTypeFactory);


    var aModule_RecordType = aModule_RecordTypeFactory( aTypesRegistrySvce, anOverrider);
    //console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);







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
    //console.log( "typeof aModule_RecorderType= " + typeof aModule_RecorderType);

    var aRecorderType_title = "Recorder-Title-test";

    var aRecorder = new aModule_RecorderType.Recorder_Constructor(
        aRecorderType_title,
        anIdentifier
    );
    //console.log( "typeof aRecorder= " + typeof aRecorder);
    //console.log( "aRecorder keys = " + Object.keys( aRecorder));







    var aRecordingPolicyKeepAllType_title = "RecordingPolicyKeepAll-Title-test";

    var aRecordingPolicyKeepAll = new aModule_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Constructor(
        aRecordingPolicyKeepAllType_title,
        anIdentifier,
        aRecorder
    );



    it("Has module defined", function () {
        expect( aRecordingPolicyKeepAll._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aRecordingPolicyKeepAll._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName recordingpolicy_keepall_type", function () {
        expect( aRecordingPolicyKeepAll._v_Module.ModuleName).toBe( "recordingpolicy_keepall_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aRecordingPolicyKeepAll._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.recordingpolicy_keepall_type", function () {
        expect( aRecordingPolicyKeepAll._v_Module.ModuleFullName).toBe( "identifying/recordingpolicy_keepall_type");
    });

    it("Has module RecordingPolicyKeepAll_Prototype defined", function () {
        expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepAll_Prototype not null", function () {
        expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype).not.toBeNull( null);
    });

    it("Has module RecordingPolicyKeepAll_Constructor defined", function () {
        expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Constructor).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepAll_Constructor not null", function () {
        expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Constructor).not.toBeNull( null);
    });

    it("Has module RecordingPolicyKeepAll_SuperPrototypeConstructor defined", function () {
        expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepAll_SuperPrototypeConstructor not null", function () {
        expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aRecordingPolicyKeepAll._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module RecordingPolicyKeepAll_Prototype", function () {
        expect( aRecordingPolicyKeepAll._v_Prototype).toBe( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype);
    });

    it("Has _v_Prototype_RecordingPolicyKeepAll defined", function () {
        expect( aRecordingPolicyKeepAll._v_Prototype_RecordingPolicyKeepAll).not.toBeUndefined();
    });

    it("Has _v_Prototype_RecordingPolicyKeepAll module RecordingPolicyKeepAll_Prototype", function () {
        expect( aRecordingPolicyKeepAll._v_Prototype).toBe( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype);
    });



    it("Has _v_Type RecordingPolicyKeepAll", function () {
        expect( aRecordingPolicyKeepAll._v_Type).toBe( "RecordingPolicyKeepAll");
    });

    it("Has title RecordingPolicyKeepAll_DefaultName", function () {
        expect( aRecordingPolicyKeepAll._v_Title).toBe( aRecordingPolicyKeepAllType_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aRecordingPolicyKeepAll.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingJSON().type).toBe( aRecordingPolicyKeepAll._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingJSON().id).toBe( aRecordingPolicyKeepAll._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingString()).toBe( JSON.stringify( aRecordingPolicyKeepAll.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON().type).toBe( aRecordingPolicyKeepAll._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON().id).toBe( aRecordingPolicyKeepAll._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON().title).toBe( aRecordingPolicyKeepAll._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aRecordingPolicyKeepAll.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aRecordingPolicyKeepAll.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepAll.fToResultJSON().type).toBe( aRecordingPolicyKeepAll._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepAll.fToResultJSON().id).toBe( aRecordingPolicyKeepAll._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aRecordingPolicyKeepAll.fToResultJSON().title).toBe( aRecordingPolicyKeepAll._v_Title);
    });






    it("Has fRecordRecord defined", function () {
        expect( aRecordingPolicyKeepAll.fRecordRecord).not.toBeUndefined();
    });

    it("Has fRecordRecord typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fRecordRecord).toBe( "function");
    });





    it("Has pPruneRecords defined", function () {
        expect( aRecordingPolicyKeepAll.pPruneRecords).not.toBeUndefined();
    });

    it("Has pPruneRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.pPruneRecords).toBe( "function");
    });




    it("Has pRelease defined", function () {
        expect( aRecordingPolicyKeepAll.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.pRelease).toBe( "function");
    });





    it("Has fRecorder defined", function () {
        expect( aRecordingPolicyKeepAll.fRecorder).not.toBeUndefined();
    });

    it("Has fRecorder typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fRecorder).toBe( "function");
    });


    it("Has pSetRecorder defined", function () {
        expect( aRecordingPolicyKeepAll.pSetRecorder).not.toBeUndefined();
    });

    it("Has pSetRecorder typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.pSetRecorder).toBe( "function");
    });





    it("Has pSetMustKeepRecords defined", function () {
        expect( aRecordingPolicyKeepAll.pSetMustKeepRecords).not.toBeUndefined();
    });

    it("Has pSetMustKeepRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.pSetMustKeepRecords).toBe( "function");
    });



    it("Has fMustKeepRecords defined", function () {
        expect( aRecordingPolicyKeepAll.fMustKeepRecords).not.toBeUndefined();
    });

    it("Has fMustKeepRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepAll.fMustKeepRecords).toBe( "function");
    });




});
