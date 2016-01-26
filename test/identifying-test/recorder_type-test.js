/*
 * recorder_type-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241640
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






/// <reference path="src/identifying/recorder_type.js"/>
"use strict";




describe("prettytypes Recorder tests", function () {

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
    
    

    

    var aModule_RecorderTypeFactory = ModuleFactory_RecorderType();
    //console.log( "typeof aModule_RecorderTypeFactory= " + typeof aModule_RecorderTypeFactory);


    var aModule_RecorderType = aModule_RecorderTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aModule_IdentifierType,
        aModule_RecordType
    );
    //console.log( "typeof aModule_RecorderType= " + typeof aModule_RecorderType);

    var aRecorderType_title = "Recorder-Title-test";

    var aRecorder = new aModule_RecorderType.Recorder_Constructor( aRecorderType_title);
    //console.log( "typeof aRecorder= " + typeof aRecorder);
    //console.log( "aRecorder keys = " + Object.keys( aRecorder));




    it("Has module defined", function () {
        expect( aRecorder._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aRecorder._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName recorder_type", function () {
        expect( aRecorder._v_Module.ModuleName).toBe( "recorder_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aRecorder._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.recorder_type", function () {
        expect( aRecorder._v_Module.ModuleFullName).toBe( "identifying/recorder_type");
    });

    it("Has module Recorder_Prototype defined", function () {
        expect( aRecorder._v_Module.Recorder_Prototype).not.toBeUndefined();
    });

    it("Has module Recorder_Prototype not null", function () {
        expect( aRecorder._v_Module.Recorder_Prototype).not.toBeNull( null);
    });

    it("Has module Recorder_Constructor defined", function () {
        expect( aRecorder._v_Module.Recorder_Constructor).not.toBeUndefined();
    });

    it("Has module Recorder_Constructor not null", function () {
        expect( aRecorder._v_Module.Recorder_Constructor).not.toBeNull( null);
    });

    it("Has module Recorder_SuperPrototypeConstructor defined", function () {
        expect( aRecorder._v_Module.Recorder_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Recorder_SuperPrototypeConstructor not null", function () {
        expect( aRecorder._v_Module.Recorder_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aRecorder._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Recorder_Prototype", function () {
        expect( aRecorder._v_Prototype).toBe( aRecorder._v_Module.Recorder_Prototype);
    });

    it("Has _v_Prototype_Recorder defined", function () {
        expect( aRecorder._v_Prototype_Recorder).not.toBeUndefined();
    });

    it("Has _v_Prototype_Recorder module Recorder_Prototype", function () {
        expect( aRecorder._v_Prototype).toBe( aRecorder._v_Module.Recorder_Prototype);
    });



    it("Has _v_Type Recorder", function () {
        expect( aRecorder._v_Type).toBe( "Recorder");
    });

    it("Has title Recorder_DefaultName", function () {
        expect( aRecorder._v_Title).toBe( aRecorderType_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aRecorder.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aRecorder.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aRecorder.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aRecorder.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aRecorder.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aRecorder.fIdentifyingJSON().type).toBe( aRecorder._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aRecorder.fIdentifyingJSON().id).toBe( aRecorder._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aRecorder.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aRecorder.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aRecorder.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecorder.fIdentifyingString()).toBe( JSON.stringify( aRecorder.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aRecorder.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON().type).toBe( aRecorder._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON().id).toBe( aRecorder._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON().title).toBe( aRecorder._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aRecorder.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aRecorder.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aRecorder.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecorder.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecorder.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aRecorder.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aRecorder.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aRecorder.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aRecorder.fToResultJSON().type).toBe( aRecorder._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aRecorder.fToResultJSON().id).toBe( aRecorder._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aRecorder.fToResultJSON().title).toBe( aRecorder._v_Title);
    });






    it("Has fCreateAndRegisterRecord defined", function () {
        expect( aRecorder.fCreateAndRegisterRecord).not.toBeUndefined();
    });

    it("Has fCreateAndRegisterRecord typeof function", function () {
        expect( typeof aRecorder.fCreateAndRegisterRecord).toBe( "function");
    });





    it("Has fEventsToResultJSON defined", function () {
        expect( aRecorder.fEventsToResultJSON).not.toBeUndefined();
    });

    it("Has fEventsToResultJSON typeof function", function () {
        expect( typeof aRecorder.fEventsToResultJSON).toBe( "function");
    });



});
