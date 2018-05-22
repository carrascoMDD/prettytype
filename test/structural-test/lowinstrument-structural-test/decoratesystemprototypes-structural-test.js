/*
 * recorder_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601242042
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




/// <reference path="src/recording/recorder_svce.js"/>
"use strict";




var aTest_spec = (function( theSS_decoratesystemprototypes) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "decoratesystemprototypes-structural-test";
    var ModulePackages = "test/structural-test/lowinstrument-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
    
        var aM_decoratesystemprototypes = null;
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "lowinstrument"));
            
            beforeEach( inject(function( _decoratesystemprototypes_) {
                aM_decoratesystemprototypes = _decoratesystemprototypes_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_decoratesystemprototypes = require('../../../src/lowinstrument/decoratesystemprototypes');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_decoratesystemprototypes = theSS_decoratesystemprototypes;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_decoratesystemprototypes = nomod.resolve( nomod.fComputeFullName( "prettytype", "lowinstrument", "decoratesystemprototypes"));
        }
    
    
    
    
        it("Module is defined", function () {
            expect( aM_decoratesystemprototypes).not.toBeUndefined();
        });
    
    
        it("Has module meta definitions", function () {
            expect( aM_decoratesystemprototypes.ComponentName).toBe( "prettytype");
            expect( aM_decoratesystemprototypes.ModuleName).toBe( "decoratesystemprototypes");
            expect( aM_decoratesystemprototypes.ModulePackages).toBe( "lowinstrument");
            expect( aM_decoratesystemprototypes.ModuleFullName).toBe( "lowinstrument/decoratesystemprototypes");
        });
    
    
    
        var someConstantNames = [
        ];
        var aNumConstantNames = someConstantNames.length;
        for( var aModuleConstantNameIdx=0; aModuleConstantNameIdx < aNumConstantNames; aModuleConstantNameIdx++) {
            var aModuleConstantName = someConstantNames[ aModuleConstantNameIdx];
            if( aModuleConstantName) {
                (function() {
                    var aModuleConstantName_here = aModuleConstantName;
                    it("Module exposes constant " + aModuleConstantName_here, function () {
                        var aModuleConstant = aM_decoratesystemprototypes[ aModuleConstantName_here];
                        expect( aModuleConstant).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        
        var someModuleSpecificFunctionNames = [
            "fStringExtend"
        ];
        var aNumModuleSpecificFunctionNames = someModuleSpecificFunctionNames.length;
        for( var aModuleSpecificFunctionNameIdx=0; aModuleSpecificFunctionNameIdx < aNumModuleSpecificFunctionNames; aModuleSpecificFunctionNameIdx++) {
            var aModuleSpecificFunctionName = someModuleSpecificFunctionNames[ aModuleSpecificFunctionNameIdx];
            if( aModuleSpecificFunctionName) {
                (function() {
                    var aModuleSpecificFunctionName_here = aModuleSpecificFunctionName;
                    
                    it("Prototype has general function " + aModuleSpecificFunctionName_here + " defined", function () {
                        var aModuleSpecificFunction = aM_decoratesystemprototypes[ aModuleSpecificFunctionName_here];
                        expect( typeof aModuleSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "decoratesystemprototypes_structural_test",
        [
            "decoratesystemprototypes"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

