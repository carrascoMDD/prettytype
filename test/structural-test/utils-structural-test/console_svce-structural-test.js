/*
 * console_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131355
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




/// <reference path="src/utils/console_ng_svce.js"/>
"use strict";



var aTest_spec = (function( theSS_console_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "console_svce-structural-test";
    var ModulePackages = "test/behavioral-test/utils-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
    
        var aConsoleSvce = null;
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "typesRegistry", "modbootTypes", "consoleSvce"));
        
            beforeEach( inject(function( _ConsoleSvce_) {
                aConsoleSvce = _ConsoleSvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aConsoleSvce = require('../../../src/utils/console_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aConsoleSvce = theSS_console_svce;
        }
    

    
    
    
        it("Has module ModuleName console_svce", function () {
            expect( aConsoleSvce.ModuleName).toBe( "console_svce");
        });
    
        it("Has module ModulePackages utils", function () {
            expect( aConsoleSvce.ModulePackages).toBe( "utils");
        });
    
        it("Has module ModuleFullName utils.console_svce", function () {
            expect( aConsoleSvce.ModuleFullName).toBe( "utils/console_svce");
        });
    
    
    
    
        var someFunctionNames = [
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
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aConsoleSvce[ aFunctionName_here];
                    
                        expect( typeof aFunction).toBe( "function");
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
    define( "m_console_svce_structural_test",
        [
            "m_console_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



