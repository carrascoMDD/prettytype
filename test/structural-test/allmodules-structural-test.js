/*
 * allmodules-structural-test.js
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


var aTest_spec = (function( theSS_allmodules) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "index-structural-test";
    var ModulePackages = "test/structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
    
        var aM_allmodules = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module(
                "allmodules"));
            
            beforeEach( inject(function( _allmodules_) {
                aM_allmodules = _allmodules_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_allmodules = require('../../src/allmodules');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_allmodules = theSS_allmodules;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_allmodules = nomod.resolve( nomod.fComputeFullName( "prettytype", "", "allmodules"));
        }
    
    
        it("Module is defined", function () {
            expect( aM_allmodules).not.toBeUndefined();
        });
    
    
        it("Has module meta definitions", function () {
            expect( aM_allmodules.ComponentName).toBe( "prettytype");
            expect( aM_allmodules.ModuleName).toBe( "allmodules");
            expect( aM_allmodules.ModulePackages).toBe( "");
            expect( aM_allmodules.ModuleFullName).toBe( "allmodules");
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
                        var aModuleConstant = aM_allmodules[ aModuleConstantName_here];
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
                        var aModules = aM_allmodules[ "Modules"];
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
                                var aModulesTree = aM_allmodules[ "ModulesTree"];
                                var aModulesTreeMember = aModulesTree[ aTreeKey_here];
                                expect( aModulesTreeMember).not.toBeUndefined();
                            });
                        })();
                    }
                }
            }
        }
    
    
    
        for( var otherTreeKeysIdx=0; otherTreeKeysIdx < aNumTreeKeys; otherTreeKeysIdx++) {
            var otherTreeKeys = someTreeKeys[ otherTreeKeysIdx];
            if( otherTreeKeys) {
                if( otherTreeKeys.length > 1) {
                    var otherTreeKey = otherTreeKeys[ 0];
                    if( otherTreeKey) {
                        var someSubTreeKeys = otherTreeKeys[ 1];
                        if( someSubTreeKeys) {
                            var aNumSubTreeKeys = someSubTreeKeys.length;
                            for( var aSubTreeKeysIdx=0; aSubTreeKeysIdx < aNumSubTreeKeys; aSubTreeKeysIdx++) {
                                var aSubTreeKey = someSubTreeKeys[ aSubTreeKeysIdx];
                                if( aSubTreeKey) {
                                    (function() {
                                        var otherTreeKey_here = otherTreeKey;
                                        var aSubTreeKey_here = aSubTreeKey;
                    
                                        it("Has ModulesTree " + otherTreeKey_here + " sub member " + aSubTreeKey_here + " defined", function () {
                                            var aModulesTree = aM_allmodules[ "ModulesTree"];
                                            var aModulesTreeMember = aModulesTree[ otherTreeKey_here];
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
    define( "allmodules_structural_test",
        [
            "allmodules"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



