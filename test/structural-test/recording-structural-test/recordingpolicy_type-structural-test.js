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






/// <reference path="src/recording/recordingpolicy_ng_type.js"/>
"use strict";


var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recordingpolicy_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "recordingpolicy_type-structural-test";
    var ModulePackages = "test/structural-test/recording-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_identifier_svce = null;
        var aM_recordingpolicy_type = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "identifying", "recording"));
            
            beforeEach( inject(function( _identifier_svce_, _recordingpolicy_type_) {
                aM_identifier_svce = _identifier_svce_;
                aM_recordingpolicy_type = _recordingpolicy_type_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce = require('../../../src/identifying/identifier_svce');
            aM_recordingpolicy_type = require('../../../src/recording/recordingpolicy_type');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recordingpolicy_type = theSS_recordingpolicy_type;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce      = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_recordingpolicy_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_type"));
        }
        
        
        
        
        
        
        it("Module is defined", function () {
            expect( aM_recordingpolicy_type).not.toBeUndefined();
        });
        
        
        it("Has module meta definitions", function () {
            expect( aM_recordingpolicy_type._v_Kind).toBe( "module");
            expect( aM_recordingpolicy_type.ComponentName).toBe( "prettytype");
            expect( aM_recordingpolicy_type.ModuleName).toBe( "recordingpolicy_type");
            expect( aM_recordingpolicy_type.ModulePackages).toBe( "recording");
            expect( aM_recordingpolicy_type.ModuleFullName).toBe( "recording/recordingpolicy_type");
        });
        
        
        var someGeneralFunctionNames = [
            "InitFromModuleVariations",
            "InitFromModuleConstants",
            "InitModuleGlobalsOn",
            "ProtoInstancer",
            "ProtoDefinerOn",
            "ProtoFactory",
            "Constructor",
            "SuperPrototypeConstructor",
            "CreatePrototypeSlotsOn",
            "CreateInstanceSlotsOn"
        ];
        var aNumGeneralFunctionNames = someGeneralFunctionNames.length;
        for( var aGeneralFunctionNameIdx=0; aGeneralFunctionNameIdx < aNumGeneralFunctionNames; aGeneralFunctionNameIdx++) {
            var aGeneralFunctionName = someGeneralFunctionNames[ aGeneralFunctionNameIdx];
            if( aGeneralFunctionName) {
                (function() {
                    var aGeneralFunctionName_here = aGeneralFunctionName;
                    it("Module exposes general definition function " + aGeneralFunctionName_here, function () {
                        var aGeneralFunction = aM_recordingpolicy_type[ aGeneralFunctionName_here];
                        expect( typeof aGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someSpecificFunctionNames = [
            "RecordingPolicy_ProtoInstancer",
            "RecordingPolicy_ProtoDefinerOn",
            "RecordingPolicy_ProtoFactory",
            "RecordingPolicy_Constructor",
            "RecordingPolicy_SuperPrototypeConstructor",
            "RecordingPolicy_CreatePrototypeSlotsOn",
            "RecordingPolicy_CreateInstanceSlotsOn"
        ];
        var aNumSpecificFunctionNames = someSpecificFunctionNames.length;
        for( var aSpecificFunctionNameIdx=0; aSpecificFunctionNameIdx < aNumSpecificFunctionNames; aSpecificFunctionNameIdx++) {
            var aSpecificFunctionName = someSpecificFunctionNames[ aSpecificFunctionNameIdx];
            if( aSpecificFunctionName) {
                (function() {
                    var aSpecificFunctionName_here = aSpecificFunctionName;
                    it("Module exposes specific definition function " + aSpecificFunctionName_here, function () {
                        var aSpecificFunction = aM_recordingpolicy_type[ aSpecificFunctionName_here];
                        expect( typeof aSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someConstantNames = [
            "RECORDINGPOLICY_DEFAULTTITLE"
        ];
        var aNumConstantNames = someConstantNames.length;
        for( var aModuleConstantNameIdx=0; aModuleConstantNameIdx < aNumConstantNames; aModuleConstantNameIdx++) {
            var aModuleConstantName = someConstantNames[ aModuleConstantNameIdx];
            if( aModuleConstantName) {
                (function() {
                    var aModuleConstantName_here = aModuleConstantName;
                    it("Module exposes constant " + aModuleConstantName_here, function () {
                        var aModuleConstant = aM_recordingpolicy_type[ aModuleConstantName_here];
                        expect( aModuleConstant).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        var somePrototypeNames = [
            "Prototype",
            "RecordingPolicy_Prototype"
        ];
        var aNumPrototypeNames = somePrototypeNames.length;
        for( var aPrototypeNameIdx=0; aPrototypeNameIdx < aNumPrototypeNames; aPrototypeNameIdx++) {
            var aPrototypeName = somePrototypeNames[ aPrototypeNameIdx];
            if( aPrototypeName) {
                (function() {
                    var aPrototypeName_here = aPrototypeName;
                    it("Module exposes prototype object with name " + aPrototypeName_here, function () {
                        var anPrototype = aM_recordingpolicy_type[ aPrototypeName_here];
                        expect( anPrototype).not.toBeUndefined();
                        expect( anPrototype).not.toBeNull( null);
                    });
                })()
            }
        }
        
        
        it("Has same prototype object under generic and specific names", function () {
            expect( aM_recordingpolicy_type.Prototype).toBe( aM_recordingpolicy_type.RecordingPolicy_Prototype);
        });
        
        
        
        it("Prototype has meta definitions", function () {
            var aPrototype = aM_recordingpolicy_type.Prototype;
            
            expect( aPrototype._v_Kind).toBe( "prototype");
            expect( aPrototype._v_SuperPrototype).toBe( null);
            expect( aPrototype._v_Type).toBe( "RecordingPolicy");
            expect( aPrototype._v_Prototype_RecordingPolicy).toBe( aPrototype);
            expect( aPrototype._v_Module).toBe( aM_recordingpolicy_type);
        });
        
        
        for( var aPrototypeConstantNameIdx=0; aPrototypeConstantNameIdx < aNumConstantNames; aPrototypeConstantNameIdx++) {
            var aPrototypeConstantName = someConstantNames[ aPrototypeConstantNameIdx];
            if( aPrototypeConstantName) {
                (function() {
                    var aPrototypeConstantName_here = aPrototypeConstantName;
                    it("Prototype also has module constant named " + aPrototypeConstantName_here, function () {
                        var aPrototype = aM_recordingpolicy_type.Prototype;
                        var aPrototypeConstant = aPrototype[ aPrototypeConstantName_here];
                        expect( aPrototypeConstant).not.toBeUndefined();
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
                        var aPrototype = aM_recordingpolicy_type.Prototype;
                        var aPrototypeGeneralFunction = aPrototype[ aPrototypeGeneralFunctionName_here];
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
                        var aPrototype = aM_recordingpolicy_type.Prototype;
                        var anPrototypeSlot = aPrototype[ aPrototypeSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        var somePrototypeSpecificFunctionNames = [
            "_pInit_RecordingPolicy",
            "fRecorder",
            "pSetRecorder",
            "fRecordRecord"
        ];
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aPrototypeSpecificFunctionNameIdx=0; aPrototypeSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aPrototypeSpecificFunctionNameIdx++) {
            var aPrototypeSpecificFunctionName = somePrototypeSpecificFunctionNames[ aPrototypeSpecificFunctionNameIdx];
            if( aPrototypeSpecificFunctionName) {
                (function() {
                    var aPrototypeSpecificFunctionName_here = aPrototypeSpecificFunctionName;
                    it("Prototype has specific function " + aPrototypeSpecificFunctionName_here + " defined", function () {
                        var aPrototype = aM_recordingpolicy_type.Prototype;
                        var aPrototypeSpecificFunction = aPrototype[ aPrototypeSpecificFunctionName_here];
                        expect( typeof aPrototypeSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someInstanceSlotNames = [
            "_v_Identifier",
            "_v_Id",
            "_v_Recorder",
            "_v_Title"
        ];
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Instance has slot with name " + aInstanceSlotName_here, function () {
                        var anInstance = new aM_recordingpolicy_type.RecordingPolicy_Constructor(
                            "test_instance__someInstanceSlotNames__" + TestName,
                            aM_identifier_svce,
                            {} /* Should suffice for this test */);
                        var anInstanceSlot = anInstance[ aInstanceSlotName_here];
                        expect( anInstanceSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        
        
    });
});

if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    define( "recordingpolicy_type_structural_test",
        [
            "identifier_svce",
            "recordingpolicy_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}




