/*
 * stacktrace_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201805212322
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



/// <reference path="src/common/stacktrace_svce.js"/>
"use strict";



var aTest_spec = (function( theSS_stacktrace_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "stacktrace_svce-structural-test";
    var ModulePackages = "test/structural-test/exceptionstack-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_stacktrace_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "typesregistry", "stacktrace"));
            
            beforeEach( inject(function( _stacktrace_svce_) {
                aM_stacktrace_svce = _stacktrace_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_stacktrace_svce = require('../../../src/exceptionstack/stacktrace_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_stacktrace_svce = theSS_stacktrace_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_stacktrace_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "exceptionstack", "stacktrace_svce"));
        }
        
        
        
        
        
        it("Function is defined", function () {
            expect( aM_stacktrace_svce).not.toBeUndefined();
            expect( typeof aM_stacktrace_svce).toBe("function");
        });
    
        
        it("Function has module meta definitions", function () {
            expect( aM_stacktrace_svce._v_Kind).toBe( "function");
            expect( aM_stacktrace_svce.ComponentName).toBe( "prettytype");
            expect( aM_stacktrace_svce.ModuleName).toBe( "stacktrace_svce");
            expect( aM_stacktrace_svce.ModulePackages).toBe( "exceptionstack");
            expect( aM_stacktrace_svce.ModuleFullName).toBe( "exceptionstack/stacktrace_svce");
        });
        
        it("Function delegate type module has meta definitions ", function () {
            expect( aM_stacktrace_svce.stacktrace_type._v_Kind).toBe( "module");
            expect( aM_stacktrace_svce.stacktrace_type.ComponentName).toBe( "prettytype");
            expect( aM_stacktrace_svce.stacktrace_type.ModuleName).toBe( "stacktrace_type");
            expect( aM_stacktrace_svce.stacktrace_type.ModulePackages).toBe( "exceptionstack");
            expect( aM_stacktrace_svce.stacktrace_type.ModuleFullName).toBe( "exceptionstack/stacktrace_type");
        });
        
        
    });
});


if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "stacktrace_svce_structural_test",
        [
            "stacktrace_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}


