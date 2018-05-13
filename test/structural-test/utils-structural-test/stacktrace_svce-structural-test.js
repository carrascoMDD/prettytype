/*
 * traversals-structural-test.js
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


/// <reference path="src/common/traversals.js"/>
"use strict";


var aTest_spec = (function( theSS_stacktrace_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "stracktrace_svce-structural-test";
    var ModulePackages = "test/structural-test/utils-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aStacktrace_svce = null;
    
        var aStacktrace = null;
    
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'stacktrace'));
            
            beforeEach( inject(function( _StacktraceSvce_) {
                aStacktrace_svce = _StacktraceSvce_;
                aStacktrace = new aStacktrace_svce.implementation();
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aStacktrace_svce = require('../../../src/utils/stacktrace_svce');
            aStacktrace = new aStacktrace_svce.implementation();
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aStacktrace_svce = theSS_stacktrace_svce;
            aStacktrace = new aStacktrace_svce.implementation();
        }
        
        
        
        
        it("Module is not null", function () {
            expect( aStacktrace_svce).not.toBeNull( null);
        });
    
        it("Has ModuleName traversals", function () {
            expect( aStacktrace_svce.ModuleName).toBe( "stacktrace_svce");
        });
    
        it("Has ModulePackages traversals", function () {
            expect( aStacktrace_svce.ModulePackages).toBe( "utils");
        });
    
        it("Has ModuleFullName common.traversals", function () {
            expect( aStacktrace_svce.ModuleFullName).toBe( "utils/stacktrace_svce");
        });
        
        
    
        var someFunctionNames = [
            "run",
            "createException",
            "mode",
            "instrumentFunction",
            "deinstrumentFunction",
            "chrome",
            "safari",
            "ie",
            "firefox",
            "opera11",
            "opera10b",
            "opera10a",
            "opera9",
            "other",
            "stringifyArguments",
            "ajax",
            "createXMLHTTPObject",
            "isSameDomain",
            "getSource",
            "guessAnonymousFunctions",
            "guessAnonymousFunction",
            "findFunctionName"
        ];
        
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
        
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aStacktrace[ aFunctionName_here];
                        
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
    define( "m_stacktrace_svce_structural_test",
        [
            "m_stacktrace_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



