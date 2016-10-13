/*
 * record_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241630
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






/// <reference path="src/identifying/record_type.js"/>
"use strict";




describe("prettytype  Record structural tests", function () {

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






    var aModule_RecordTypeFactory = ModuleFactory_RecordType();
    //console.log( "typeof aModule_RecordTypeFactory= " + typeof aModule_RecordTypeFactory);


    var aModule_RecordType = aModule_RecordTypeFactory( aTypesRegistrySvce, anOverrider);
    //console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);

    var aRecordType_title = "Record-Title-test";

    var aRecorder_Dummy   = {};
    var aRecordId_Dummy   = "Record-test-id";
    var anInstance_Dummy  = {};
    var aStep_Dummy       = "Record-test-step";
    var anEventKind_Dummy = "Record-test-step";
    var aData_Dummy       = {};
    var aReason_Dummy     = {};
    var aDetail_Dummy     = {};


    var aRecord = new aModule_RecordType.Record_Constructor(
        aRecorder_Dummy,
        aRecordId_Dummy,
        anInstance_Dummy,
        aStep_Dummy,
        anEventKind_Dummy,
        aData_Dummy,
        aReason_Dummy,
        aDetail_Dummy
    );
    //console.log( "typeof aRecord= " + typeof aRecord);
    //console.log( "aRecord keys = " + Object.keys( aRecord));



    it("Has module defined", function () {
        expect( aRecord._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aRecord._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName record_type", function () {
        expect( aRecord._v_Module.ModuleName).toBe( "record_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aRecord._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.record_type", function () {
        expect( aRecord._v_Module.ModuleFullName).toBe( "identifying/record_type");
    });

    it("Has module Record_Prototype defined", function () {
        expect( aRecord._v_Module.Record_Prototype).not.toBeUndefined();
    });

    it("Has module Record_Prototype not null", function () {
        expect( aRecord._v_Module.Record_Prototype).not.toBeNull( null);
    });

    it("Has module Record_Constructor defined", function () {
        expect( aRecord._v_Module.Record_Constructor).not.toBeUndefined();
    });

    it("Has module Record_Constructor not null", function () {
        expect( aRecord._v_Module.Record_Constructor).not.toBeNull( null);
    });

    it("Has module Record_SuperPrototypeConstructor defined", function () {
        expect( aRecord._v_Module.Record_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Record_SuperPrototypeConstructor not null", function () {
        expect( aRecord._v_Module.Record_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aRecord._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Record_Prototype", function () {
        expect( aRecord._v_Prototype).toBe( aRecord._v_Module.Record_Prototype);
    });

    it("Has _v_Prototype_Record defined", function () {
        expect( aRecord._v_Prototype_Record).not.toBeUndefined();
    });

    it("Has _v_Prototype_Record module Record_Prototype", function () {
        expect( aRecord._v_Prototype).toBe( aRecord._v_Module.Record_Prototype);
    });



    it("Has _v_Type Record", function () {
        expect( aRecord._v_Type).toBe( "Record");
    });

    it("Has _v_Recorder supplied", function () {
        expect( aRecord._v_Recorder).toBe( aRecorder_Dummy);
    });

    it("Has _v_RecordId supplied", function () {
        expect( aRecord._v_RecordId).toBe( aRecordId_Dummy);
    });

    it("Has _v_Instance supplied", function () {
        expect( aRecord._v_Instance).toBe( anInstance_Dummy);
    });

    it("Has _v_Step supplied", function () {
        expect( aRecord._v_Step).toBe( aStep_Dummy);
    });

    it("Has _v_EventKind supplied", function () {
        expect( aRecord._v_EventKind).toBe( anEventKind_Dummy);
    });

    it("Has _v_Data supplied", function () {
        expect( aRecord._v_Data).toBe( aData_Dummy);
    });

    it("Has _v_Reason supplied", function () {
        expect( aRecord._v_Reason).toBe( aReason_Dummy);
    });

    it("Has _v_Detail supplied", function () {
        expect( aRecord._v_Detail).toBe( aDetail_Dummy);
    });


    it("Has fFullTypeNameString defined", function () {
        expect( aRecord.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aRecord.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aRecord.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aRecord.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aRecord.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() recref", function () {
        expect( aRecord.fIdentifyingJSON().id).toBe( aRecord._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aRecord.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aRecord.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aRecord.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecord.fIdentifyingString()).toBe( JSON.stringify( aRecord.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aRecord.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aRecord.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aRecord.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() recref _v_Id", function () {
        expect( aRecord.fIdentifyingWithTitleJSON().id).toBe( aRecord._v_Id);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aRecord.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aRecord.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aRecord.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecord.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecord.fIdentifyingWithTitleJSON()));
    });






    it("Has fToResultJSON defined", function () {
        expect( aRecord.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aRecord.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aRecord.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() recref _v_Id", function () {
        expect( aRecord.fToResultJSON().id).toBe( aRecord._v_Id);
    });






    it("Has fConvertReasonToJSON defined", function () {
        expect( aRecord.fConvertReasonToJSON).not.toBeUndefined();
    });

    it("Has fConvertReasonToJSON typeof function", function () {
        expect( typeof aRecord.fConvertReasonToJSON).toBe( "function");
    });


    it("Has fAsReasonChain defined", function () {
        expect( aRecord.fAsReasonChain).not.toBeUndefined();
    });

    it("Has fAsReasonChain typeof function", function () {
        expect( typeof aRecord.fAsReasonChain).toBe( "function");
    });


    it("Has fAsJSONable defined", function () {
        expect( aRecord.fAsJSONable).not.toBeUndefined();
    });

    it("Has fAsJSONable typeof function", function () {
        expect( typeof aRecord.fAsJSONable).toBe( "function");
    });

});




