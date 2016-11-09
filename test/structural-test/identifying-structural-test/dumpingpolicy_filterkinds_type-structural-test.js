/*
 * dumpingpolicy_filterkinds_type-structural-test.js
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






/// <reference path="src/identifying/dumpingpolicy_filterkinds_type.js"/>
"use strict";




describe("prettytype  DumpingPolicyFilterKinds structural tests", function () {

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







    var aDumpingPolicyFilterKindsType_title = "DumpingPolicyFilterKinds-Title-test";

    var aDumpingPolicyFilterKinds = new aModule_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_Constructor(
        aDumpingPolicyFilterKindsType_title,
        anIdentifier,
        aRecorder
    );
    
    

    it("Has module defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName dumpingpolicy_filterkinds_type", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.ModuleName).toBe( "dumpingpolicy_filterkinds_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.dumpingpolicy_filterkinds_type", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.ModuleFullName).toBe( "identifying/dumpingpolicy_filterkinds_type");
    });

    it("Has module DumpingPolicyFilterKinds_Prototype defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype).not.toBeUndefined();
    });

    it("Has module DumpingPolicyFilterKinds_Prototype not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype).not.toBeNull( null);
    });

    it("Has module DumpingPolicyFilterKinds_Constructor defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Constructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicyFilterKinds_Constructor not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Constructor).not.toBeNull( null);
    });

    it("Has module DumpingPolicyFilterKinds_SuperPrototypeConstructor defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicyFilterKinds_SuperPrototypeConstructor not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module DumpingPolicyFilterKinds_Prototype", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype).toBe( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype);
    });

    it("Has _v_Prototype_DumpingPolicyFilterKinds defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype_DumpingPolicyFilterKinds).not.toBeUndefined();
    });

    it("Has _v_Prototype_DumpingPolicyFilterKinds module DumpingPolicyFilterKinds_Prototype", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype).toBe( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype);
    });



    it("Has _v_Type DumpingPolicyFilterKinds", function () {
        expect( aDumpingPolicyFilterKinds._v_Type).toBe( "DumpingPolicyFilterKinds");
    });

    it("Has title DumpingPolicyFilterKinds_DefaultName", function () {
        expect( aDumpingPolicyFilterKinds._v_Title).toBe( aDumpingPolicyFilterKindsType_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aDumpingPolicyFilterKinds.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingString()).toBe( JSON.stringify( aDumpingPolicyFilterKinds.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().title).toBe( aDumpingPolicyFilterKinds._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString()).toBe( JSON.stringify( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON().title).toBe( aDumpingPolicyFilterKinds._v_Title);
    });






    it("Has fConsoleService defined", function () {
        expect( aDumpingPolicyFilterKinds.fConsoleService).not.toBeUndefined();
    });

    it("Has fConsoleService typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fConsoleService).toBe( "function");
    });




    it("Has pDumpRecord defined", function () {
        expect( aDumpingPolicyFilterKinds.pDumpRecord).not.toBeUndefined();
    });

    it("Has pDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.pDumpRecord).toBe( "function");
    });




    it("Has pSetMayDumpRecords defined", function () {
        expect( aDumpingPolicyFilterKinds.pSetMayDumpRecords).not.toBeUndefined();
    });

    it("Has pSetMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.pSetMayDumpRecords).toBe( "function");
    });



    it("Has fMayDumpRecords defined", function () {
        expect( aDumpingPolicyFilterKinds.fMayDumpRecords).not.toBeUndefined();
    });

    it("Has fMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMayDumpRecords).toBe( "function");
    });



    it("Has fMustDumpRecord defined", function () {
        expect( aDumpingPolicyFilterKinds.fMustDumpRecord).not.toBeUndefined();
    });

    it("Has fMustDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMustDumpRecord).toBe( "function");
    });



    it("Has fMustDumpRecord defined", function () {
        expect( aDumpingPolicyFilterKinds.fMustDumpRecord).not.toBeUndefined();
    });

    it("Has fMustDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMustDumpRecord).toBe( "function");
    });







    it("Has fEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fEventKindsNotForConsole).toBe( "function");
    });



    it("Has fSetEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fSetEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole).toBe( "function");
    });

    it("Has fFewerEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fFewerEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole).toBe( "function");
    });

    it("Has fMoreEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fMoreEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole).toBe( "function");
    });



    it("Has fSetEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fSetEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole_inPrototype).toBe( "function");
    });

    it("Has fFewerEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fFewerEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole_inPrototype).toBe( "function");
    });

    it("Has fMoreEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fMoreEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole_inPrototype).toBe( "function");
    });





    it("Has pRelease defined", function () {
        expect( aDumpingPolicyFilterKinds.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.pRelease).toBe( "function");
    });








});
