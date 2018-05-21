/*
 * overrider_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601261940
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



/// <reference path="src/common/overrider_svce.js"/>
"use strict";



var aTest_spec = (function( theSS_overrider_svce) {

    var ComponentName    = "prettytype-test";
    var ModuleName     = "overrider_svce-structural-test";
    var ModulePackages = "test/structural-test/overrider-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_overrider_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "typesregistry", "overrider"));
            
            beforeEach( inject(function( _overrider_svce_) {
                aM_overrider_svce = _overrider_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_overrider_svce = require('../../../src/overrider/overrider_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_overrider_svce = theSS_overrider_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_overrider_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"));
        }
    
    
    
    
    
        it("Singleton is defined", function () {
            expect( aM_overrider_svce).not.toBeUndefined();
        });
    
        it("Singleton has module meta definitions", function () {
            expect( aM_overrider_svce.ComponentName).toBe( "prettytype");
            expect( aM_overrider_svce.ModuleName).toBe( "overrider_svce");
            expect( aM_overrider_svce.ModulePackages).toBe( "overrider");
            expect( aM_overrider_svce.ModuleFullName).toBe( "overrider/overrider_svce");
            expect( aM_overrider_svce.SingletonName).toBe( "Overrider_Service");
        });
    
        it("Singleton has meta definitions ", function () {
            expect( aM_overrider_svce._v_Kind).toBe( "singleton");
            expect( aM_overrider_svce._v_Prototype).not.toBeUndefined();
            expect( aM_overrider_svce._v_SuperPrototype).toBe( null);
            expect( aM_overrider_svce._v_Type).toBe( "Overrider");
            expect( aM_overrider_svce._v_Prototype_Overrider).not.toBeUndefined();
            expect( aM_overrider_svce._v_Module).not.toBeUndefined();
            expect( aM_overrider_svce._v_Module).not.toBeNull( null);
        });
    
    
        var someConstantNames = [
            "OVERRIDER_DEFAULTTITLE",
            "MODULENAMESTEPSEPARATOR",
            "PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP",
            "LOGOVERRIDESFROMCOMMANDLINE"
        ];
        var aNumConstantNames = someConstantNames.length;  for( var aM_overrider_svceConstantNameIdx=0; aM_overrider_svceConstantNameIdx < aNumConstantNames; aM_overrider_svceConstantNameIdx++) {
            var aM_overrider_svceConstantName = someConstantNames[ aM_overrider_svceConstantNameIdx];
            if( aM_overrider_svceConstantName) {
                (function() {
                    var aM_overrider_svceConstantName_here = aM_overrider_svceConstantName;
                    it("Singleton has module constant named " + aM_overrider_svceConstantName_here + " prototypically inherited", function () {
                        var aM_overrider_svceConstant = aM_overrider_svce[ aM_overrider_svceConstantName_here];
                        expect( aM_overrider_svceConstant).not.toBeUndefined();
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
        for( var aM_overrider_svceGeneralFunctionNameIdx=0; aM_overrider_svceGeneralFunctionNameIdx < aNumPrototypeGeneralFunctionNames; aM_overrider_svceGeneralFunctionNameIdx++) {
            var aM_overrider_svceGeneralFunctionName = somePrototypeGeneralFunctionNames[ aM_overrider_svceGeneralFunctionNameIdx];
            if( aM_overrider_svceGeneralFunctionName) {
                (function() {
                    var aM_overrider_svceGeneralFunctionName_here = aM_overrider_svceGeneralFunctionName;
                    it("Singleton has general function named " + aM_overrider_svceGeneralFunctionName_here + " prototypically inherited", function () {
                        var aM_overrider_svceGeneralFunction = aM_overrider_svce[ aM_overrider_svceGeneralFunctionName_here];
                        expect( typeof aM_overrider_svceGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var somePrototypeSlotNames = [
            /* None */
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aM_overrider_svceSlotNameIdx=0; aM_overrider_svceSlotNameIdx < aNumPrototypeSlotNames; aM_overrider_svceSlotNameIdx++) {
            var aM_overrider_svceSlotName = somePrototypeSlotNames[ aM_overrider_svceSlotNameIdx];
            if( aM_overrider_svceSlotName) {
                (function() {
                    var aM_overrider_svceSlotName_here = aM_overrider_svceSlotName;
                    it("Singleton has slot with name " + aM_overrider_svceSlotName_here + " prototypically inherited", function () {
                        var aM_overrider_svce = aM_typesregistry_type.Prototype;
                        var anPrototypeSlot = aM_overrider_svce[ aM_overrider_svceSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
    
    
        var somePrototypeSpecificFunctionNames = [
            "_pInit_Overrider",
            "pSetOverriderarguments",
            "pSetCustom",
            "pSetOverrides",
            "pOverrideModuleVariations"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aM_overrider_svceSpecificFunctionNameIdx=0; aM_overrider_svceSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aM_overrider_svceSpecificFunctionNameIdx++) {
            var aM_overrider_svceSpecificFunctionName = somePrototypeSpecificFunctionNames[ aM_overrider_svceSpecificFunctionNameIdx];
            if( aM_overrider_svceSpecificFunctionName) {
                (function() {
                    var aM_overrider_svceSpecificFunctionName_here = aM_overrider_svceSpecificFunctionName;
                    it("Singleton has specific function " + aM_overrider_svceSpecificFunctionName_here + " prototypically inherited", function () {
                        var aM_overrider_svceSpecificFunction = aM_overrider_svce[ aM_overrider_svceSpecificFunctionName_here];
                        expect( typeof aM_overrider_svceSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var someInstanceSlotNames = [
            "_v_Title",
            "_v_Overriderarguments",
            "_v_Custom",
            "_v_Overrides"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Singleton has slot with name " + aInstanceSlotName_here, function () {
                        var anInstanceSlot = aM_overrider_svce[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
    
        
    });
});


if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "overrider_svce_structural_test",
        [
            "overrider_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}


