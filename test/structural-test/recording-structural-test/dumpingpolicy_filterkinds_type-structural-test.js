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
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aDumpingPolicyFilterKinds_title = "DumpingPolicyFilterKinds-Title-test";
        
        var aM_identifier_svce = null;
        
        var aM_dumpingpolicy_filterkinds_type = null;
        var aDumpingPolicyFilterKinds       = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _DumpingPolicyFilterKindsType_) {
                aM_identifier_svce      = _IdentifierSvce_;
                aM_dumpingpolicy_filterkinds_type = _DumpingPolicyFilterKindsType_;
                aDumpingPolicyFilterKinds = new aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Constructor( aDumpingPolicyFilterKinds_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce     = require('../../../src/identifying/identifier_svce');
            aM_dumpingpolicy_filterkinds_type = require('../../../src/identifying/dumpingpolicy_filterkinds_type');
            aDumpingPolicyFilterKinds = new aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Constructor( aDumpingPolicyFilterKinds_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce    = theSS_identifier_svce;
            aM_dumpingpolicy_filterkinds_type = theSS_dumpingpolicy_filterkinds_type;
            aDumpingPolicyFilterKinds = new aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Constructor( aDumpingPolicyFilterKinds_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_identifier_svce = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"));
            aM_dumpingpolicy_filterkinds_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_filterkinds_type"));
            aDumpingPolicyFilterKinds = new aM_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Constructor( aDumpingPolicyFilterKinds_title, aM_identifier_svce, null /* theRecorder its absence should not affect this structure test */);
        }
        
        
        
        
        
        it("Has module defined", function () {
            expect( aDumpingPolicyFilterKinds._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aDumpingPolicyFilterKinds._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName dumpingpolicy_filterkinds_type", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.ModuleName).toBe( "dumpingpolicy_filterkinds_type");
        });
    
        it("Has module ModulePackages identifying", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.ModulePackages).toBe( "identifying");
        });
    
        it("Has module ModuleFullName identifying.dumpingpolicy_filterkinds_type", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.ModuleFullName).toBe( "identifying/dumpingpolicy_filterkinds_type");
        });
    
        it("Has module DumpingPolicyFilterKinds_Prototype defined", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype).not.toBeUndefined();
        });
    
        it("Has module DumpingPolicyFilterKinds_Prototype not null", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype).not.toBeNull( null);
        });
    
        it("Has module DumpingPolicyFilterKinds_Constructor defined", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Constructor).not.toBeUndefined();
        });
    
        it("Has module DumpingPolicyFilterKinds_Constructor not null", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Constructor).not.toBeNull( null);
        });
    
        it("Has module DumpingPolicyFilterKinds_SuperPrototypeConstructor defined", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module DumpingPolicyFilterKinds_SuperPrototypeConstructor not null", function () {
            expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aDumpingPolicyFilterKinds._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module DumpingPolicyFilterKinds_Prototype", function () {
            expect( aDumpingPolicyFilterKinds._v_Prototype).toBe( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype);
        });
    
        it("Has _v_Prototype_DumpingPolicyFilterKinds defined", function () {
            expect( aDumpingPolicyFilterKinds._v_Prototype_DumpingPolicyFilterKinds).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_DumpingPolicyFilterKinds module DumpingPolicyFilterKinds_Prototype", function () {
            expect( aDumpingPolicyFilterKinds._v_Prototype).toBe( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype);
        });
    
    
    
        it("Has _v_Type DumpingPolicyFilterKinds", function () {
            expect( aDumpingPolicyFilterKinds._v_Type).toBe( "DumpingPolicyFilterKinds");
        });
    
        it("Has title DumpingPolicyFilterKinds_DefaultName", function () {
            expect( aDumpingPolicyFilterKinds._v_Title).toBe( aDumpingPolicyFilterKinds_title);
        });
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aDumpingPolicyFilterKinds.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aDumpingPolicyFilterKinds.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aDumpingPolicyFilterKinds.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aDumpingPolicyFilterKinds.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingString()).toBe( JSON.stringify( aDumpingPolicyFilterKinds.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().title).toBe( aDumpingPolicyFilterKinds._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aDumpingPolicyFilterKinds.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString()).toBe( JSON.stringify( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aDumpingPolicyFilterKinds.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aDumpingPolicyFilterKinds.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( aDumpingPolicyFilterKinds.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aDumpingPolicyFilterKinds.fToResultJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aDumpingPolicyFilterKinds.fToResultJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aDumpingPolicyFilterKinds.fToResultJSON().title).toBe( aDumpingPolicyFilterKinds._v_Title);
        });
    
    
    
    
    
    
    
        var someFunctionNames = [
            "fConsoleService",
            "pDumpRecord",
            "pSetMayDumpRecords",
            "fMayDumpRecords",
            "fMustDumpRecord",
            "pRelease"
        ].concat( [
            "fEventKindsNotForConsole",
            "fSetEventKindsNotForConsole",
            "fFewerEventKindsNotForConsole",
            "fMoreEventKindsNotForConsole",
            "fSetEventKindsNotForConsole_inPrototype",
            "fFewerEventKindsNotForConsole_inPrototype",
            "fMoreEventKindsNotForConsole_inPrototype"

        ]);
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aDumpingPolicyFilterKinds[ aFunctionName_here];
                        
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
    define( "m_dumpingpolicy_filterkinds_type_structural_test",
        [
            "m_identifier_svce",
            "m_dumpingpolicy_filterkinds_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

