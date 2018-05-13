/*
 * console_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610081728
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




describe("prettytype  ConsoleSvce structural tests", function () {

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







    it("Has module ModuleName console_svce", function () {
        expect( aModule_ConsoleSvce.ModuleName).toBe( "console_svce");
    });

    it("Has module ModulePackages utils", function () {
        expect( aModule_ConsoleSvce.ModulePackages).toBe( "utils");
    });

    it("Has module ModuleFullName utils.console_svce", function () {
        expect( aModule_ConsoleSvce.ModuleFullName).toBe( "utils/console_svce");
    });





    it("Has log defined", function () {
        expect( aModule_ConsoleSvce.log).not.toBeUndefined();
    });

    it("Has log typeof function", function () {
        expect( typeof aModule_ConsoleSvce.log).toBe( "function");
    });


    it("Has error defined", function () {
        expect( aModule_ConsoleSvce.error).not.toBeUndefined();
    });

    it("Has error typeof function", function () {
        expect( typeof aModule_ConsoleSvce.log).toBe( "function");
    });


    it("Has info defined", function () {
        expect( aModule_ConsoleSvce.info).not.toBeUndefined();
    });

    it("Has info typeof function", function () {
        expect( typeof aModule_ConsoleSvce.info).toBe( "function");
    });


    it("Has clear defined", function () {
        expect( aModule_ConsoleSvce.clear).not.toBeUndefined();
    });

    it("Has clear typeof function", function () {
        expect( typeof aModule_ConsoleSvce.clear).toBe( "function");
    });






    it("Has pSetWriteToConsole defined", function () {
        expect( aModule_ConsoleSvce.pSetWriteToConsole).not.toBeUndefined();
    });

    it("Has pSetWriteToConsole typeof function", function () {
        expect( typeof aModule_ConsoleSvce.pSetWriteToConsole).toBe( "function");
    });


    it("Has pSetCollectLogs defined", function () {
        expect( aModule_ConsoleSvce.pSetCollectLogs).not.toBeUndefined();
    });

    it("Has pSetCollectLogs typeof function", function () {
        expect( typeof aModule_ConsoleSvce.pSetCollectLogs).toBe( "function");
    });


    it("Has pSetMaxCollectedLogsLength defined", function () {
        expect( aModule_ConsoleSvce.pSetMaxCollectedLogsLength).not.toBeUndefined();
    });

    it("Has pSetMaxCollectedLogsLength typeof function", function () {
        expect( typeof aModule_ConsoleSvce.pSetMaxCollectedLogsLength).toBe( "function");
    });


    it("Has fCollectedLogs defined", function () {
        expect( aModule_ConsoleSvce.fCollectedLogs).not.toBeUndefined();
    });

    it("Has fCollectedLogs typeof function", function () {
        expect( typeof aModule_ConsoleSvce.fCollectedLogs).toBe( "function");
    });




    it("Has fCollectedLogsCopy defined", function () {
        expect( aModule_ConsoleSvce.fCollectedLogsCopy).not.toBeUndefined();
    });

    it("Has fCollectedLogsCopy typeof function", function () {
        expect( typeof aModule_ConsoleSvce.fCollectedLogsCopy).toBe( "function");
    });





});
