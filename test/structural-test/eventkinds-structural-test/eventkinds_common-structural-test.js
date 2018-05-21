/*
 * eventkinds_common-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201805131815
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


var aTest_spec = (function( theSS_eventkinds_common) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "eventkinds_common-structural-test";
    var ModulePackages = "test/structural-test/eventkinds-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_eventkinds_common = null;
        
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "typesregistry", "overrider", "eventkinds"));
            
            beforeEach( inject(function( _eventkinds_common_) {
                aM_eventkinds_common = _eventkinds_common_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_eventkinds_common = require('../../../src/eventkinds/eventkinds_common');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_eventkinds_common = theSS_eventkinds_common;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_eventkinds_common = nomod.resolve( nomod.fComputeFullName( "prettytype", "eventkinds", "eventkinds_common"));
        }
    
    
    
    
    
    
        it("Module is defined", function () {
            expect( aM_eventkinds_common).not.toBeUndefined();
        });
    
    
        it("Has module meta definitions", function () {
            expect( aM_eventkinds_common._v_Kind).toBe( "module");
            expect( aM_eventkinds_common.ComponentName).toBe( "prettytype");
            expect( aM_eventkinds_common.ModuleName).toBe( "eventkinds_common");
            expect( aM_eventkinds_common.ModulePackages).toBe( "eventkinds");
            expect( aM_eventkinds_common.ModuleFullName).toBe( "eventkinds/eventkinds_common");
        });
    
    
        var someGeneralFunctionNames = [
            "InitFromModuleVariations",
            "InitFromModuleConstants",
            "InitModuleGlobalsOn"
        ];
        var aNumGeneralFunctionNames = someGeneralFunctionNames.length;
        for( var aGeneralFunctionNameIdx=0; aGeneralFunctionNameIdx < aNumGeneralFunctionNames; aGeneralFunctionNameIdx++) {
            var aGeneralFunctionName = someGeneralFunctionNames[ aGeneralFunctionNameIdx];
            if( aGeneralFunctionName) {
                (function() {
                    var aGeneralFunctionName_here = aGeneralFunctionName;
                    it("Module exposes general definition function " + aGeneralFunctionName_here, function () {
                        var aGeneralFunction = aM_eventkinds_common[ aGeneralFunctionName_here];
                        expect( typeof aGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
    
    
        var someConstantNames = [
            "EVENTKINDS_ERRORS",
            "EVENTKINDS_NOTFORCONSOLE_DEFAULT",
            "EVENTKINDS",
            "EVENTKINDS_FAILURES",
            "EVENTKINDS_NOTFAILURES",
            "EVENTKINDS_NOTFORCONSOLE_ALL",
            "EVENTKINDS_NOTFORCONSOLE_NONE",
            "EVENTKINDS_NOTFORCONSOLE_ALL",
            "EVENTKINDS_TRIGGERDUMP_ERRORS",
            "EVENTKINDS_TRIGGERDUMP_ALL",
            "EVENTKINDS_TRIGGERDUMP_DEFAULT"
        ];
        var aNumConstantNames = someConstantNames.length;
        for( var aModuleConstantNameIdx=0; aModuleConstantNameIdx < aNumConstantNames; aModuleConstantNameIdx++) {
            var aModuleConstantName = someConstantNames[ aModuleConstantNameIdx];
            if( aModuleConstantName) {
                (function() {
                    var aModuleConstantName_here = aModuleConstantName;
                    it("Module exposes constant " + aModuleConstantName_here, function () {
                        var aModuleConstant = aM_eventkinds_common[ aModuleConstantName_here];
                        expect( aModuleConstant).not.toBeUndefined();
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
    define( "eventkinds_common_structural_test",
        [
            "eventkinds_common"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



