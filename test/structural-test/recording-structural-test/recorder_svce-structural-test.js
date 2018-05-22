/*
 * recorder_svce-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601242042
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




/// <reference path="src/recording/recorder_svce.js"/>
"use strict";




var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recorder_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "recorder_svce-structural-test";
    var ModulePackages = "test/structural-test/recording-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
    
        var aM_recorder_svce = null;
    
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "identifying", "recording"));
            
            beforeEach( inject(function( _recorder_svce_) {
                aM_recorder_svce = _recorder_svce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_recorder_svce = require('../../../src/recording/recorder_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_recorder_svce = theSS_recorder_svce;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_recorder_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "recorder_svce"));
        }
    
    
    
    
        it("Singleton is defined", function () {
            expect( aM_recorder_svce).not.toBeUndefined();
        });
    
    
        it("Singleton has module meta definitions", function () {
            expect( aM_recorder_svce.ComponentName).toBe( "prettytype");
            expect( aM_recorder_svce.ModuleName).toBe( "recorder_svce");
            expect( aM_recorder_svce.ModulePackages).toBe( "recording");
            expect( aM_recorder_svce.ModuleFullName).toBe( "recording/recorder_svce");
            expect( aM_recorder_svce.SingletonName).toBe( "Recorder_Service");
        });
    
    
        it("Singleton has meta definitions ", function () {
            expect( aM_recorder_svce._v_Kind).toBe( "singleton");
            expect( aM_recorder_svce._v_Prototype).not.toBeUndefined();
            expect( aM_recorder_svce._v_SuperPrototype).toBe( null);
            expect( aM_recorder_svce._v_Type).toBe( "Recorder");
            expect( aM_recorder_svce._v_Prototype_Recorder).not.toBeUndefined();
            expect( aM_recorder_svce._v_Module).not.toBeNull( null);
            expect( aM_recorder_svce._v_Module).not.toBeUndefined();
        });
    
    
        var someConstantNames = [
            "RECORDER_DEFAULTTITLE"
        ];
        var aNumConstantNames = someConstantNames.length;
        for( var aModuleConstantNameIdx=0; aModuleConstantNameIdx < aNumConstantNames; aModuleConstantNameIdx++) {
            var aModuleConstantName = someConstantNames[ aModuleConstantNameIdx];
            if( aModuleConstantName) {
                (function() {
                    var aModuleConstantName_here = aModuleConstantName;
                    it("Module exposes constant " + aModuleConstantName_here, function () {
                        var aModuleConstant = aM_recorder_svce[ aModuleConstantName_here];
                        expect( aModuleConstant).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        
        var somePrototypeGeneralFunctionNames = [
            "_pInit",
            "fFullTypeNameString",
            "fIdentifyingJSON",
            "fIdentifyingString",
            "fIdentifyingWithTitleJSON",
            "fIdentifyingWithTitleString",
            "fToResultJSON"
        ];
        var aNumPrototypeGeneralFunctionNames = somePrototypeGeneralFunctionNames.length;
        for( var aPrototypeGeneralFunctionNameIdx=0; aPrototypeGeneralFunctionNameIdx < aNumPrototypeGeneralFunctionNames; aPrototypeGeneralFunctionNameIdx++) {
            var aPrototypeGeneralFunctionName = somePrototypeGeneralFunctionNames[ aPrototypeGeneralFunctionNameIdx];
            if( aPrototypeGeneralFunctionName) {
                (function() {
                    var aPrototypeGeneralFunctionName_here = aPrototypeGeneralFunctionName;
                    
                    it("Prototype has general function " + aPrototypeGeneralFunctionName_here + " defined", function () {
                        var aPrototypeGeneralFunction = aM_recorder_svce[ aPrototypeGeneralFunctionName_here];
                        expect( typeof aPrototypeGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var somePrototypeSlotNames = [
            /* None */
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aPrototypeSlotNameIdx=0; aPrototypeSlotNameIdx < aNumPrototypeSlotNames; aPrototypeSlotNameIdx++) {
            var aPrototypeSlotName = somePrototypeSlotNames[ aPrototypeSlotNameIdx];
            if( aPrototypeSlotName) {
                (function() {
                    var aPrototypeSlotName_here = aPrototypeSlotName;
                    it("Prototype has slot with name " + aPrototypeSlotName_here, function () {
                        var anPrototypeSlot = aM_recorder_svce[ aPrototypeSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        var somePrototypeSpecificFunctionNames = [
            "_pInit_Recorder",
            "fEventsToResultJSON",
            "fRecordingPolicy",
            "pSetRecordingPolicy",
            "fDumpingPolicy",
            "pSetDumpingPolicy",
            "fCreateAndRegisterRecord",
            "pLogRecord",
            "pKeepRecord",
            "fKeptRecords",
            "fKeptRecordsSlice",
            "pClearKeptRecords",
            "fLastKeptRecordPointer",
            "pSetRecordPointer",
            "pClearRecordPointer",
            "fGetRecordPointerNamed",
            "pSubstractFromAllRecordPointers",
            "pDiscardRecordsToMaxNumber",
            "pDiscardRecordsOlderThan"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aPrototypeSpecificFunctionNameIdx=0; aPrototypeSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aPrototypeSpecificFunctionNameIdx++) {
            var aPrototypeSpecificFunctionName = somePrototypeSpecificFunctionNames[ aPrototypeSpecificFunctionNameIdx];
            if( aPrototypeSpecificFunctionName) {
                (function() {
                    var aPrototypeSpecificFunctionName_here = aPrototypeSpecificFunctionName;
                    it("Prototype has specific function " + aPrototypeSpecificFunctionName_here + " defined", function () {
                        var aPrototypeSpecificFunction = aM_recorder_svce[ aPrototypeSpecificFunctionName_here];
                        expect( typeof aPrototypeSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someInstanceSlotNames = [
            "_v_Identifier",
            "_v_Id",
            "_v_Title",
            "_v_Records",
            "_v_RecordPointersByName",
            "_v_RecordsIdentifier",
            "_v_RecordingPolicy",
            "_v_DumpingPolicy"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Instance has slot with name " + aInstanceSlotName_here, function () {
                        var anInstanceSlot = aM_recorder_svce[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        
        
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "recorder_svce_structural_test",
        [
            "identifier_svce",
            "recorder_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

