/*
 * common-record-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131914
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



/// <reference path="src/common/common_svce.js"/>
"use strict";



var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recorder_svce,
                            theSS_common_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common-record-behavioral-test";
    var ModulePackages = "test/behavioral-test/common-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
    
    
        var aCommon_title = "CommonType-Title-test";
    
        var aM_identifier_svce = null;
        var aM_recorder_svce   = null;
        var aM_common_type     = null;
    
    
        var aBeforeRecordMillis = new Date().getMilliseconds();
    
    
        var aMethodName = ModuleFullName + "__theMethodName";
        var anEventKind = ModuleFullName + "__theEventKind";
        var aData       = ModuleFullName + "__theData";
        var aReason     = ModuleFullName + "__theReason";
        var aDetail     = ModuleFullName + "__theDetail";
    
    
    
        var aMethodName2 = ModuleFullName + "__theMethodName2";
        var anEventKind2 = ModuleFullName + "__theEventKind2";
        var aData2       = ModuleFullName + "__theData2";
        var aReason2     = ModuleFullName + "__theReason2";
        var aDetail2     = ModuleFullName + "__theDetail2";
    
    
        var aCommon    = null;
    
        var aRecord = null;
        var otherRecord = null;
    
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach(  module('identifying', 'recording', 'common'));
        
            beforeEach( inject(function( _identifier_svce_, _recorder_svce_, _common_type_) {
                aM_identifier_svce = _identifier_svce_;
                aM_recorder_svce    = _recorder_svce_;
                aM_common_type     = _common_type_;
                
                aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
                aRecord     = aCommon.fRecord( aMethodName,  anEventKind,  aData,  aReason,  aDetail);
                otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce   = require('../../../src/identifying/identifier_svce');
            aM_recorder_svce     = require('../../../src/recording/recorder_svce');
            aM_common_type       = require('../../../src/common/common_type');
            
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
            aRecord     = aCommon.fRecord( aMethodName,  anEventKind,  aData,  aReason,  aDetail);
            otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recorder_svce   = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
            aRecord     = aCommon.fRecord( aMethodName,  anEventKind,  aData,  aReason,  aDetail);
            otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recorder_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "recorder_svce"));
            aM_common_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "common", "common_type"));
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recorder_svce);
    
            aRecord     = aCommon.fRecord( aMethodName,  anEventKind,  aData,  aReason,  aDetail);
            otherRecord = aCommon.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);
        }
    
    
    
        it("Has function fRecord defined", function () {
    
            expect( aCommon.fRecord).not.toBeUndefined();
            expect( typeof aCommon.fRecord).toBe( "function");
        });
        
        
        it("Has recorded two records with the expected structure and has recorded supplied values", function () {
            
            expect( aRecord).not.toBeUndefined();
            expect( aRecord).not.toBeNull();
            expect( typeof aRecord).toBe( "object");
            expect( typeof aRecord._v_Timestamp).toBe( "number");
            expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
            expect( aRecord._v_RecordId).not.toBeNull();
            expect( aRecord._v_Instance).toBe( aCommon);
            expect( aRecord._v_Step).toBe( aMethodName);
            expect( aRecord._v_EventKind).toBe( anEventKind);
            expect( aRecord._v_Data).toBe( aData);
            expect( aRecord._v_Reason).toBe( aReason);
            expect( aRecord._v_Detail).toBe( aDetail);
            
            expect( otherRecord).not.toBeUndefined();
            expect( otherRecord).not.toBeNull();
            expect( otherRecord._v_RecordId).not.toBeNull();
            expect( otherRecord._v_RecordId > aRecord._v_RecordId).not.toBeNull();
            expect( otherRecord._v_Instance).toBe( aCommon);
            expect( otherRecord._v_Step).toBe( aMethodName2);
            expect( otherRecord._v_EventKind).toBe( anEventKind2);
            expect( otherRecord._v_Data).toBe( aData2);
            expect( otherRecord._v_Reason).toBe( aReason2);
            expect( otherRecord._v_Detail).toBe( aDetail2);
        });
        
    });
    
});



if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "common_record_behavioral_test",
        [
            "identifier_svce",
            "recorder_svce",
            "common_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}



