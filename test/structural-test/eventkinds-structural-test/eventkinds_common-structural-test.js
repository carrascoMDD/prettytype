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
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aEventKinds_Common = null;
        
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module(  'typesRegistry', 'modbootTypes', 'eventKinds_Common'));
            
            beforeEach( inject(function( _EventKinds_Common_) {
                aEventKinds_Common = _EventKinds_Common_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aEventKinds_Common = require('../../../src/eventkinds/eventkinds_common');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aEventKinds_Common = theSS_eventkinds_common;
        }
        
        
        
        
        it("Module is not null", function () {
            expect( aEventKinds_Common).not.toBeNull( null);
        });
        
        it("Has ModuleName eventkinds_common", function () {
            expect( aEventKinds_Common.ModuleName).toBe( "eventkinds_common");
        });
        
        it("Has ModulePackages eventkinds", function () {
            expect( aEventKinds_Common.ModulePackages).toBe( "eventkinds");
        });
        
        it("Has ModuleFullName eventkinds.eventkinds_common", function () {
            expect( aEventKinds_Common.ModuleFullName).toBe( "eventkinds/eventkinds_common");
        });
        
        
        
        var someMemberNames = [
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
        
        var aNumMemberNames = someMemberNames.length;
        for( var aMemberNameIdx=0; aMemberNameIdx < aNumMemberNames; aMemberNameIdx++) {
            var aMemberName = someMemberNames[ aMemberNameIdx];
            if( aMemberName) {
                (function() {
                    var aMemberName_here = aMemberName;
                    
                    it("Has member " + aMemberName_here + " defined as an object", function () {
                        var aMember = aEventKinds_Common[ aMemberName_here];
                        
                        expect( typeof aMember).toBe( "object");
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
    define( "m_eventkinds_common_structural_test",
        [
            "m_eventkinds_common"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



