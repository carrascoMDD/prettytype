/*
 * overrider_svce-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201601261940
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



/// <reference path="src/common/overrider_svce.js"/>
"use strict";

var aTest_spec = (function( theSS_overrider_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "overrider_svce-behavioral-test";
    var ModulePackages = "test/behavioral-test/overrider-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        var aM_overrider_svce = null;
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "overrider"));
    
            beforeEach( inject(function( _overrider_svce_) {
                aM_overrider_svce = _overrider_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_overrider_svce = require('../../../src/overrider/overrider_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_overrider_svce = theSS_overrider_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_overrider_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"));
        }
        
        
        it("Overrides from custom", function () {
            var aVariations = { "a_b_c_P1": 1, "a_b_c_P2": 2, "a_b_c_P3": 3, "a_b_c_P4": 4};
            var aCustom     = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P1": 10, "a_b_c_P5": 4}}}};
    
            aM_overrider_svce.pSetOverriderarguments( [ ]);
            aM_overrider_svce.pSetOverrides( {});
            aM_overrider_svce.pSetCustom( aCustom);
            aM_overrider_svce.pOverrideModuleVariations( "mod_a/mod_a_b/mod_a_b_c", aVariations);
            
            expect( aVariations[ "a_b_c_P1"]).toBe( 10);
            expect( aVariations[ "a_b_c_P2"]).toBe( 2);
            expect( aVariations[ "a_b_c_P3"]).toBe( 3);
            expect( aVariations[ "a_b_c_P4"]).toBe( 4);
            expect( aVariations[ "a_b_c_P5"]).not.toBe( 4);
        });
        
        
        it("Overrides from overrides", function () {
            var aVariations = { "a_b_c_P1": 1, "a_b_c_P2": 2, "a_b_c_P3": 3, "a_b_c_P4": 4};
            var anOverrides = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P1": 10, "a_b_c_P5": 4}}}};
    
            aM_overrider_svce.pSetOverriderarguments( [ ]);
            aM_overrider_svce.pSetCustom( {});
            aM_overrider_svce.pSetOverrides( anOverrides);
            aM_overrider_svce.pOverrideModuleVariations( "mod_a/mod_a_b/mod_a_b_c", aVariations);
            
            expect( aVariations[ "a_b_c_P1"]).toBe( 10);
            expect( aVariations[ "a_b_c_P2"]).toBe( 2);
            expect( aVariations[ "a_b_c_P3"]).toBe( 3);
            expect( aVariations[ "a_b_c_P4"]).toBe( 4);
            expect( aVariations[ "a_b_c_P5"]).not.toBe( 4);
        });
        
        it("Overrides from arguments", function () {
            var aVariations = { "a_b_c_P1": 1, "a_b_c_P2": 2, "a_b_c_P3": 3, "a_b_c_P4": 4};
            var anArguments = [ { "name": "mod_a_-_mod_a_b_-_mod_a_b_c_-_a_b_c_P1", "value": 10}];
            
            aM_overrider_svce.pSetCustom( {});
            aM_overrider_svce.pSetOverrides( {});
            aM_overrider_svce.pSetOverriderarguments( anArguments);
            aM_overrider_svce.pOverrideModuleVariations( "mod_a/mod_a_b/mod_a_b_c", aVariations);
            
            expect( aVariations[ "a_b_c_P1"]).toBe( 10);
            expect( aVariations[ "a_b_c_P2"]).toBe( 2);
            expect( aVariations[ "a_b_c_P3"]).toBe( 3);
            expect( aVariations[ "a_b_c_P4"]).toBe( 4);
            expect( aVariations[ "a_b_c_P5"]).not.toBe( 4);
        });
        
        
        it("Overrides from custom and overrides", function () {
            var aVariations = { "a_b_c_P1": 1, "a_b_c_P2": 2, "a_b_c_P3": 3, "a_b_c_P4": 4};
            var aCustom     = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P1": 10, "a_b_c_P5": 5}}}};
            var anOverrides = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P3": 30, "a_b_c_P6": 6}}}};
    
            aM_overrider_svce.pSetCustom( aCustom);
            aM_overrider_svce.pSetOverrides( anOverrides);
            aM_overrider_svce.pSetOverriderarguments( {});
            aM_overrider_svce.pOverrideModuleVariations( "mod_a/mod_a_b/mod_a_b_c", aVariations);
            
            expect( aVariations[ "a_b_c_P1"]).toBe( 10);
            expect( aVariations[ "a_b_c_P2"]).toBe( 2);
            expect( aVariations[ "a_b_c_P3"]).toBe( 30);
            expect( aVariations[ "a_b_c_P4"]).toBe( 4);
            expect( aVariations[ "a_b_c_P5"]).not.toBe( 5);
            expect( aVariations[ "a_b_c_P6"]).not.toBe( 6);
        });
        
        
        it("Overrides from custom and arguments", function () {
            var aVariations = { "a_b_c_P1": 1, "a_b_c_P2": 2, "a_b_c_P3": 3, "a_b_c_P4": 4};
            var aCustom     = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P1": 10, "a_b_c_P5": 5}}}};
            var anArguments = [ { "name": "mod_a_-_mod_a_b_-_mod_a_b_c_-_a_b_c_P3", "value": 30}];
            
            aM_overrider_svce.pSetCustom( aCustom);
            aM_overrider_svce.pSetOverrides( {});
            aM_overrider_svce.pSetOverriderarguments( anArguments);
            aM_overrider_svce.pOverrideModuleVariations( "mod_a/mod_a_b/mod_a_b_c", aVariations);
            
            expect( aVariations[ "a_b_c_P1"]).toBe( 10);
            expect( aVariations[ "a_b_c_P2"]).toBe( 2);
            expect( aVariations[ "a_b_c_P3"]).toBe( 30);
            expect( aVariations[ "a_b_c_P4"]).toBe( 4);
            expect( aVariations[ "a_b_c_P5"]).not.toBe( 5);
            expect( aVariations[ "a_b_c_P6"]).not.toBe( 6);
        });
        
        
        it("Overrides from custom and overrides and arguments", function () {
            var aVariations = { "a_b_c_P1": 1, "a_b_c_P2": 2, "a_b_c_P3": 3, "a_b_c_P4": 4};
            var aCustom     = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P1": 10, "a_b_c_P5": 5}}}};
            var anOverrides = { "mod_a": { "mod_a_b":  { "mod_a_b_c": { "a_b_c_P3": 30, "a_b_c_P6": 6}}}};
            var anArguments = [ { "name": "mod_a_-_mod_a_b_-_mod_a_b_c_-_a_b_c_P4", "value": 40},
                                { "name": "mod_a_-_mod_a_b_-_mod_a_b_c_-_a_b_c_P7", "value": 70}];
            
            aM_overrider_svce.pSetCustom( aCustom);
            aM_overrider_svce.pSetOverrides( anOverrides);
            aM_overrider_svce.pSetOverriderarguments( anArguments);
            aM_overrider_svce.pOverrideModuleVariations( "mod_a/mod_a_b/mod_a_b_c", aVariations);
            
            expect( aVariations[ "a_b_c_P1"]).toBe( 10);
            expect( aVariations[ "a_b_c_P2"]).toBe( 2);
            expect( aVariations[ "a_b_c_P3"]).toBe( 30);
            expect( aVariations[ "a_b_c_P4"]).toBe( 40);
            expect( aVariations[ "a_b_c_P5"]).not.toBe( 5);
            expect( aVariations[ "a_b_c_P6"]).not.toBe( 6);
            expect( aVariations[ "a_b_c_P7"]).toBe( 70);
        });
    });
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "overrider_svce_behavioral_test",
        [
            "overrider_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}


