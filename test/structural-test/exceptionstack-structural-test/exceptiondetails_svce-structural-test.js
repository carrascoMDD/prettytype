/*
 * exceptiondetails_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201805131713
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


/// <reference path="src/common/exceptiondetails_svce.js"/>
"use strict";



var aTest_spec = (function( theSS_exceptiondetails_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "exceptiondetails_svce-structural-test";
    var ModulePackages = "test/structural-test/exceptionstack-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_exceptiondetails_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "exceptionstack"));
            
            beforeEach( inject(function( _exceptiondetails_svce_) {
                aM_exceptiondetails_svce = _exceptiondetails_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_exceptiondetails_svce = require('../../../src/exceptionstack/exceptiondetails_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_exceptiondetails_svce = theSS_exceptiondetails_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_exceptiondetails_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "exceptionstack", "exceptiondetails_svce"));
        }
    
    
    
    
    
        it("Singleton is defined", function () {
            expect( aM_exceptiondetails_svce).not.toBeUndefined();
        });
    
    
        it("Singleton has module meta definitions", function () {
            expect( aM_exceptiondetails_svce.ComponentName).toBe( "prettytype");
            expect( aM_exceptiondetails_svce.ModuleName).toBe( "exceptiondetails_svce");
            expect( aM_exceptiondetails_svce.ModulePackages).toBe( "exceptionstack");
            expect( aM_exceptiondetails_svce.ModuleFullName).toBe( "exceptionstack/exceptiondetails_svce");
            expect( aM_exceptiondetails_svce.SingletonName).toBe( "Exceptiondetails_Service");
        });
    
    
        it("Singleton has meta definitions ", function () {
            expect( aM_exceptiondetails_svce._v_Kind).toBe( "singleton");
            expect( aM_exceptiondetails_svce._v_Prototype).not.toBeUndefined();
            expect( aM_exceptiondetails_svce._v_SuperPrototype).toBe( null);
            expect( aM_exceptiondetails_svce._v_Type).toBe( "Exceptiondetails");
            expect( aM_exceptiondetails_svce._v_Prototype_Exceptiondetails).not.toBeUndefined();
            expect( aM_exceptiondetails_svce._v_Module).not.toBeNull( null);
            expect( aM_exceptiondetails_svce._v_Module).not.toBeUndefined();
        });
    
    
        var someConstantNames = [
            "EXCEPTIONDETAILSDEFAULTNAME",
            "LOGEXCEPTIONDETAILS"
        ];
        var aNumConstantNames = someConstantNames.length;  for( var aM_exceptiondetails_svceConstantNameIdx=0; aM_exceptiondetails_svceConstantNameIdx < aNumConstantNames; aM_exceptiondetails_svceConstantNameIdx++) {
            var aM_exceptiondetails_svceConstantName = someConstantNames[ aM_exceptiondetails_svceConstantNameIdx];
            if( aM_exceptiondetails_svceConstantName) {
                (function() {
                    var aM_exceptiondetails_svceConstantName_here = aM_exceptiondetails_svceConstantName;
                    it("Singleton has module constant named " + aM_exceptiondetails_svceConstantName_here + " prototypically inherited", function () {
                        var aM_exceptiondetails_svceConstant = aM_exceptiondetails_svce[ aM_exceptiondetails_svceConstantName_here];
                        expect( aM_exceptiondetails_svceConstant).not.toBeUndefined();
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
        for( var aM_exceptiondetails_svceGeneralFunctionNameIdx=0; aM_exceptiondetails_svceGeneralFunctionNameIdx < aNumPrototypeGeneralFunctionNames; aM_exceptiondetails_svceGeneralFunctionNameIdx++) {
            var aM_exceptiondetails_svceGeneralFunctionName = somePrototypeGeneralFunctionNames[ aM_exceptiondetails_svceGeneralFunctionNameIdx];
            if( aM_exceptiondetails_svceGeneralFunctionName) {
                (function() {
                    var aM_exceptiondetails_svceGeneralFunctionName_here = aM_exceptiondetails_svceGeneralFunctionName;
                    it("Singleton has general function named " + aM_exceptiondetails_svceGeneralFunctionName_here + " prototypically inherited", function () {
                        var aM_exceptiondetails_svceGeneralFunction = aM_exceptiondetails_svce[ aM_exceptiondetails_svceGeneralFunctionName_here];
                        expect( typeof aM_exceptiondetails_svceGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var somePrototypeSlotNames = [
            /* None */
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aM_exceptiondetails_svceSlotNameIdx=0; aM_exceptiondetails_svceSlotNameIdx < aNumPrototypeSlotNames; aM_exceptiondetails_svceSlotNameIdx++) {
            var aM_exceptiondetails_svceSlotName = somePrototypeSlotNames[ aM_exceptiondetails_svceSlotNameIdx];
            if( aM_exceptiondetails_svceSlotName) {
                (function() {
                    var aM_exceptiondetails_svceSlotName_here = aM_exceptiondetails_svceSlotName;
                    it("Singleton has slot with name " + aM_exceptiondetails_svceSlotName_here + " prototypically inherited", function () {
                        var aM_exceptiondetails_svce = aM_typesregistry_type.Prototype;
                        var anPrototypeSlot = aM_exceptiondetails_svce[ aM_exceptiondetails_svceSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
    
    
        var somePrototypeSpecificFunctionNames = [
            "_pInit_Exceptiondetails",
            "fLogExceptionDetails",
            "pSetLogExceptionDetails",
            "fExceptionDetail"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aM_exceptiondetails_svceSpecificFunctionNameIdx=0; aM_exceptiondetails_svceSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aM_exceptiondetails_svceSpecificFunctionNameIdx++) {
            var aM_exceptiondetails_svceSpecificFunctionName = somePrototypeSpecificFunctionNames[ aM_exceptiondetails_svceSpecificFunctionNameIdx];
            if( aM_exceptiondetails_svceSpecificFunctionName) {
                (function() {
                    var aM_exceptiondetails_svceSpecificFunctionName_here = aM_exceptiondetails_svceSpecificFunctionName;
                    it("Singleton has specific function " + aM_exceptiondetails_svceSpecificFunctionName_here + " prototypically inherited", function () {
                        var aM_exceptiondetails_svceSpecificFunction = aM_exceptiondetails_svce[ aM_exceptiondetails_svceSpecificFunctionName_here];
                        expect( typeof aM_exceptiondetails_svceSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var someInstanceSlotNames = [
            "_v_Title",
            "_v_LogExceptionDetails"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Singleton has slot with name " + aInstanceSlotName_here, function () {
                        var anInstanceSlot = aM_exceptiondetails_svce[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
    });
});


if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "exceptiondetails_svce_structural_test",
        [
            "exceptiondetails_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}


