/*
 * recordingpolicy_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131801
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






/// <reference path="src/identifying/recordingpolicy_ng_type.js"/>
"use strict";


var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recordingpolicy_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "recordingpolicy_type-structural-test";
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aRecordingPolicy_title = "RecordingPolicy-Title-test";
    
        var aM_identifier_svce = null;
    
        var aM_recordingpolicy_type = null;
        var aRecordingPolicy       = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecordingPolicyType_) {
                aM_identifier_svce      = _IdentifierSvce_;
                aM_recordingpolicy_type = _RecordingPolicyType_;
                aRecordingPolicy = new aM_recordingpolicy_type.RecordingPolicy_Constructor( aRecordingPolicy_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce      = require('../../../src/identifying/identifier_svce');
            aM_recordingpolicy_type = require('../../../src/identifying/recordingpolicy_type');
            aRecordingPolicy = new aM_recordingpolicy_type.RecordingPolicy_Constructor( aRecordingPolicy_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce      = theSS_identifier_svce;
            aM_recordingpolicy_type = theSS_recordingpolicy_type;
            aRecordingPolicy = new aM_recordingpolicy_type.RecordingPolicy_Constructor( aRecordingPolicy_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recordingpolicy_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_type"));
            aRecordingPolicy = new aM_recordingpolicy_type.RecordingPolicy_Constructor( aRecordingPolicy_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        
       
        it("Has module defined", function () {
            expect( aRecordingPolicy._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aRecordingPolicy._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName recordingpolicy_type", function () {
            expect( aRecordingPolicy._v_Module.ModuleName).toBe( "recordingpolicy_type");
        });
    
        it("Has module ModulePackages identifying", function () {
            expect( aRecordingPolicy._v_Module.ModulePackages).toBe( "identifying");
        });
    
        it("Has module ModuleFullName identifying.recordingpolicy_type", function () {
            expect( aRecordingPolicy._v_Module.ModuleFullName).toBe( "identifying/recordingpolicy_type");
        });
    
        it("Has module RecordingPolicy_Prototype defined", function () {
            expect( aRecordingPolicy._v_Module.RecordingPolicy_Prototype).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicy_Prototype not null", function () {
            expect( aRecordingPolicy._v_Module.RecordingPolicy_Prototype).not.toBeNull( null);
        });
    
        it("Has module RecordingPolicy_Constructor defined", function () {
            expect( aRecordingPolicy._v_Module.RecordingPolicy_Constructor).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicy_Constructor not null", function () {
            expect( aRecordingPolicy._v_Module.RecordingPolicy_Constructor).not.toBeNull( null);
        });
    
        it("Has module RecordingPolicy_SuperPrototypeConstructor defined", function () {
            expect( aRecordingPolicy._v_Module.RecordingPolicy_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module RecordingPolicy_SuperPrototypeConstructor not null", function () {
            expect( aRecordingPolicy._v_Module.RecordingPolicy_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aRecordingPolicy._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module RecordingPolicy_Prototype", function () {
            expect( aRecordingPolicy._v_Prototype).toBe( aRecordingPolicy._v_Module.RecordingPolicy_Prototype);
        });
    
        it("Has _v_Prototype_RecordingPolicy defined", function () {
            expect( aRecordingPolicy._v_Prototype_RecordingPolicy).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_RecordingPolicy module RecordingPolicy_Prototype", function () {
            expect( aRecordingPolicy._v_Prototype).toBe( aRecordingPolicy._v_Module.RecordingPolicy_Prototype);
        });
    
    
    
        it("Has _v_Type RecordingPolicy", function () {
            expect( aRecordingPolicy._v_Type).toBe( "RecordingPolicy");
        });
    
        it("Has title RecordingPolicy_DefaultName", function () {
            expect( aRecordingPolicy._v_Title).toBe( aRecordingPolicy_title);
        });
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aRecordingPolicy.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aRecordingPolicy.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aRecordingPolicy.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aRecordingPolicy.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aRecordingPolicy.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aRecordingPolicy.fIdentifyingJSON().type).toBe( aRecordingPolicy._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aRecordingPolicy.fIdentifyingJSON().id).toBe( aRecordingPolicy._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aRecordingPolicy.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aRecordingPolicy.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aRecordingPolicy.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecordingPolicy.fIdentifyingString()).toBe( JSON.stringify( aRecordingPolicy.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aRecordingPolicy.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleJSON().type).toBe( aRecordingPolicy._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleJSON().id).toBe( aRecordingPolicy._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleJSON().title).toBe( aRecordingPolicy._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aRecordingPolicy.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecordingPolicy.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecordingPolicy.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aRecordingPolicy.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aRecordingPolicy.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( aRecordingPolicy.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aRecordingPolicy.fToResultJSON().type).toBe( aRecordingPolicy._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aRecordingPolicy.fToResultJSON().id).toBe( aRecordingPolicy._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aRecordingPolicy.fToResultJSON().title).toBe( aRecordingPolicy._v_Title);
        });
    
    
    
    
    
    
        it("Has pRelease defined", function () {
            expect( aRecordingPolicy.pRelease).not.toBeUndefined();
        });
    
        it("Has pRelease typeof function", function () {
            expect( typeof aRecordingPolicy.pRelease).toBe( "function");
        });
    
    
    
    
    
    
        it("Has fRecorder defined", function () {
            expect( aRecordingPolicy.fRecorder).not.toBeUndefined();
        });
    
        it("Has fRecorder typeof function", function () {
            expect( typeof aRecordingPolicy.fRecorder).toBe( "function");
        });
    
    
        it("Has pSetRecorder defined", function () {
            expect( aRecordingPolicy.pSetRecorder).not.toBeUndefined();
        });
    
        it("Has pSetRecorder typeof function", function () {
            expect( typeof aRecordingPolicy.pSetRecorder).toBe( "function");
        });
    
    
    
        var someFunctionNames = [
            "fRecorder",
            "pSetRecorder",
            "fRecordRecord",
            "pRelease"
        ];
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aRecordingPolicy[ aFunctionName_here];
                        
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
    define( "m_recordingpolicy_type_structural_test",
        [
            "m_identifier_svce",
            "m_recordingpolicy_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

