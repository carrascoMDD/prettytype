/*
 * typesregistry-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601261900
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


var aTest_spec = (function( theSS_typeregistry_svce) {

    var ComponentName  = "prettytype-test";
    var ModuleName     = "typesregistry_svce-structural-test";
    var ModulePackages = "test/structural-test/modboot-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_typesregistry_scve = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            
            beforeEach( module( "typesregistry"));
            
            beforeEach( inject(function( _typesregistry_svce_) {
                aM_typesregistry_scve = _typesregistry_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_typesregistry_scve = require('../../../src/typesregistry/typesregistry_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_typesregistry_scve = theSS_typeregistry_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_typesregistry_scve = nomod.resolve( nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce"));
        }
    
    
    
    
        it("Singleton is defined", function () {
            expect( aM_typesregistry_scve).not.toBeUndefined();
        });
    
    
        it("Singleton has module meta definitions", function () {
            expect( aM_typesregistry_scve.ComponentName).toBe( "prettytype");
            expect( aM_typesregistry_scve.ModuleName).toBe( "typesregistry_svce");
            expect( aM_typesregistry_scve.ModulePackages).toBe( "typesregistry");
            expect( aM_typesregistry_scve.ModuleFullName).toBe( "typesregistry/typesregistry_svce");
            expect( aM_typesregistry_scve.SingletonName).toBe( "TypesRegistrySvce");
        });


        it("Singleton has meta definitions ", function () {
            expect( aM_typesregistry_scve._v_Kind).toBe( "singleton");
            expect( aM_typesregistry_scve._v_Prototype).not.toBeUndefined();
            expect( aM_typesregistry_scve._v_SuperPrototype).toBe( null);
            expect( aM_typesregistry_scve._v_Type).toBe( "TypesRegistry");
            expect( aM_typesregistry_scve._v_Prototype_TypesRegistry).not.toBeUndefined();
            expect( aM_typesregistry_scve._v_Module).not.toBeNull( null);
            expect( aM_typesregistry_scve._v_Module).not.toBeUndefined();
        });
    
    
        var someConstantNames = [
            "REGISTERMODULES",
            "RESOLVEMODULES",
            "TYPESREGISTRYDEFAULTNAME"
        ];
        var aNumConstantNames = someConstantNames.length;  for( var aPrototypeConstantNameIdx=0; aPrototypeConstantNameIdx < aNumConstantNames; aPrototypeConstantNameIdx++) {
            var aPrototypeConstantName = someConstantNames[ aPrototypeConstantNameIdx];
            if( aPrototypeConstantName) {
                (function() {
                    var aPrototypeConstantName_here = aPrototypeConstantName;
                    it("Singleton has module constant named " + aPrototypeConstantName_here + " prototypically inherited", function () {
                        var aPrototypeConstant = aM_typesregistry_scve[ aPrototypeConstantName_here];
                        expect( aPrototypeConstant).not.toBeUndefined();
                    });
                })()
            }
        }
    
    
        var somePrototypeGeneralFunctionNames = [
            "_pInit",
            "fFullTypeNameString",
            "fIdentifyingJSON",
            "fIdentifyingString",
            "fIdentifyingWithTitleJSON",
            "fIdentifyingWithTitleString",
            "fToResultJSON"
        ];
        var aNumPrototypeGeneralFunctionNames = somePrototypeGeneralFunctionNames.length;
        for( var aPrototypeGeneralFunctionNameIdx=0; aPrototypeGeneralFunctionNameIdx < aNumPrototypeGeneralFunctionNames; aPrototypeGeneralFunctionNameIdx++) {
            var aPrototypeGeneralFunctionName = somePrototypeGeneralFunctionNames[ aPrototypeGeneralFunctionNameIdx];
            if( aPrototypeGeneralFunctionName) {
                (function() {
                    var aPrototypeGeneralFunctionName_here = aPrototypeGeneralFunctionName;
                    it("Singleton has general function named " + aPrototypeGeneralFunctionName_here + " prototypically inherited", function () {
                        var aPrototypeGeneralFunction = aM_typesregistry_scve[ aPrototypeGeneralFunctionName_here];
                        expect( typeof aPrototypeGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var somePrototypeSlotNames = [
            /* None */
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aPrototypeSlotNameIdx=0; aPrototypeSlotNameIdx < aNumPrototypeSlotNames; aPrototypeSlotNameIdx++) {
            var aPrototypeSlotName = somePrototypeSlotNames[ aPrototypeSlotNameIdx];
            if( aPrototypeSlotName) {
                (function() {
                    var aPrototypeSlotName_here = aPrototypeSlotName;
                    it("Singleton has slot with name " + aPrototypeSlotName_here + " prototypically inherited", function () {
                        var aM_typesregistry_scve = aM_typesregistry_type.Prototype;
                        var anPrototypeSlot = aM_typesregistry_scve[ aPrototypeSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
    
    
        var somePrototypeSpecificFunctionNames = [
            "_pInit_TypesRegistry",
            "fRegisterModule",
            "fRegisteredModule",
            "fUnregisterModule"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aPrototypeSpecificFunctionNameIdx=0; aPrototypeSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aPrototypeSpecificFunctionNameIdx++) {
            var aPrototypeSpecificFunctionName = somePrototypeSpecificFunctionNames[ aPrototypeSpecificFunctionNameIdx];
            if( aPrototypeSpecificFunctionName) {
                (function() {
                    var aPrototypeSpecificFunctionName_here = aPrototypeSpecificFunctionName;
                    it("Singleton has specific function " + aPrototypeSpecificFunctionName_here + " prototypically inherited", function () {
                        var aPrototypeSpecificFunction = aM_typesregistry_scve[ aPrototypeSpecificFunctionName_here];
                        expect( typeof aPrototypeSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var someInstanceSlotNames = [
            "_v_Title",
            "_v_ModulesByFullName"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Singleton has slot with name " + aInstanceSlotName_here, function () {
                        var anInstanceSlot = aM_typesregistry_scve[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
    
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "typesregistry_svce_structural_test",
        [
            "typesregistry_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

