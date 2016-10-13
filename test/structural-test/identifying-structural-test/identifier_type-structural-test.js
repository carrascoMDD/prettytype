/*
 * identifier_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241620
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




/// <reference path="src/identifying/identifier_type.js"/>
"use strict";




describe("prettytype  Identifier structural tests", function () {

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




    it("Has module defined", function () {
        expect( anIdentifier._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( anIdentifier._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName identifier_type", function () {
        expect( anIdentifier._v_Module.ModuleName).toBe( "identifier_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( anIdentifier._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.identifier_type", function () {
        expect( anIdentifier._v_Module.ModuleFullName).toBe( "identifying/identifier_type");
    });

    it("Has module Identifier_Prototype defined", function () {
        expect( anIdentifier._v_Module.Identifier_Prototype).not.toBeUndefined();
    });

    it("Has module Identifier_Prototype not null", function () {
        expect( anIdentifier._v_Module.Identifier_Prototype).not.toBeNull( null);
    });

    it("Has module Identifier_Constructor defined", function () {
        expect( anIdentifier._v_Module.Identifier_Constructor).not.toBeUndefined();
    });

    it("Has module Identifier_Constructor not null", function () {
        expect( anIdentifier._v_Module.Identifier_Constructor).not.toBeNull( null);
    });

    it("Has module Identifier_SuperPrototypeConstructor defined", function () {
        expect( anIdentifier._v_Module.Identifier_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Identifier_SuperPrototypeConstructor not null", function () {
        expect( anIdentifier._v_Module.Identifier_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( anIdentifier._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Identifier_Prototype", function () {
        expect( anIdentifier._v_Prototype).toBe( anIdentifier._v_Module.Identifier_Prototype);
    });

    it("Has _v_Prototype_Identifier defined", function () {
        expect( anIdentifier._v_Prototype_Identifier).not.toBeUndefined();
    });

    it("Has _v_Prototype_Identifier module Identifier_Prototype", function () {
        expect( anIdentifier._v_Prototype).toBe( anIdentifier._v_Module.Identifier_Prototype);
    });



    it("Has _v_Type Identifier", function () {
        expect( anIdentifier._v_Type).toBe( "Identifier");
    });

    it("Has title Identifier_DefaultName", function () {
        expect( anIdentifier._v_Title).toBe( aIdentifierType_title);
    });




    it("Has fFullTypeNameString defined", function () {
        expect( anIdentifier.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof anIdentifier.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( anIdentifier.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof anIdentifier.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( anIdentifier.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( anIdentifier.fIdentifyingJSON().type).toBe( anIdentifier._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( anIdentifier.fIdentifyingJSON().id).toBe( anIdentifier._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( anIdentifier.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof anIdentifier.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( anIdentifier.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( anIdentifier.fIdentifyingString()).toBe( JSON.stringify( anIdentifier.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( anIdentifier.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof anIdentifier.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( anIdentifier.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( anIdentifier.fIdentifyingWithTitleJSON().type).toBe( anIdentifier._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( anIdentifier.fIdentifyingWithTitleJSON().id).toBe( anIdentifier._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( anIdentifier.fIdentifyingWithTitleJSON().title).toBe( anIdentifier._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( anIdentifier.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof anIdentifier.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( anIdentifier.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( anIdentifier.fIdentifyingWithTitleString()).toBe( JSON.stringify( anIdentifier.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( anIdentifier.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof anIdentifier.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( anIdentifier.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( anIdentifier.fToResultJSON().type).toBe( anIdentifier._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( anIdentifier.fToResultJSON().id).toBe( anIdentifier._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( anIdentifier.fToResultJSON().title).toBe( anIdentifier._v_Title);
    });





    it("Has fReserveId defined", function () {
        expect( anIdentifier.fReserveId).not.toBeUndefined();
    });

    it("Has fReserveId typeof function", function () {
        expect( typeof anIdentifier.fReserveId).toBe( "function");
    });




});



