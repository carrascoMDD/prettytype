/*
 * console_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201805210512
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


/// <reference path="src/common/console_svce.js"/>
"use strict";


var aTest_spec = (function( theSS_console_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "console_svce-structural-test";
    var ModulePackages = "test/structural-test/console-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_console_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "console"));
            
            beforeEach( inject(function( _console_svce_) {
                aM_console_svce = _console_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_console_svce = require('../../../src/console/console_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_console_svce = theSS_console_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_console_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "console", "console_svce"));
        }
    
    
    
    
    
        it("Singleton is defined", function () {
            expect( aM_console_svce).not.toBeUndefined();
        });
    
        
        it("Singleton has module meta definitions", function () {
            expect( aM_console_svce.ComponentName).toBe( "prettytype");
            expect( aM_console_svce.ModuleName).toBe( "console_svce");
            expect( aM_console_svce.ModulePackages).toBe( "console");
            expect( aM_console_svce.ModuleFullName).toBe( "console/console_svce");
            expect( aM_console_svce.SingletonName).toBe( "Console_Service");
        });
        
        
        it("Singleton has meta definitions ", function () {
            expect( aM_console_svce._v_Kind).toBe( "singleton");
            expect( aM_console_svce._v_Prototype).not.toBeUndefined();
            expect( aM_console_svce._v_SuperPrototype).toBe( null);
            expect( aM_console_svce._v_Type).toBe( "Console");
            expect( aM_console_svce._v_Prototype_Console).not.toBeUndefined();
            expect( aM_console_svce._v_Module).not.toBeNull( null);
            expect( aM_console_svce._v_Module).not.toBeUndefined();
        });
    
    
        var someConstantNames = [
            "WRITETOCONSOLE",
            "COLLECTLOGS",
            "MAXCOLLECTEDLOGSLENGTH",
            "CONSOLEDEFAULTNAME"
        ];
        var aNumConstantNames = someConstantNames.length;  for( var aM_console_svceConstantNameIdx=0; aM_console_svceConstantNameIdx < aNumConstantNames; aM_console_svceConstantNameIdx++) {
            var aM_console_svceConstantName = someConstantNames[ aM_console_svceConstantNameIdx];
            if( aM_console_svceConstantName) {
                (function() {
                    var aM_console_svceConstantName_here = aM_console_svceConstantName;
                    it("Singleton has module constant named " + aM_console_svceConstantName_here + " prototypically inherited", function () {
                        var aM_console_svceConstant = aM_console_svce[ aM_console_svceConstantName_here];
                        expect( aM_console_svceConstant).not.toBeUndefined();
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
        for( var aM_console_svceGeneralFunctionNameIdx=0; aM_console_svceGeneralFunctionNameIdx < aNumPrototypeGeneralFunctionNames; aM_console_svceGeneralFunctionNameIdx++) {
            var aM_console_svceGeneralFunctionName = somePrototypeGeneralFunctionNames[ aM_console_svceGeneralFunctionNameIdx];
            if( aM_console_svceGeneralFunctionName) {
                (function() {
                    var aM_console_svceGeneralFunctionName_here = aM_console_svceGeneralFunctionName;
                    it("Singleton has general function named " + aM_console_svceGeneralFunctionName_here + " prototypically inherited", function () {
                        var aM_console_svceGeneralFunction = aM_console_svce[ aM_console_svceGeneralFunctionName_here];
                        expect( typeof aM_console_svceGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var somePrototypeSlotNames = [
            /* None */
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aM_console_svceSlotNameIdx=0; aM_console_svceSlotNameIdx < aNumPrototypeSlotNames; aM_console_svceSlotNameIdx++) {
            var aM_console_svceSlotName = somePrototypeSlotNames[ aM_console_svceSlotNameIdx];
            if( aM_console_svceSlotName) {
                (function() {
                    var aM_console_svceSlotName_here = aM_console_svceSlotName;
                    it("Singleton has slot with name " + aM_console_svceSlotName_here + " prototypically inherited", function () {
                        var aM_console_svce = aM_typesregistry_type.Prototype;
                        var anPrototypeSlot = aM_console_svce[ aM_console_svceSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
    
    
        var somePrototypeSpecificFunctionNames = [
            "_pInit_Console",
            "log",
            "info",
            "error",
            "clear",
            "pSetWriteToConsole",
            "pSetCollectLogs",
            "pSetMaxCollectedLogsLength",
            "fCollectedLogs",
            "fCollectedLogsCopy"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aM_console_svceSpecificFunctionNameIdx=0; aM_console_svceSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aM_console_svceSpecificFunctionNameIdx++) {
            var aM_console_svceSpecificFunctionName = somePrototypeSpecificFunctionNames[ aM_console_svceSpecificFunctionNameIdx];
            if( aM_console_svceSpecificFunctionName) {
                (function() {
                    var aM_console_svceSpecificFunctionName_here = aM_console_svceSpecificFunctionName;
                    it("Singleton has specific function " + aM_console_svceSpecificFunctionName_here + " prototypically inherited", function () {
                        var aM_console_svceSpecificFunction = aM_console_svce[ aM_console_svceSpecificFunctionName_here];
                        expect( typeof aM_console_svceSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var someInstanceSlotNames = [
            "_v_Title",
            "_v_WriteToConsole",
            "_v_CollectLogs",
            "_v_MaxCollectedLogsLength",
            "_v_CollectedLogs",
            "_v_CollectedLogsSize"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Singleton has slot with name " + aInstanceSlotName_here, function () {
                        var anInstanceSlot = aM_console_svce[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "console_svce_structural_test",
        [
            "console_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}




