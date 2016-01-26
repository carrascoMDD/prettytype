/*
 * typesregistry-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241600
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


/// <reference path="src/common/typesregistry.js"/>
"use strict";




describe("prettytype  TypesRegistry tests", function () {

    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    //console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    //console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    //console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    it("Has module defined", function () {
        expect( aTypesRegistrySvce._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aTypesRegistrySvce._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName typesregistry", function () {
        expect( aTypesRegistrySvce._v_Module.ModuleName).toBe( "typesregistry");
    });

    it("Has module ModulePackages typesregistry", function () {
        expect( aTypesRegistrySvce._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.typesregistry", function () {
        expect( aTypesRegistrySvce._v_Module.ModuleFullName).toBe( "common/typesregistry");
    });

    it("Has module TypesRegistry_Prototype defined", function () {
        expect( aTypesRegistrySvce._v_Module.TypesRegistry_Prototype).not.toBeUndefined();
    });

    it("Has module TypesRegistry_Prototype not null", function () {
        expect( aTypesRegistrySvce._v_Module.TypesRegistry_Prototype).not.toBeNull( null);
    });

    it("Has module TypesRegistry_Constructor defined", function () {
        expect( aTypesRegistrySvce._v_Module.TypesRegistry_Constructor).not.toBeUndefined();
    });

    it("Has module TypesRegistry_Constructor not null", function () {
        expect( aTypesRegistrySvce._v_Module.TypesRegistry_Constructor).not.toBeNull( null);
    });

    it("Has module TypesRegistry_SuperPrototypeConstructor defined", function () {
        expect( aTypesRegistrySvce._v_Module.TypesRegistry_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module TypesRegistry_SuperPrototypeConstructor not null", function () {
        expect( aTypesRegistrySvce._v_Module.TypesRegistry_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aTypesRegistrySvce._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module TypesRegistry_Prototype", function () {
        expect( aTypesRegistrySvce._v_Prototype).toBe( aTypesRegistrySvce._v_Module.TypesRegistry_Prototype);
    });

    it("Has _v_Prototype_TypesRegistry defined", function () {
        expect( aTypesRegistrySvce._v_Prototype_TypesRegistry).not.toBeUndefined();
    });

    it("Has _v_Prototype_TypesRegistry module TypesRegistry_Prototype", function () {
        expect( aTypesRegistrySvce._v_Prototype).toBe( aTypesRegistrySvce._v_Module.TypesRegistry_Prototype);
    });



    it("Has _v_Type TypesRegistry", function () {
        expect( aTypesRegistrySvce._v_Type).toBe( "TypesRegistry");
    });

    it("Has title TypesRegistry_DefaultName", function () {
        expect( aTypesRegistrySvce._v_Title).toBe( "TypesRegistry_DefaultName");
    });


});


