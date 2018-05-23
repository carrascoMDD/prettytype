/*
 * index-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201805140052
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


/// <reference path="src/common/index.js"/>
"use strict";


var aTest_spec = (function( theSS_index) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "index-structural-test";
    var ModulePackages = "test/structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
    
        var aM_index = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module(
                "index"));
            
            beforeEach( inject(function( _Index_) {
                aM_index = _Index_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_index = require('../../src/index');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_index = theSS_index;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_index = nomod.resolve( nomod.fComputeFullName( "prettytype", "", "index"));
        }
    
    
        it("Module is defined", function () {
            expect( aM_index).not.toBeUndefined();
        });
    
    
        it("Has module meta definitions", function () {
            expect( aM_index.ComponentName).toBe( "prettytype");
            expect( aM_index.ModuleName).toBe( "index");
            expect( aM_index.ModulePackages).toBe( "");
            expect( aM_index.ModuleFullName).toBe( "index");
        });
    
    
    
        var someConstantNames = [
            "Modules",
            "ModulesTree"
        ];
        var aNumConstantNames = someConstantNames.length;
        for( var aModuleConstantNameIdx=0; aModuleConstantNameIdx < aNumConstantNames; aModuleConstantNameIdx++) {
            var aModuleConstantName = someConstantNames[ aModuleConstantNameIdx];
            if( aModuleConstantName) {
                (function() {
                    var aModuleConstantName_here = aModuleConstantName;
                    it("Module exposes constant " + aModuleConstantName_here, function () {
                        var aModuleConstant = aM_index[ aModuleConstantName_here];
                        expect( aModuleConstant).not.toBeUndefined();
                    });
                })()
            }
        }
    
    
        var someModulesKeys = [
            "typesregistry_type",
            "typesregistry_svce",
            "overrider_type",
            "overrider_svce",
            "decoratesystemprototypes",
            "stacktrace_type",
            "stacktrace_svce",
            "exceptiondetails_type",
            "exceptiondetails_svce",
            "console_type",
            "console_svce",
            "traversals",
            "checks",
            "identifier_type",
            "identifier_svce",
            "record_type",
            "recordingpolicy_type",
            "recordingpolicy_keepall_type",
            "recordingpolicy_keepsome_type",
            "recordingpolicy_keeprecent_type",
            "dumpingpolicy_type",
            "dumpingpolicy_filterkinds_type",
            "dumpingpolicy_triggerkinds_type",
            "recorder_type",
            "recorder_svce",
            "eventkinds_common",
            "common_type"
        ];
        
        var aNumModulesKeys = someModulesKeys.length;
        for( var aModulesKeyIdx=0; aModulesKeyIdx < aNumModulesKeys; aModulesKeyIdx++) {
            var aModulesKey = someModulesKeys[ aModulesKeyIdx];
            if( aModulesKey) {
                (function() {
                    var aModulesKey_here = aModulesKey;
        
                    it("Has Modules member " + aModulesKey_here + " defined", function () {
                        var aModules = aM_index[ "Modules"];
                        var aModulesMember = aModules[ aModulesKey_here];
                        expect( aModulesMember).not.toBeUndefined();
                    });
                })();
            }
        }
        
        
        var someTreeKeys = [
            [ "typesregistry", [
                "typesregistry_type",          
                "typesregistry_svce"         
            ]],
            [ "overrider", [
                "overrider_type",              
                "overrider_svce"
            ]],
            [ "lowinstr", [
                "decoratesystemprototypes"
            ]],
            [ "exceptionstack",  [
                "stacktrace_type",
                "stacktrace_svce",             
                "exceptiondetails_type",       
                "exceptiondetails_svce"
            ]],
            [ "console", [
                "console_type",                
                "console_svce"
            ]],
            [ "utils", [
                "traversals",                  
                "checks"
            ]],
            [ "identifier", [
                "identifier_type",            
                "identifier_svce"
            ]],
            [ "recording", [
                "record_type",                        
                "recordingpolicy_type",               
                "recordingpolicy_keepall_type",       
                "recordingpolicy_keepsome_type",      
                "recordingpolicy_keeprecent_type",    
                "dumpingpolicy_type",                 
                "dumpingpolicy_filterkinds_type",     
                "dumpingpolicy_triggerkinds_type",    
                "recorder_type",                      
                "recorder_svce"                      
            ]],
            [ "eventkinds", [
                "eventkinds_common"
            ]],
                                            [ "common", [
                "common_type"
            ]]
        ];
    
        var aNumTreeKeys = someTreeKeys.length;
        for( var aTreeKeysIdx=0; aTreeKeysIdx < aNumTreeKeys; aTreeKeysIdx++) {
            var aTreeKeys = someTreeKeys[ aTreeKeysIdx];
            if( aTreeKeys) {
                if( aTreeKeys.length > 1) {
                    var aTreeKey = aTreeKeys[ 0];
                    if( aTreeKey) {
                        (function() {
                            var aTreeKey_here = aTreeKey;
        
                            it("Has ModulesTree member " + aTreeKey_here + " defined", function () {
                                var aModulesTree = aM_index[ "ModulesTree"];
                                var aModulesTreeMember = aModulesTree[ aTreeKey_here];
                                expect( aModulesTreeMember).not.toBeUndefined();
                            });
                        })();
                    }
                }
            }
        }
    
    
    
        for( var aTreeKeysIdx=0; aTreeKeysIdx < aNumTreeKeys; aTreeKeysIdx++) {
            var aTreeKeys = someTreeKeys[ aTreeKeysIdx];
            if( aTreeKeys) {
                if( aTreeKeys.length > 1) {
                    var aTreeKey = aTreeKeys[ 0];
                    if( aTreeKey) {
                        var someSubTreeKeys = aTreeKeys[ 1];
                        if( someSubTreeKeys) {
                            var aNumSubTreeKeys = someSubTreeKeys.length;
                            for( var aSubTreeKeysIdx=0; aSubTreeKeysIdx < aNumSubTreeKeys; aSubTreeKeysIdx++) {
                                var aSubTreeKey = someSubTreeKeys[ aSubTreeKeysIdx];
                                if( aSubTreeKey) {
                                    (function() {
                                        var aTreeKey_here = aTreeKey;
                                        var aSubTreeKey_here = aSubTreeKey;
                    
                                        it("Has ModulesTree " + aTreeKey + " sub member " + aSubTreeKey_here + " defined", function () {
                                            var aModulesTree = aM_index[ "ModulesTree"];
                                            var aModulesTreeMember = aModulesTree[ aTreeKey_here];
                                            var aModuleSubTreeMember = aModulesTreeMember[ aSubTreeKey_here];
                                            expect( aModuleSubTreeMember).not.toBeUndefined();
                                        });
                                    })();
                                }
                            }
                        }
                    }
                }
            }
        }
    
    });
});


if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "index_structural_test",
        [
            "index"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



