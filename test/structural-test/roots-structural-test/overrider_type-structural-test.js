/*
 * overrider_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241610
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




/// <reference path="src/common/overrider_type.js"/>
"use strict";




describe("prettytype  Overrider structural tests", function () {

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


    it("Has module defined", function () {
        expect( anOverrider._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( anOverrider._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName typesregistry", function () {
        expect( anOverrider._v_Module.ModuleName).toBe( "overrider_type");
    });

    it("Has module ModulePackages roots", function () {
        expect( anOverrider._v_Module.ModulePackages).toBe( "roots");
    });

    it("Has module ModuleFullName common.typesregistry", function () {
        expect( anOverrider._v_Module.ModuleFullName).toBe( "roots/overrider_type");
    });

    it("Has module Overrider_Prototype defined", function () {
        expect( anOverrider._v_Module.Overrider_Prototype).not.toBeUndefined();
    });

    it("Has module Overrider_Prototype not null", function () {
        expect( anOverrider._v_Module.Overrider_Prototype).not.toBeNull( null);
    });

    it("Has module Overrider_Constructor defined", function () {
        expect( anOverrider._v_Module.Overrider_Constructor).not.toBeUndefined();
    });

    it("Has module Overrider_Constructor not null", function () {
        expect( anOverrider._v_Module.Overrider_Constructor).not.toBeNull( null);
    });

    it("Has module Overrider_SuperPrototypeConstructor defined", function () {
        expect( anOverrider._v_Module.Overrider_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Overrider_SuperPrototypeConstructor not null", function () {
        expect( anOverrider._v_Module.Overrider_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( anOverrider._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Overrider_Prototype", function () {
        expect( anOverrider._v_Prototype).toBe( anOverrider._v_Module.Overrider_Prototype);
    });

    it("Has _v_Prototype_Overrider defined", function () {
        expect( anOverrider._v_Prototype_Overrider).not.toBeUndefined();
    });

    it("Has _v_Prototype_Overrider module Overrider_Prototype", function () {
        expect( anOverrider._v_Prototype).toBe( anOverrider._v_Module.Overrider_Prototype);
    });



    it("Has _v_Type Overrider", function () {
        expect( anOverrider._v_Type).toBe( "Overrider");
    });

    it("Has title Overrider_DefaultName", function () {
        expect( anOverrider._v_Title).toBe( aOverriderType_title);
    });




    it("Has fFullTypeNameString defined", function () {
        expect( anOverrider.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof anOverrider.fFullTypeNameString).toBe( "function");
    });



    it("Has fIdentifyingJSON defined", function () {
        expect( anOverrider.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof anOverrider.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( anOverrider.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( anOverrider.fIdentifyingJSON().type).toBe( anOverrider._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( anOverrider.fIdentifyingJSON().id).toBe( anOverrider._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( anOverrider.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof anOverrider.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( anOverrider.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( anOverrider.fIdentifyingString()).toBe( JSON.stringify( anOverrider.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( anOverrider.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof anOverrider.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( anOverrider.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( anOverrider.fIdentifyingWithTitleJSON().type).toBe( anOverrider._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( anOverrider.fIdentifyingWithTitleJSON().id).toBe( anOverrider._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( anOverrider.fIdentifyingWithTitleJSON().title).toBe( anOverrider._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( anOverrider.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof anOverrider.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( anOverrider.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( anOverrider.fIdentifyingWithTitleString()).toBe( JSON.stringify( anOverrider.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( anOverrider.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof anOverrider.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( anOverrider.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( anOverrider.fToResultJSON().type).toBe( anOverrider._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( anOverrider.fToResultJSON().id).toBe( anOverrider._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( anOverrider.fToResultJSON().title).toBe( anOverrider._v_Title);
    });






    it("Has pOverrideModuleVariations defined", function () {
        expect( anOverrider.pOverrideModuleVariations).not.toBeUndefined();
    });

    it("Has pOverrideModuleVariations typeof function", function () {
        expect( typeof anOverrider.pOverrideModuleVariations).toBe( "function");
    });




});



