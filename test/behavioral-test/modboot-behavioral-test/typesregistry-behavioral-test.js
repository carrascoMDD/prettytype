/*
 * typesregistry-behavioral-test.js
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


/// <reference path="src/common/typesregistry.js"/>
"use strict";


var aTest_spec = (function( theSS_typeregistry) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "typesregistry-behavioral-test";
    var ModulePackages = "test/behavioral-test/modboot-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aM_typesregistry = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
        
            beforeEach( module( 'typesRegistry'));
        
            beforeEach( inject(function( _TypesRegistrySvce_) {
                aM_typesregistry = _TypesRegistrySvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_typesregistry = require('../../../src/modboot/typesregistry');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_typesregistry = theSS_typeregistry;
        }
        
        
        it("Module gets registered", function () {
            var aModuleName = "TestModuleName01";
            expect( aM_typesregistry.fRegisteredModule( aModuleName)).toBeNull();
            
            aM_typesregistry.fRegisterModule( aModuleName, { "ModuleName": aModuleName});
            expect( aM_typesregistry.fRegisteredModule( aModuleName)).not.toBeNull();
            expect( aM_typesregistry.fRegisteredModule( aModuleName)[ "TYPESREGISTRY"]).toBe( aM_typesregistry);
        });
    
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_typesregistry_behavioral_test",
        [
            "m_typesregistry"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



