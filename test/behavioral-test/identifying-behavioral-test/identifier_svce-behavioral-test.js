/*
 * identifier_svce-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241620
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




/// <reference path="src/identifying/identifier_type.js"/>
"use strict";



var aTest_spec = (function( theSS_identifier_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "identifier_svce-behavioral-test";
    var ModulePackages = "test/behavioral-test/identifying-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aM_identifier_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_) {
                aM_identifier_svce = _IdentifierSvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce = require('../../../src/identifying/identifier_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
        }
        
    

    
    
        it("Reserves an Id not undefined", function () {
            expect( aM_identifier_svce.fReserveId()).not.toBeUndefined();
        });
        
        it("Reserves an Id string", function () {
            expect( typeof aM_identifier_svce.fReserveId()).toBe( "string");
        });
    
        it("Reserves an Id string not empty", function () {
            expect( aM_identifier_svce.fReserveId().length > 0).toBe( true);
        });
    
        it("Reserves two Ids not the same", function () {
            expect( aM_identifier_svce.fReserveId() == aM_identifier_svce.fReserveId()).toBe( false);
        });
    
        it("Reserves 1000000 Ids not repeated", function () {
            var anAnyRepeated = false;
            var someIds = { };
            for( var anInIdx=0; anInIdx < 1000000; anInIdx++) {
                var anId = aM_identifier_svce.fReserveId();
                var anIdCount = someIds[ anId];
                if( anIdCount) {
                    anAnyRepeated = true;
                    break;
                }
                else {
                    someIds[ anId] = 1;
                }
            }
            
            expect( anAnyRepeated).toBe( false);
        });
        
    });
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_behavioral_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_identifier_svce_behavioral_test",
        [
            "m_identifier_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

