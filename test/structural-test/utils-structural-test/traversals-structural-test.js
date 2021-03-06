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


var aTest_spec = (function( theSS_traversals) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "traversals-structural-test";
    var ModulePackages = "test/structural-test/utils-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aM_traversals = null;
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "utils"));
            
            beforeEach( inject(function( _traversals_) {
                aM_traversals = _traversals_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_traversals = require('../../../src/utils/traversals');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_traversals = theSS_traversals;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_traversals = nomod.resolve( nomod.fComputeFullName( "prettytype", "utils", "traversals"));
        }
    
    
        it("Module is defined", function () {
            expect( aM_traversals).not.toBeUndefined();
        });
    
    
        it("Module has meta definitions", function () {
            expect( aM_traversals.ComponentName).toBe( "prettytype");
            expect( aM_traversals.ModuleName).toBe( "traversals");
            expect( aM_traversals.ModulePackages).toBe( "utils");
            expect( aM_traversals.ModuleFullName).toBe( "utils/traversals");
        });
    
    
    
        var someFunctionNames = [
            "fgFirstDiff",
            "fgFirstDiffFromLeft",
            "fgAllDiffs",
            "fgParmValueReplacement",
            "fgParmValueReplacement_DotNotation",
            "fgTraverseToFromValue",
            "fgTraverseToFromValueReturnValueOrNull",
            "fgHasAnyStepsWithParmPrefix",
            "fgStepsWithParmPrefix",
            "fgSetValueAtPath",
            "fgSetValueAtPathSymbolic",
            "fgSymbolicGet",
            "fgDeepCopy",
            "fgDeepCopy_List",
            "fgDeepCopy_Object",
            "fDictFromListByKey",
            "fgDictFromListByKey_AsLists",
            "fgDictFromListByKeyPath",
            "fgCollectProperty",
            "pgPushIntoIfNotAlready",
            "fgCollectPath"
        ];
        
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
        
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aM_traversals[ aFunctionName_here];
                        
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
    define( "traversals_structural_test",
        [
            "traversals"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



