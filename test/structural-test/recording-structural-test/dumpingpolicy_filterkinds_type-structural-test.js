/*
 * dumpingpolicy_filterkinds_type-structural-test.js
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




/// <reference path="src/recording/dumpingpolicy_filterkinds_ng_type.js"/>
"use strict";



var aTest_spec = (function( theSS_identifier_svce,
                            theSS_dumpingpolicy_filterkinds_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "dumpingpolicy_filterkinds_type-structural-test";
    var ModulePackages = "test/structural-test/dumpingpolicy-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TestName       = ModuleName + "_" + ModulePackages + "_" + ComponentName + "_test";
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( TestName, function () {
        
        var aM_identifier_svce = null;
        var aM_dumpingpolicy_filterkinds_type = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "identifying", "recording"));
            
            beforeEach( inject(function( _identifier_svce_, _dumpingpolicy_filterkinds_type_) {
                aM_identifier_svce = _identifier_svce_;
                aM_dumpingpolicy_filterkinds_type = _dumpingpolicy_filterkinds_type_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce = require('../../../src/identifying/identifier_svce');
            aM_dumpingpolicy_filterkinds_type = require('../../../src/recording/dumpingpolicy_filterkinds_type');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_dumpingpolicy_filterkinds_type = theSS_dumpingpolicy_filterkinds_type;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce      = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_dumpingpolicy_filterkinds_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_filterkinds_type"));
        }
        
        
        
        
        
        
        it("Module is defined", function () {
            expect( aM_dumpingpolicy_filterkinds_type).not.toBeUndefined();
        });
        
        
        it("Has module meta definitions", function () {
            expect( aM_dumpingpolicy_filterkinds_type._v_Kind).toBe( "module");
            expect( aM_dumpingpolicy_filterkinds_type.ComponentName).toBe( "prettytype");
            expect( aM_dumpingpolicy_filterkinds_type.ModuleName).toBe( "dumpingpolicy_filterkinds_type");
            expect( aM_dumpingpolicy_filterkinds_type.ModulePackages).toBe( "recording");
            expect( aM_dumpingpolicy_filterkinds_type.ModuleFullName).toBe( "recording/dumpingpolicy_filterkinds_type");
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
                        var aGeneralFunction = aM_dumpingpolicy_filterkinds_type[ aGeneralFunctionName_here];
                        expect( typeof aGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someSpecificFunctionNames = [
            "DumpingPolicyFilterKinds_ProtoInstancer",
            "DumpingPolicyFilterKinds_ProtoDefinerOn",
            "DumpingPolicyFilterKinds_ProtoFactory",
            "DumpingPolicyFilterKinds_Constructor",
            "DumpingPolicyFilterKinds_SuperPrototypeConstructor",
            "DumpingPolicyFilterKinds_CreatePrototypeSlotsOn",
            "DumpingPolicyFilterKinds_CreateInstanceSlotsOn",
            "DumpingPolicy_ProtoInstancer",
            "DumpingPolicy_ProtoDefinerOn",
            "DumpingPolicy_ProtoFactory",
            "DumpingPolicy_Constructor",
            "DumpingPolicy_SuperPrototypeConstructor",
            "DumpingPolicy_CreatePrototypeSlotsOn",
            "DumpingPolicy_CreateInstanceSlotsOn"
        ];
        var aNumSpecificFunctionNames = someSpecificFunctionNames.length;
        for( var aSpecificFunctionNameIdx=0; aSpecificFunctionNameIdx < aNumSpecificFunctionNames; aSpecificFunctionNameIdx++) {
            var aSpecificFunctionName = someSpecificFunctionNames[ aSpecificFunctionNameIdx];
            if( aSpecificFunctionName) {
                (function() {
                    var aSpecificFunctionName_here = aSpecificFunctionName;
                    it("Module exposes specific definition function " + aSpecificFunctionName_here, function () {
                        var aSpecificFunction = aM_dumpingpolicy_filterkinds_type[ aSpecificFunctionName_here];
                        expect( typeof aSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someConstantNames = [
            "DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE",
            "EVENTSSETNOTFORCONSOLE",
            "EVENTKINDS_NOTFORCONSOLE"
        ];
        var aNumConstantNames = someConstantNames.length;
        for( var aModuleConstantNameIdx=0; aModuleConstantNameIdx < aNumConstantNames; aModuleConstantNameIdx++) {
            var aModuleConstantName = someConstantNames[ aModuleConstantNameIdx];
            if( aModuleConstantName) {
                (function() {
                    var aModuleConstantName_here = aModuleConstantName;
                    it("Module exposes constant " + aModuleConstantName_here, function () {
                        var aModuleConstant = aM_dumpingpolicy_filterkinds_type[ aModuleConstantName_here];
                        expect( aModuleConstant).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        var somePrototypeNames = [
            "Prototype",
            "DumpingPolicyFilterKinds_Prototype"
        ];
        var aNumPrototypeNames = somePrototypeNames.length;
        for( var aPrototypeNameIdx=0; aPrototypeNameIdx < aNumPrototypeNames; aPrototypeNameIdx++) {
            var aPrototypeName = somePrototypeNames[ aPrototypeNameIdx];
            if( aPrototypeName) {
                (function() {
                    var aPrototypeName_here = aPrototypeName;
                    it("Module exposes prototype object with name " + aPrototypeName_here, function () {
                        var anPrototype = aM_dumpingpolicy_filterkinds_type[ aPrototypeName_here];
                        expect( anPrototype).not.toBeUndefined();
                        expect( anPrototype).not.toBeNull( null);
                    });
                })()
            }
        }
        
        
        it("Has same prototype object under generic and specific names", function () {
            expect( aM_dumpingpolicy_filterkinds_type.Prototype).toBe( aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Prototype);
        });
        
        
        
        it("Prototype has meta definitions", function () {
            var aPrototype = aM_dumpingpolicy_filterkinds_type.Prototype;
            
            expect( aPrototype._v_Kind).toBe( "prototype");
            expect( aPrototype._v_SuperPrototype).not.toBe( null);
            expect( aPrototype._v_Type).toBe( "DumpingPolicyFilterKinds");
            expect( aPrototype._v_Prototype_DumpingPolicyFilterKinds).toBe( aPrototype);
            expect( aPrototype._v_Module).toBe( aM_dumpingpolicy_filterkinds_type);
        });
        
        
        for( var aPrototypeConstantNameIdx=0; aPrototypeConstantNameIdx < aNumConstantNames; aPrototypeConstantNameIdx++) {
            var aPrototypeConstantName = someConstantNames[ aPrototypeConstantNameIdx];
            if( aPrototypeConstantName) {
                (function() {
                    var aPrototypeConstantName_here = aPrototypeConstantName;
                    it("Prototype also has module constant named " + aPrototypeConstantName_here, function () {
                        var aPrototype = aM_dumpingpolicy_filterkinds_type.Prototype;
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
                        var aPrototype = aM_dumpingpolicy_filterkinds_type.Prototype;
                        var aPrototypeGeneralFunction = aPrototype[ aPrototypeGeneralFunctionName_here];
                        expect( typeof aPrototypeGeneralFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var somePrototypeSlotNames = [
            "_v_EventKindsNotConsole"
        ];
        var aNumPrototypeSlotNames = somePrototypeSlotNames.length;
        for( var aPrototypeSlotNameIdx=0; aPrototypeSlotNameIdx < aNumPrototypeSlotNames; aPrototypeSlotNameIdx++) {
            var aPrototypeSlotName = somePrototypeSlotNames[ aPrototypeSlotNameIdx];
            if( aPrototypeSlotName) {
                (function() {
                    var aPrototypeSlotName_here = aPrototypeSlotName;
                    it("Prototype has slot with name " + aPrototypeSlotName_here, function () {
                        var aPrototype = aM_dumpingpolicy_filterkinds_type.Prototype;
                        var anPrototypeSlot = aPrototype[ aPrototypeSlotName_here];
                        expect( anPrototypeSlot).not.toBeUndefined();
                    });
                })()
            }
        }
        
        
        var somePrototypeSpecificFunctionNames = [
            "_pInit_DumpingPolicyFilterKinds",
            "fSetEventKindsNotForConsole_inPrototype",
            "fFewerEventKindsNotForConsole_inPrototype",
            "fMoreEventKindsNotForConsole_inPrototype",
            "fSetEventKindsNotForConsole",
            "fFewerEventKindsNotForConsole",
            "fMoreEventKindsNotForConsole",
            "fMustDumpRecord",
            "fEventKindsNotForConsole"
            
        ].concat( [
            "_pInit_DumpingPolicy",
            "fConsoleService",
            "fRecorder",
            "pSetRecorder",
            "pSetMayDumpRecords",
            "fMayDumpRecords",
            "fMustDumpRecord",
            "pDumpRecord"
        ]);
        var aNumPrototypeSpecificFunctionNames = somePrototypeSpecificFunctionNames.length;
        for( var aPrototypeSpecificFunctionNameIdx=0; aPrototypeSpecificFunctionNameIdx < aNumPrototypeSpecificFunctionNames; aPrototypeSpecificFunctionNameIdx++) {
            var aPrototypeSpecificFunctionName = somePrototypeSpecificFunctionNames[ aPrototypeSpecificFunctionNameIdx];
            if( aPrototypeSpecificFunctionName) {
                (function() {
                    var aPrototypeSpecificFunctionName_here = aPrototypeSpecificFunctionName;
                    it("Prototype has specific function " + aPrototypeSpecificFunctionName_here + " defined", function () {
                        var aPrototype = aM_dumpingpolicy_filterkinds_type.Prototype;
                        var aPrototypeSpecificFunction = aPrototype[ aPrototypeSpecificFunctionName_here];
                        expect( typeof aPrototypeSpecificFunction).toBe( "function");
                    });
                })()
            }
        }
        
        
        var someInstanceSlotNames = [
        ].concat( [
            "_v_Identifier",
            "_v_Id",
            "_v_Recorder",
            "_v_Title"
        ]);
        var aNumInstanceSlotNames = someInstanceSlotNames.length;
        for( var aInstanceSlotNameIdx=0; aInstanceSlotNameIdx < aNumInstanceSlotNames; aInstanceSlotNameIdx++) {
            var aInstanceSlotName = someInstanceSlotNames[ aInstanceSlotNameIdx];
            if( aInstanceSlotName) {
                (function() {
                    var aInstanceSlotName_here = aInstanceSlotName;
                    it("Instance has slot with name " + aInstanceSlotName_here, function () {
                        var anInstance = new aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Constructor(
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
    define( "dumpingpolicy_filterkinds_type_structural_test",
        [
            "identifier_svce",
            "dumpingpolicy_filterkinds_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}




