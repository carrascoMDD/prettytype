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


var aTest_spec = (function( theSS_typeregistry_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "typesregistry-behavioral-test";
    var ModulePackages = "test/behavioral-test/typesregistry-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aM_typesregistry_scve = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
        
            beforeEach( module( 'typesregistry'));
        
            beforeEach( inject(function( _typesregistry_svce_) {
                aM_typesregistry_scve = _typesregistry_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_typesregistry_scve = require('../../../src/typesregistry/typesregistry_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_typesregistry_scve = theSS_typeregistry_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_typesregistry_scve = nomod.resolve( nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce"));
        }
    
        it("Module TypesRegistrySvce is registered and is the one being tested", function () {
            expect( aM_typesregistry_scve.fRegisteredModule( "typesregistry/typesregistry_svce.TypesRegistrySvce")).toBe( aM_typesregistry_scve);
        });
    
    
        it("Module is not registered", function () {
            var aModuleName = "TestModuleName01";
            expect( aM_typesregistry_scve.fRegisteredModule( aModuleName)).toBeNull();
        });
        
        
        it("Module gets registered", function () {
            var aModuleName = "TestModuleName02";
            expect( aM_typesregistry_scve.fRegisteredModule( aModuleName)).toBeNull();
            
            var aREGISTERMODULESswitched = false;
            if( !aM_typesregistry_scve.REGISTERMODULES) {
                aM_typesregistry_scve.REGISTERMODULES = true;
                aREGISTERMODULESswitched = true;
            }
            
            var aRESOLVEMODULESswitched=false;
            if( !aM_typesregistry_scve.RESOLVEMODULES) {
                aM_typesregistry_scve.RESOLVEMODULES = true;
                aRESOLVEMODULESswitched = true;
            }
            
            aM_typesregistry_scve.fRegisterModule( aModuleName, { "ModuleName": aModuleName});
            expect( aM_typesregistry_scve.fRegisteredModule( aModuleName)).not.toBeNull();
            expect( aM_typesregistry_scve.fRegisteredModule( aModuleName)[ "TYPESREGISTRY"]).toBe( aM_typesregistry_scve);
    
            if( aREGISTERMODULESswitched) {
                delete aM_typesregistry_scve.REGISTERMODULES;
            }
            if( aRESOLVEMODULESswitched) {
                delete aM_typesregistry_scve.RESOLVEMODULES;
            }
        });
    
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "typesregistry_svce_behavioral_test",
        [
            "typesregistry_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



