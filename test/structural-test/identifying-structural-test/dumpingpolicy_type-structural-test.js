/*
 * dumpingpolicy_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 20161006712
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






/// <reference path="src/identifying/dumpingpolicy_type.js"/>
"use strict";




describe("prettytype  DumpingPolicy structural tests", function () {

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







    var aDumpingPolicyType_title = "DumpingPolicy-Title-test";

    var aDumpingPolicy = new aModule_DumpingPolicyType.DumpingPolicy_Constructor(
        aDumpingPolicyType_title,
        anIdentifier,
        aRecorder
    );
    
    

    it("Has module defined", function () {
        expect( aDumpingPolicy._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aDumpingPolicy._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName dumpingpolicy_type", function () {
        expect( aDumpingPolicy._v_Module.ModuleName).toBe( "dumpingpolicy_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aDumpingPolicy._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.dumpingpolicy_type", function () {
        expect( aDumpingPolicy._v_Module.ModuleFullName).toBe( "identifying/dumpingpolicy_type");
    });

    it("Has module DumpingPolicy_Prototype defined", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Prototype).not.toBeUndefined();
    });

    it("Has module DumpingPolicy_Prototype not null", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Prototype).not.toBeNull( null);
    });

    it("Has module DumpingPolicy_Constructor defined", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Constructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicy_Constructor not null", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Constructor).not.toBeNull( null);
    });

    it("Has module DumpingPolicy_SuperPrototypeConstructor defined", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicy_SuperPrototypeConstructor not null", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aDumpingPolicy._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module DumpingPolicy_Prototype", function () {
        expect( aDumpingPolicy._v_Prototype).toBe( aDumpingPolicy._v_Module.DumpingPolicy_Prototype);
    });

    it("Has _v_Prototype_DumpingPolicy defined", function () {
        expect( aDumpingPolicy._v_Prototype_DumpingPolicy).not.toBeUndefined();
    });

    it("Has _v_Prototype_DumpingPolicy module DumpingPolicy_Prototype", function () {
        expect( aDumpingPolicy._v_Prototype).toBe( aDumpingPolicy._v_Module.DumpingPolicy_Prototype);
    });



    it("Has _v_Type DumpingPolicy", function () {
        expect( aDumpingPolicy._v_Type).toBe( "DumpingPolicy");
    });

    it("Has title DumpingPolicy_DefaultName", function () {
        expect( aDumpingPolicy._v_Title).toBe( aDumpingPolicyType_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aDumpingPolicy.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aDumpingPolicy.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aDumpingPolicy.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aDumpingPolicy.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aDumpingPolicy.fIdentifyingJSON().type).toBe( aDumpingPolicy._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aDumpingPolicy.fIdentifyingJSON().id).toBe( aDumpingPolicy._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aDumpingPolicy.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aDumpingPolicy.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicy.fIdentifyingString()).toBe( JSON.stringify( aDumpingPolicy.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON().type).toBe( aDumpingPolicy._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON().id).toBe( aDumpingPolicy._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON().title).toBe( aDumpingPolicy._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleString()).toBe( JSON.stringify( aDumpingPolicy.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aDumpingPolicy.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aDumpingPolicy.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aDumpingPolicy.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aDumpingPolicy.fToResultJSON().type).toBe( aDumpingPolicy._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aDumpingPolicy.fToResultJSON().id).toBe( aDumpingPolicy._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aDumpingPolicy.fToResultJSON().title).toBe( aDumpingPolicy._v_Title);
    });






    it("Has fConsoleService defined", function () {
        expect( aDumpingPolicy.fConsoleService).not.toBeUndefined();
    });

    it("Has fConsoleService typeof function", function () {
        expect( typeof aDumpingPolicy.fConsoleService).toBe( "function");
    });




    it("Has pDumpRecord defined", function () {
        expect( aDumpingPolicy.pDumpRecord).not.toBeUndefined();
    });

    it("Has pDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicy.pDumpRecord).toBe( "function");
    });




    it("Has pSetMayDumpRecords defined", function () {
        expect( aDumpingPolicy.pSetMayDumpRecords).not.toBeUndefined();
    });

    it("Has pSetMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicy.pSetMayDumpRecords).toBe( "function");
    });



    it("Has fMayDumpRecords defined", function () {
        expect( aDumpingPolicy.fMayDumpRecords).not.toBeUndefined();
    });

    it("Has fMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicy.fMayDumpRecords).toBe( "function");
    });



    it("Has fMustDumpRecord defined", function () {
        expect( aDumpingPolicy.fMustDumpRecord).not.toBeUndefined();
    });

    it("Has fMustDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicy.fMustDumpRecord).toBe( "function");
    });





    it("Has pRelease defined", function () {
        expect( aDumpingPolicy.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aDumpingPolicy.pRelease).toBe( "function");
    });




});
