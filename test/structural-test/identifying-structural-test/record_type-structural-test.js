/*
 * record_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241630
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






/// <reference path="src/identifying/record_type.js"/>
"use strict";




var aTest_spec = (function( theSS_record_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "record_type-structural-test";
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
    
        var aRecorder_Dummy   = {};
        var aRecordId_Dummy   = "Record-test-id";
        var anInstance_Dummy  = {};
        var aStep_Dummy       = "Record-test-step";
        var anEventKind_Dummy = "Record-test-step";
        var aData_Dummy       = {};
        var aReason_Dummy     = {};
        var aDetail_Dummy     = {};
        
        var aRecord_type = null;
        var aRecord      = null;
    
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "typesRegistry", "modbootTypes", "identifyingTypes"));
    
            beforeEach( inject(function( _RecordType_){
                aRecord_type = _RecordType_;
                aRecord = new aRecord_type.Record_Constructor(
                    aRecorder_Dummy,
                    aRecordId_Dummy,
                    anInstance_Dummy,
                    aStep_Dummy,
                    anEventKind_Dummy,
                    aData_Dummy,
                    aReason_Dummy,
                    aDetail_Dummy
                );
            }));
    
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aRecord_type = require('../../../src/identifying/record_type');
    
            aRecord = new aRecord_type.Record_Constructor(
                aRecorder_Dummy,
                aRecordId_Dummy,
                anInstance_Dummy,
                aStep_Dummy,
                anEventKind_Dummy,
                aData_Dummy,
                aReason_Dummy,
                aDetail_Dummy
            );
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aRecord_type = theSS_record_type;
    
            aRecord = new aRecord_type.Record_Constructor(
                aRecorder_Dummy,
                aRecordId_Dummy,
                anInstance_Dummy,
                aStep_Dummy,
                anEventKind_Dummy,
                aData_Dummy,
                aReason_Dummy,
                aDetail_Dummy
            );
        }
  





    
    
        it("Record structure", function () {
            expect( aRecord._v_Module).not.toBeUndefined();
            expect( aRecord._v_Module).not.toBeNull( null);
            expect( aRecord._v_Module.ModuleName).toBe( "record_type");
            expect( aRecord._v_Module.ModulePackages).toBe( "identifying");
            expect( aRecord._v_Module.ModuleFullName).toBe( "identifying/record_type");
            expect( aRecord._v_Module.Record_Prototype).not.toBeUndefined();
            expect( aRecord._v_Module.Record_Prototype).not.toBeNull( null);
            expect( aRecord._v_Module.Record_Constructor).not.toBeUndefined();
            expect( aRecord._v_Module.Record_Constructor).not.toBeNull( null);
            expect( aRecord._v_Module.Record_SuperPrototypeConstructor).not.toBeUndefined();
            expect( aRecord._v_Module.Record_SuperPrototypeConstructor).not.toBeNull( null);
            expect( aRecord._v_Prototype).not.toBeUndefined();
            expect( aRecord._v_Prototype).toBe( aRecord._v_Module.Record_Prototype);
            expect( aRecord._v_Prototype_Record).not.toBeUndefined();
            expect( aRecord._v_Prototype).toBe( aRecord._v_Module.Record_Prototype);
            expect( aRecord._v_Type).toBe( "Record");
            expect( aRecord._v_Recorder).toBe( aRecorder_Dummy);
            expect( aRecord._v_RecordId).toBe( aRecordId_Dummy);
            expect( aRecord._v_Instance).toBe( anInstance_Dummy);
            expect( aRecord._v_Step).toBe( aStep_Dummy);
            expect( aRecord._v_EventKind).toBe( anEventKind_Dummy);
            expect( aRecord._v_Data).toBe( aData_Dummy);
            expect( aRecord._v_Reason).toBe( aReason_Dummy);
            expect( aRecord._v_Detail).toBe( aDetail_Dummy);
            expect( aRecord.fFullTypeNameString).not.toBeUndefined();
            expect( typeof aRecord.fFullTypeNameString).toBe( "function");
            expect( aRecord.fIdentifyingJSON).not.toBeUndefined();
            expect( typeof aRecord.fIdentifyingJSON).toBe( "function");
            expect( aRecord.fIdentifyingJSON()).not.toBeNull();
            expect( aRecord.fIdentifyingJSON().id).toBe( aRecord._v_Id);
            expect( aRecord.fIdentifyingString).not.toBeUndefined();
            expect( typeof aRecord.fIdentifyingString).toBe( "function");
            expect( aRecord.fIdentifyingString()).not.toBeNull();
            expect( aRecord.fIdentifyingString()).toBe( JSON.stringify( aRecord.fIdentifyingJSON()));
            expect( aRecord.fIdentifyingWithTitleJSON).not.toBeUndefined();
            expect( typeof aRecord.fIdentifyingWithTitleJSON).toBe( "function");
            expect( aRecord.fIdentifyingWithTitleJSON()).not.toBeNull();
            expect( aRecord.fIdentifyingWithTitleJSON().id).toBe( aRecord._v_Id);
            expect( aRecord.fIdentifyingWithTitleString).not.toBeUndefined();
            expect( typeof aRecord.fIdentifyingWithTitleString).toBe( "function");
            expect( aRecord.fIdentifyingWithTitleString()).not.toBeNull();
            expect( aRecord.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecord.fIdentifyingWithTitleJSON()));
        });
    
    
        var someFunctionNames = [
            "fToResultJSON",
            "fConvertReasonToJSON",
            "fAsReasonChain",
            "fAsJSONable"
        ];
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aRecord[ aFunctionName_here];
                    
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
    define( "m_record_type_structural_test",
        [
            "m_record_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}










