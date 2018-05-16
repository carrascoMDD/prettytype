/*
 * common_type-eventkinds_common-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610141428
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





/// <reference path="src/common/common_ng_type.js"/>
"use strict";





var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recorder_svce,
                            theSS_common_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common_type-eventkinds_common-structural-test";
    var ModulePackages = "test/structural-test/common-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aCommon_title = "CommonType-Title-test";
        
        var aM_identifier_svce = null;
        var aM_recorder_svce    = null;
        var aM_common_type     = null;
        var aCommon            = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_svce    = _RecorderSvce_;
                aM_common_type     = _CommonType_;
                aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce     = require('../../../src/identifying/identifier_svce');
            aM_recorder_svce     = require('../../../src/identifying/recorder_svce');
            aM_common_type         = require('../../../src/common/common_type');
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_svce    = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recorder_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"));
            aM_common_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "common", "common_type"));
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
        }        
        
            it("Has module defined", function () {
            expect( aCommon._v_Module).not.toBeUndefined();
        });
        
        it("Has module not null", function () {
            expect( aCommon._v_Module).not.toBeNull( null);
        });
        
        it("Has module ModuleName withprominstr_type", function () {
            expect( aCommon._v_Module.ModuleName).toBe( "common_type");
        });
        
        it("Has module ModulePackages common", function () {
            expect( aCommon._v_Module.ModulePackages).toBe( "common");
        });
        
        it("Has module ModuleFullName common.withprominstr_type", function () {
            expect( aCommon._v_Module.ModuleFullName).toBe( "common/common_type");
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
                        var aMember = aCommon[ aMemberName_here];
                    
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
    define( "m_common_type_eventkinds_common_structural_test",
        [
            "m_identifier_svce",
            "m_recorder_svce",
            "m_common_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

