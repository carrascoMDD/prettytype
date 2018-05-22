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
        var aNumConstantNames = someConstantNames.length;
        for( var aPrototypeConstantNameIdx=0; aPrototypeConstantNameIdx < aNumConstantNames; aPrototypeConstantNameIdx++) {
            var aPrototypeConstantName = someConstantNames[ aPrototypeConstantNameIdx];
            if( aPrototypeConstantName) {
                (function() {
                    var aPrototypeConstantName_here = aPrototypeConstantName;
                    it("Singleton has module constant named " + aPrototypeConstantName_here + " prototypically inherited", function () {
                        var aPrototypeConstant = aM_console_svce[ aPrototypeConstantName_here];
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
                        var aPrototypeGeneralFunction = aM_console_svce[ aPrototypeGeneralFunctionName_here];
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
                        var anPrototypeSlot = aM_console_svce[ aPrototypeSlotName_here];
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
        for( var aPrototypeSpecificFunctionNameIdx=0; aPrototypeSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aPrototypeSpecificFunctionNameIdx++) {
            var aPrototypeSpecificFunctionName = somePrototypeSpecificFunctionNames[ aPrototypeSpecificFunctionNameIdx];
            if( aPrototypeSpecificFunctionName) {
                (function() {
                    var aPrototypeSpecificFunctionName_here = aPrototypeSpecificFunctionName;
                    it("Singleton has specific function " + aPrototypeSpecificFunctionName_here + " prototypically inherited", function () {
                        var aPrototypeSpecificFunction = aM_console_svce[ aPrototypeSpecificFunctionName_here];
                        expect( typeof aPrototypeSpecificFunction).toBe( "function");
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




