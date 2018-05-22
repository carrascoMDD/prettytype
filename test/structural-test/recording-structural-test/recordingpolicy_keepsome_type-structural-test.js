/*
 * recordingpolicy_keepsome_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610181748
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






/// <reference path="src/identifying/recordingpolicy_keepsome_ng_type.js"/>
"use strict";
    
var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recordingpolicy_keepsome_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "recordingpolicy_keepsome_type-structural-test";
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aRecordingPolicyKeepSome_title = "RecordingPolicyKeepSome-Title-test";
        
        var aM_identifier_svce = null;
        
        var aM_recordingpolicy_keepsome_type = null;
        var aRecordingPolicyKeepSome       = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecordingPolicyKeepSomeType_) {
                aM_identifier_svce      = _IdentifierSvce_;
                aM_recordingpolicy_keepsome_type = _RecordingPolicyKeepSomeType_;
                aRecordingPolicyKeepSome = new aM_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_Constructor( aRecordingPolicyKeepSome_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce               = require('../../../src/identifying/identifier_svce');
            aM_recordingpolicy_keepsome_type = require('../../../src/identifying/recordingpolicy_keepsome_type');
            aRecordingPolicyKeepSome = new aM_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_Constructor( aRecordingPolicyKeepSome_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce      = theSS_identifier_svce;
            aM_recordingpolicy_keepsome_type = theSS_recordingpolicy_keepsome_type;
            aRecordingPolicyKeepSome = new aM_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_Constructor( aRecordingPolicyKeepSome_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recordingpolicy_keepsome_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepsome_type"));
            aRecordingPolicyKeepSome = new aM_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_Constructor( aRecordingPolicyKeepSome_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
            
            
            
        
        it("Has module defined", function () {
            expect( aRecordingPolicyKeepSome._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aRecordingPolicyKeepSome._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName recordingpolicy_keepsome_type", function () {
            expect( aRecordingPolicyKeepSome._v_Module.ModuleName).toBe( "recordingpolicy_keepsome_type");
        });
    
        it("Has module ModulePackages identifying", function () {
            expect( aRecordingPolicyKeepSome._v_Module.ModulePackages).toBe( "identifying");
        });
    
        it("Has module ModuleFullName identifying.recordingpolicy_keepsome_type", function () {
            expect( aRecordingPolicyKeepSome._v_Module.ModuleFullName).toBe( "identifying/recordingpolicy_keepsome_type");
        });
    
        it("Has module RecordingPolicyKeepSome_Prototype defined", function () {
            expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicyKeepSome_Prototype not null", function () {
            expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype).not.toBeNull( null);
        });
    
        it("Has module RecordingPolicyKeepSome_Constructor defined", function () {
            expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Constructor).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicyKeepSome_Constructor not null", function () {
            expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Constructor).not.toBeNull( null);
        });
    
        it("Has module RecordingPolicyKeepSome_SuperPrototypeConstructor defined", function () {
            expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicyKeepSome_SuperPrototypeConstructor not null", function () {
            expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aRecordingPolicyKeepSome._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module RecordingPolicyKeepSome_Prototype", function () {
            expect( aRecordingPolicyKeepSome._v_Prototype).toBe( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype);
        });
    
        it("Has _v_Prototype_RecordingPolicy defined", function () {
            expect( aRecordingPolicyKeepSome._v_Prototype_RecordingPolicy).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_RecordingPolicy module RecordingPolicyKeepSome_Prototype", function () {
            expect( aRecordingPolicyKeepSome._v_Prototype).toBe( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype);
        });
    
    
    
        it("Has _v_Type RecordingPolicy", function () {
            expect( aRecordingPolicyKeepSome._v_Type).toBe( "RecordingPolicyKeepSome");
        });
    
        it("Has title RecordingPolicyKeepSome_DefaultName", function () {
            expect( aRecordingPolicyKeepSome._v_Title).toBe( aRecordingPolicyKeepSome_title);
        });
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aRecordingPolicyKeepSome.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aRecordingPolicyKeepSome.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aRecordingPolicyKeepSome.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingJSON().type).toBe( aRecordingPolicyKeepSome._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingJSON().id).toBe( aRecordingPolicyKeepSome._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aRecordingPolicyKeepSome.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingString()).toBe( JSON.stringify( aRecordingPolicyKeepSome.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON().type).toBe( aRecordingPolicyKeepSome._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON().id).toBe( aRecordingPolicyKeepSome._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON().title).toBe( aRecordingPolicyKeepSome._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aRecordingPolicyKeepSome.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aRecordingPolicyKeepSome.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aRecordingPolicyKeepSome.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( aRecordingPolicyKeepSome.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aRecordingPolicyKeepSome.fToResultJSON().type).toBe( aRecordingPolicyKeepSome._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aRecordingPolicyKeepSome.fToResultJSON().id).toBe( aRecordingPolicyKeepSome._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aRecordingPolicyKeepSome.fToResultJSON().title).toBe( aRecordingPolicyKeepSome._v_Title);
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
        ]).concat([
            "pSetMustKeepRecordsMaxNumber",
            "fMustKeepRecordsMaxNumber"
        ]);
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aRecordingPolicyKeepSome[ aFunctionName_here];
                        
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
    define( "m_recordingpolicy_keepsome_type_structural_test",
        [
            "m_identifier_svce",
            "m_recordingpolicy_keepsome_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

