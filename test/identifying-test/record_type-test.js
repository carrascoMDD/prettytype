/*
 * record.js
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




describe("prettytypes Record tests", function () {

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

    var aRecord = new aModule_RecordType.Record_Constructor( aRecordType_title);
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

    it("Has title Record_DefaultName", function () {
        expect( aRecord._v_Title).toBe( aRecordType_title);
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

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aRecord.fIdentifyingJSON().type).toBe( aRecord._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
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

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aRecord.fIdentifyingWithTitleJSON().type).toBe( aRecord._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aRecord.fIdentifyingWithTitleJSON().id).toBe( aRecord._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aRecord.fIdentifyingWithTitleJSON().title).toBe( aRecord._v_Title);
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


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aRecord.fToResultJSON().type).toBe( aRecord._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aRecord.fToResultJSON().id).toBe( aRecord._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aRecord.fToResultJSON().title).toBe( aRecord._v_Title);
    });






    it("Has fReserveId defined", function () {
        expect( aRecord.fReserveId).not.toBeUndefined();
    });

    it("Has fReserveId typeof function", function () {
        expect( typeof aRecord.fReserveId).toBe( "function");
    });




});




