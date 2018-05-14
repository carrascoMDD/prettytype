/*
 * common_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610141428
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





/// <reference path="src/common/common_ng_type.js"/>
"use strict";





var aTest_spec = (function( theSS_identifier_svce,
                            theSS_recorder_svce,
                            theSS_common_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "common_type-structural-test";
    var ModulePackages = "test/structural-test/common-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
    
        var aCommon_title = "CommonType-Title-test";
    
        var aM_identifier_svce = null;
        var aM_recordersvce    = null;
        var aM_common_type     = null;
        var aCommon            = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes', 'commonTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_) {
                aM_identifier_svce = _IdentifierSvce_;
                aM_recordersvce    = _RecorderSvce_;
                aM_common_type     = _CommonType_;
                aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recordersvce);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce     = require('../../../src/identifying/identifier_svce');
            aM_recordersvce     = require('../../../src/identifying/recorder_svce');
            aM_common_type         = require('../../../src/common/common_type');
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recordersvce);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
            aM_recordersvce    = theSS_recorder_svce;
            aM_common_type     = theSS_common_type;
            aCommon = new aM_common_type.Common_Constructor( aCommon_title, aM_identifier_svce, aM_recordersvce);
        }
        
       

        it("Has module defined", function () {
            expect( aCommon._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aCommon._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName withprominstr_type", function () {
            expect( aCommon._v_Module.ModuleName).toBe( "common_type");
        });
    
        it("Has module ModulePackages common", function () {
            expect( aCommon._v_Module.ModulePackages).toBe( "common");
        });
    
        it("Has module ModuleFullName common.withprominstr_type", function () {
            expect( aCommon._v_Module.ModuleFullName).toBe( "common/common_type");
        });
    
        it("Has module Common_Prototype defined", function () {
            expect( aCommon._v_Module.Common_Prototype).not.toBeUndefined();
        });
    
        it("Has module Common_Prototype not null", function () {
            expect( aCommon._v_Module.Common_Prototype).not.toBeNull( null);
        });
    
        it("Has module Common_Constructor defined", function () {
            expect( aCommon._v_Module.Common_Constructor).not.toBeUndefined();
        });
    
        it("Has module Common_Constructor not null", function () {
            expect( aCommon._v_Module.Common_Constructor).not.toBeNull( null);
        });
    
        it("Has module Common_SuperPrototypeConstructor defined", function () {
            expect( aCommon._v_Module.Common_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module Common_SuperPrototypeConstructor not null", function () {
            expect( aCommon._v_Module.Common_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aCommon._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module Common_Prototype", function () {
            expect( aCommon._v_Prototype).toBe( aCommon._v_Module.Common_Prototype);
        });
    
        it("Has _v_Prototype_Common defined", function () {
            expect( aCommon._v_Prototype_Common).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_Common module Common_Prototype", function () {
            expect( aCommon._v_Prototype).toBe( aCommon._v_Module.Common_Prototype);
        });
    
    
    
        it("Has _v_Type Common", function () {
            expect( aCommon._v_Type).toBe( "Common");
        });
    
        it("Has title Common_DefaultName", function () {
            expect( aCommon._v_Title).toBe( aCommon_title);
        });
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aCommon.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aCommon.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aCommon.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aCommon.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aCommon.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aCommon.fIdentifyingJSON().type).toBe( aCommon._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aCommon.fIdentifyingJSON().id).toBe( aCommon._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aCommon.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aCommon.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aCommon.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aCommon.fIdentifyingString()).toBe( JSON.stringify( aCommon.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aCommon.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aCommon.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aCommon.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aCommon.fIdentifyingWithTitleJSON().type).toBe( aCommon._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aCommon.fIdentifyingWithTitleJSON().id).toBe( aCommon._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aCommon.fIdentifyingWithTitleJSON().title).toBe( aCommon._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aCommon.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aCommon.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aCommon.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aCommon.fIdentifyingWithTitleString()).toBe( JSON.stringify( aCommon.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aCommon.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aCommon.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON() not null", function () {
            expect( aCommon.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aCommon.fToResultJSON().type).toBe( aCommon._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aCommon.fToResultJSON().id).toBe( aCommon._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aCommon.fToResultJSON().title).toBe( aCommon._v_Title);
        });
    
    
    
    
    
        var someFunctionNames = [
            "fRecord",
            "pLogRecord",
            "fFirstDiff"
        ];
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aCommon[ aFunctionName_here];
                    
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
    define( "m_common_type_structural_test",
        [
            "m_identifier_svce",
            "m_recorder_svce",
            "m_common_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

