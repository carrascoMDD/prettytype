/*
 * identifier_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201805220335
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


/// <reference path="src/common/identifier_svce.js"/>
"use strict";


var aTest_spec = (function( theSS_identifier_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "identifier_svce-structural-test";
    var ModulePackages = "test/structural-test/identifier-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_identifier_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "identifying"));
            
            beforeEach( inject(function( _identifier_svce_) {
                aM_identifier_svce = _identifier_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce = require('../../../src/identifying/identifier_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
        }
        
        
        
        
        
        it("Singleton is defined", function () {
            expect( aM_identifier_svce).not.toBeUndefined();
        });
        
        
        it("Singleton has module meta definitions", function () {
            expect( aM_identifier_svce.ComponentName).toBe( "prettytype");
            expect( aM_identifier_svce.ModuleName).toBe( "identifier_svce");
            expect( aM_identifier_svce.ModulePackages).toBe( "identifying");
            expect( aM_identifier_svce.ModuleFullName).toBe( "identifying/identifier_svce");
            expect( aM_identifier_svce.SingletonName).toBe( "Identifier_Service");
        });
        
        
        it("Singleton has meta definitions ", function () {
            expect( aM_identifier_svce._v_Kind).toBe( "singleton");
            expect( aM_identifier_svce._v_Prototype).not.toBeUndefined();
            expect( aM_identifier_svce._v_SuperPrototype).toBe( null);
            expect( aM_identifier_svce._v_Type).toBe( "Identifier");
            expect( aM_identifier_svce._v_Prototype_Identifier).not.toBeUndefined();
            expect( aM_identifier_svce._v_Module).not.toBeNull( null);
            expect( aM_identifier_svce._v_Module).not.toBeUndefined();
        });
        
        
        var someConstantNames = [
            "IDENTIFIER_DEFAULTTITLE"
        ];
        var aNumConstantNames = someConstantNames.length;  for( var aM_identifier_svceConstantNameIdx=0; aM_identifier_svceConstantNameIdx < aNumConstantNames; aM_identifier_svceConstantNameIdx++) {
            var aM_identifier_svceConstantName = someConstantNames[ aM_identifier_svceConstantNameIdx];
            if( aM_identifier_svceConstantName) {
                (function() {
                    var aM_identifier_svceConstantName_here = aM_identifier_svceConstantName;
                    it("Singleton has module constant named " + aM_identifier_svceConstantName_here + " prototypically inherited", function () {
                        var aM_identifier_svceConstant = aM_identifier_svce[ aM_identifier_svceConstantName_here];
                        expect( aM_identifier_svceConstant).not.toBeUndefined();
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
        for( var aM_identifier_svceGeneralFunctionNameIdx=0; aM_identifier_svceGeneralFunctionNameIdx < aNumPrototypeGeneralFunctionNames; aM_identifier_svceGeneralFunctionNameIdx++) {
            var aM_identifier_svceGeneralFunctionName = somePrototypeGeneralFunctionNames[ aM_identifier_svceGeneralFunctionNameIdx];
            if( aM_identifier_svceGeneralFunctionName) {
                (function() {
                    var aM_identifier_svceGeneralFunctionName_here = aM_identifier_svceGeneralFunctionName;
                    it("Singleton has general function named " + aM_identifier_svceGeneralFunctionName_here + " prototypically inherited", function () {
                        var aM_identifier_svceGeneralFunction = aM_identifier_svce[ aM_identifier_svceGeneralFunctionName_here];
                        expect( typeof aM_identifier_svceGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var somePrototypeSlotNames = [
            /* None */
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aM_identifier_svceSlotNameIdx=0; aM_identifier_svceSlotNameIdx < aNumPrototypeSlotNames; aM_identifier_svceSlotNameIdx++) {
            var aM_identifier_svceSlotName = somePrototypeSlotNames[ aM_identifier_svceSlotNameIdx];
            if( aM_identifier_svceSlotName) {
                (function() {
                    var aM_identifier_svceSlotName_here = aM_identifier_svceSlotName;
                    it("Singleton has slot with name " + aM_identifier_svceSlotName_here + " prototypically inherited", function () {
                        var aM_identifier_svce = aM_typesregistry_type.Prototype;
                        var anPrototypeSlot = aM_identifier_svce[ aM_identifier_svceSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        var somePrototypeSpecificFunctionNames = [
            "_pInit_Identifier",
            "fReserveId"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aM_identifier_svceSpecificFunctionNameIdx=0; aM_identifier_svceSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aM_identifier_svceSpecificFunctionNameIdx++) {
            var aM_identifier_svceSpecificFunctionName = somePrototypeSpecificFunctionNames[ aM_identifier_svceSpecificFunctionNameIdx];
            if( aM_identifier_svceSpecificFunctionName) {
                (function() {
                    var aM_identifier_svceSpecificFunctionName_here = aM_identifier_svceSpecificFunctionName;
                    it("Singleton has specific function " + aM_identifier_svceSpecificFunctionName_here + " prototypically inherited", function () {
                        var aM_identifier_svceSpecificFunction = aM_identifier_svce[ aM_identifier_svceSpecificFunctionName_here];
                        expect( typeof aM_identifier_svceSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someInstanceSlotNames = [
            "_v_Id",
            "_v_Title",
            "_v_IdsCounter"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Singleton has slot with name " + aInstanceSlotName_here, function () {
                        var anInstanceSlot = aM_identifier_svce[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "identifier_svce_structural_test",
        [
            "identifier_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}




