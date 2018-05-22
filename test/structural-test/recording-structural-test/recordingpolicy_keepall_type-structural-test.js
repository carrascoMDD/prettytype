/*
 * recordingpolicy_keepall_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131808
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






/// <reference path="src/recording/recordingpolicy_keepall_ng_type.js"/>
"use strict";


var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recordingpolicy_keepall_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "recordingpolicy_keepall_type-structural-test";
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aRecordingPolicyKeepAll_title = "RecordingPolicyKeepAll-Title-test";
        
        var aM_identifier_svce = null;
        
        var aM_recordingpolicy_keepall_type = null;
        var aRecordingPolicyKeepAll       = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecordingPolicyKeepAllType_) {
                aM_identifier_svce      = _IdentifierSvce_;
                aM_recordingpolicy_keepall_type = _RecordingPolicyKeepAllType_;
                aRecordingPolicyKeepAll = new aM_recordingpolicy_keepall_type.RecordingPolicyKeepAll_Constructor( aRecordingPolicyKeepAll_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce      = require('../../../src/identifying/identifier_svce');
            aM_recordingpolicy_keepall_type = require('../../../src/identifying/recordingpolicy_keepall_type');
            aRecordingPolicyKeepAll = new aM_recordingpolicy_keepall_type.RecordingPolicyKeepAll_Constructor( aRecordingPolicyKeepAll_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce      = theSS_identifier_svce;
            aM_recordingpolicy_keepall_type = theSS_recordingpolicy_keepall_type;
            aRecordingPolicyKeepAll = new aM_recordingpolicy_keepall_type.RecordingPolicyKeepAll_Constructor( aRecordingPolicyKeepAll_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recordingpolicy_keepall_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepall_type"));
            aRecordingPolicyKeepAll = new aM_recordingpolicy_keepall_type.RecordingPolicyKeepAll_Constructor( aRecordingPolicyKeepAll_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        
        
        
        
        it("Has module defined", function () {
            expect( aRecordingPolicyKeepAll._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aRecordingPolicyKeepAll._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName recordingpolicy_keepall_type", function () {
            expect( aRecordingPolicyKeepAll._v_Module.ModuleName).toBe( "recordingpolicy_keepall_type");
        });
    
        it("Has module ModulePackages identifying", function () {
            expect( aRecordingPolicyKeepAll._v_Module.ModulePackages).toBe( "identifying");
        });
    
        it("Has module ModuleFullName identifying.recordingpolicy_keepall_type", function () {
            expect( aRecordingPolicyKeepAll._v_Module.ModuleFullName).toBe( "identifying/recordingpolicy_keepall_type");
        });
    
        it("Has module RecordingPolicyKeepAll_Prototype defined", function () {
            expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicyKeepAll_Prototype not null", function () {
            expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype).not.toBeNull( null);
        });
    
        it("Has module RecordingPolicyKeepAll_Constructor defined", function () {
            expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Constructor).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicyKeepAll_Constructor not null", function () {
            expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Constructor).not.toBeNull( null);
        });
    
        it("Has module RecordingPolicyKeepAll_SuperPrototypeConstructor defined", function () {
            expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicyKeepAll_SuperPrototypeConstructor not null", function () {
            expect( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aRecordingPolicyKeepAll._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module RecordingPolicyKeepAll_Prototype", function () {
            expect( aRecordingPolicyKeepAll._v_Prototype).toBe( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype);
        });
    
        it("Has _v_Prototype_RecordingPolicy defined", function () {
            expect( aRecordingPolicyKeepAll._v_Prototype_RecordingPolicy).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_RecordingPolicy module RecordingPolicyKeepAll_Prototype", function () {
            expect( aRecordingPolicyKeepAll._v_Prototype).toBe( aRecordingPolicyKeepAll._v_Module.RecordingPolicyKeepAll_Prototype);
        });
    
    
    
        it("Has _v_Type RecordingPolicy", function () {
            expect( aRecordingPolicyKeepAll._v_Type).toBe( "RecordingPolicyKeepAll");
        });
    
        it("Has title RecordingPolicyKeepAll_DefaultName", function () {
            expect( aRecordingPolicyKeepAll._v_Title).toBe( aRecordingPolicyKeepAll_title);
        });
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aRecordingPolicyKeepAll.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aRecordingPolicyKeepAll.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aRecordingPolicyKeepAll.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingJSON().type).toBe( aRecordingPolicyKeepAll._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingJSON().id).toBe( aRecordingPolicyKeepAll._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aRecordingPolicyKeepAll.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingString()).toBe( JSON.stringify( aRecordingPolicyKeepAll.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON().type).toBe( aRecordingPolicyKeepAll._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON().id).toBe( aRecordingPolicyKeepAll._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON().title).toBe( aRecordingPolicyKeepAll._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aRecordingPolicyKeepAll.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecordingPolicyKeepAll.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecordingPolicyKeepAll.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aRecordingPolicyKeepAll.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aRecordingPolicyKeepAll.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( aRecordingPolicyKeepAll.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aRecordingPolicyKeepAll.fToResultJSON().type).toBe( aRecordingPolicyKeepAll._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aRecordingPolicyKeepAll.fToResultJSON().id).toBe( aRecordingPolicyKeepAll._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aRecordingPolicyKeepAll.fToResultJSON().title).toBe( aRecordingPolicyKeepAll._v_Title);
        });
    
    
    
    
      
    
        var someFunctionNames = [
            "fRecorder",
            "pSetRecorder",
            "fRecordRecord",
            "pRelease"
        ].concat([
            "pPruneRecords",
            "pSetMustKeepRecords",
            "fMustKeepRecords"
        ]);
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aRecordingPolicyKeepAll[ aFunctionName_here];
                        
                        expect( typeof aFunction).toBe( "function");
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
    define( "m_recordingpolicy_keepall_type_structural_test",
        [
            "m_identifier_svce",
            "m_recordingpolicy_keepall_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

