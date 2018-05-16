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
                "typesRegistry",
                "modbootTypes",
                "decoratesystemprototypes",
                "stacktrace",
                "exceptiondetails",
                "consoleSvce",
                "traversals",
                "checks",
                "identifyingTypes",
                "eventKinds_Common",
                "commonTypes",
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
        
        
        
        it("Module is not null", function () {
            expect( aM_index).not.toBeNull( null);
        });
    
        it("Has ModuleName index", function () {
            expect( aM_index.ModuleName).toBe( "index");
        });
    
        it("Has ModulePackages index", function () {
            expect( aM_index.ModulePackages).toBe( "");
        });
    
        it("Has ModuleFullName common.index", function () {
            expect( aM_index.ModuleFullName).toBe( "/index");
        });
        
        
    
        var someModuleMemberKeys = [
            "modboot",
            "decoratesystemprototypes_svce",
            "exceptiondetails_svce",
            "console_svce",
            "traversals",
            "checks",
            "identifying",
            "eventkinds",
            "common",
            "m_typesregistry",
            "m_overrider_type",
            "m_overrider_svce",
            "m_decoratesystemprototypes_svce",
            "m_exceptiondetails_svce",
            "m_console_svce",
            "m_traversals",
            "m_checks",
            "m_identifier_type",
            "m_identifier_svce",
            "m_record_type",
            "m_recordingpolicy_type",
            "m_recordingpolicy_keepall_type",
            "m_recordingpolicy_keepsome_type",
            "m_recordingpolicy_keeprecent_type",
            "m_dumpingpolicy_type",
            "m_dumpingpolicy_filterkinds_type",
            "m_dumpingpolicy_triggerkinds_type",
            "m_recorder_type",
            "m_recorder_svce",
            "m_eventkinds_common",
            "m_common_type",
            "TypesRegistrySvce",
            "OverriderType",
            "OverriderSvce",
            "DecorateSystemPrototypesSvce",
            "ExceptionDetailsSvce",
            "ConsoleSvce",
            "Traversals",
            "Checks",
            "IdentifierType",
            "IdentifierSvce",
            "RecordType",
            "RecordingPolicyType",
            "RecordingPolicyKeepAllType",
            "RecordingPolicyKeepSomeType",
            "RecordingPolicyKeepRecentType",
            "DumpingPolicyType",
            "DumpingPolicyFilterKindsType",
            "DumpingPolicyTriggerKindsType",
            "RecorderType",
            "RecorderSvce",
            "EventKinds_Common",
            "CommonType"
        ];
        
        var aNumModuleMemberKeys = someModuleMemberKeys.length;
        for( var aModuleMemberKeyIdx=0; aModuleMemberKeyIdx < aNumModuleMemberKeys; aModuleMemberKeyIdx++) {
            var aModuleMemberKey = someModuleMemberKeys[ aModuleMemberKeyIdx];
            if( aModuleMemberKey) {
                (function() {
                    var aModuleMemberKey_here = aModuleMemberKey;
        
                    it("Has member " + aModuleMemberKey_here + " defined", function () {
                        var aModuleMember = aM_index[ aModuleMemberKey_here];

                        expect( typeof aModuleMember).toBe( "object");
                        expect( aModuleMember).not.toBeNull();
                    });
                })();
            }
        }
        
    });
});


if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_index_structural_test",
        [
            "m_index"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



