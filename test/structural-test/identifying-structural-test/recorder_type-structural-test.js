/*
 * recorder_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241640
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






/// <reference path="src/identifying/recorder_ng_type.js"/>
"use strict";



var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recorder_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "recorder_type-structural-test";
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aRecorder_title = "Recorder-Title-test";
        
        var aM_identifier_svce = null;
        
        var aM_recorder_type = null;
        var aRecorder        = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderType_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recorder_type   = _RecorderType_;
                aRecorder = new aM_recorder_type.Recorder_Constructor( aRecorder_title, aM_identifier_svce);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce = require('../../../src/identifying/identifier_svce');
            aM_recorder_type   = require('../../../src/identifying/recorder_type');
            aRecorder = new aM_recorder_type.Recorder_Constructor( aRecorder_title, aM_identifier_svce);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce  = theSS_identifier_svce;
            aM_recorder_type    = theSS_recorder_type;
            aRecorder = new aM_recorder_type.Recorder_Constructor( aRecorder_title, aM_identifier_svce);
        }
        



    
        it("Has module defined", function () {
            expect( aRecorder._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aRecorder._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName recorder_type", function () {
            expect( aRecorder._v_Module.ModuleName).toBe( "recorder_type");
        });
    
        it("Has module ModulePackages identifying", function () {
            expect( aRecorder._v_Module.ModulePackages).toBe( "identifying");
        });
    
        it("Has module ModuleFullName identifying.recorder_type", function () {
            expect( aRecorder._v_Module.ModuleFullName).toBe( "identifying/recorder_type");
        });
    
        it("Has module Recorder_Prototype defined", function () {
            expect( aRecorder._v_Module.Recorder_Prototype).not.toBeUndefined();
        });
    
        it("Has module Recorder_Prototype not null", function () {
            expect( aRecorder._v_Module.Recorder_Prototype).not.toBeNull( null);
        });
    
        it("Has module Recorder_Constructor defined", function () {
            expect( aRecorder._v_Module.Recorder_Constructor).not.toBeUndefined();
        });
    
        it("Has module Recorder_Constructor not null", function () {
            expect( aRecorder._v_Module.Recorder_Constructor).not.toBeNull( null);
        });
    
        it("Has module Recorder_SuperPrototypeConstructor defined", function () {
            expect( aRecorder._v_Module.Recorder_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module Recorder_SuperPrototypeConstructor not null", function () {
            expect( aRecorder._v_Module.Recorder_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aRecorder._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module Recorder_Prototype", function () {
            expect( aRecorder._v_Prototype).toBe( aRecorder._v_Module.Recorder_Prototype);
        });
    
        it("Has _v_Prototype_Recorder defined", function () {
            expect( aRecorder._v_Prototype_Recorder).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_Recorder module Recorder_Prototype", function () {
            expect( aRecorder._v_Prototype).toBe( aRecorder._v_Module.Recorder_Prototype);
        });
    
    
    
        it("Has _v_Type Recorder", function () {
            expect( aRecorder._v_Type).toBe( "Recorder");
        });
    
        it("Has title Recorder_DefaultName", function () {
            expect( aRecorder._v_Title).toBe( aRecorder_title);
        });
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aRecorder.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aRecorder.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aRecorder.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aRecorder.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aRecorder.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aRecorder.fIdentifyingJSON().type).toBe( aRecorder._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aRecorder.fIdentifyingJSON().id).toBe( aRecorder._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aRecorder.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aRecorder.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aRecorder.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecorder.fIdentifyingString()).toBe( JSON.stringify( aRecorder.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aRecorder.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aRecorder.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aRecorder.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aRecorder.fIdentifyingWithTitleJSON().type).toBe( aRecorder._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aRecorder.fIdentifyingWithTitleJSON().id).toBe( aRecorder._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aRecorder.fIdentifyingWithTitleJSON().title).toBe( aRecorder._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aRecorder.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aRecorder.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aRecorder.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aRecorder.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecorder.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aRecorder.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aRecorder.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( aRecorder.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aRecorder.fToResultJSON().type).toBe( aRecorder._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aRecorder.fToResultJSON().id).toBe( aRecorder._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aRecorder.fToResultJSON().title).toBe( aRecorder._v_Title);
        });
    
    
    
    
    
        var someFunctionNames = [
            "fCreateAndRegisterRecord",
            "fEventsToResultJSON",
            "pLogRecord",
            "pKeepRecord",
            "fKeptRecords",
            "pClearKeptRecords",
            "pDiscardRecordsToMaxNumber",
            "pDiscardRecordsOlderThan",
            "pSetRecordPointer",
            "pClearRecordPointer"
        ];
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aRecorder[ aFunctionName_here];
                        
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
    define( "m_recorder_type_structural_test",
        [
            "m_identifier_svce",
            "m_recorder_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

