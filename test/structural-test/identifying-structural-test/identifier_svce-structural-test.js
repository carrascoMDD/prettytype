/*
 * common_type-commoneventkinds-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241620
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




/// <reference path="src/identifying/identifier_type.js"/>
"use strict";



var aTest_spec = (function( theSS_identifier_svce) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "identifier_svce-structural-test";
    var ModulePackages = "test/structural-test/identifying-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aM_identifier_svce = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'identifyingTypes'));
            
            beforeEach( inject(function( _IdentifierSvce_) {
                aM_identifier_svce = _IdentifierSvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_identifier_svce = require('../../../src/identifying/identifier_svce');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_identifier_svce = theSS_identifier_svce;
        }
        
    

    
    
        it("Has module defined", function () {
            expect( aM_identifier_svce._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( aM_identifier_svce._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName identifier_type", function () {
            expect( aM_identifier_svce._v_Module.ModuleName).toBe( "identifier_type");
        });
    
        it("Has module ModulePackages identifying", function () {
            expect( aM_identifier_svce._v_Module.ModulePackages).toBe( "identifying");
        });
    
        it("Has module ModuleFullName identifying.identifier_type", function () {
            expect( aM_identifier_svce._v_Module.ModuleFullName).toBe( "identifying/identifier_type");
        });
    
        it("Has module Identifier_Prototype defined", function () {
            expect( aM_identifier_svce._v_Module.Identifier_Prototype).not.toBeUndefined();
        });
    
        it("Has module Identifier_Prototype not null", function () {
            expect( aM_identifier_svce._v_Module.Identifier_Prototype).not.toBeNull( null);
        });
    
        it("Has module Identifier_Constructor defined", function () {
            expect( aM_identifier_svce._v_Module.Identifier_Constructor).not.toBeUndefined();
        });
    
        it("Has module Identifier_Constructor not null", function () {
            expect( aM_identifier_svce._v_Module.Identifier_Constructor).not.toBeNull( null);
        });
    
        it("Has module Identifier_SuperPrototypeConstructor defined", function () {
            expect( aM_identifier_svce._v_Module.Identifier_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module Identifier_SuperPrototypeConstructor not null", function () {
            expect( aM_identifier_svce._v_Module.Identifier_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( aM_identifier_svce._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module Identifier_Prototype", function () {
            expect( aM_identifier_svce._v_Prototype).toBe( aM_identifier_svce._v_Module.Identifier_Prototype);
        });
    
        it("Has _v_Prototype_Identifier defined", function () {
            expect( aM_identifier_svce._v_Prototype_Identifier).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_Identifier module Identifier_Prototype", function () {
            expect( aM_identifier_svce._v_Prototype).toBe( aM_identifier_svce._v_Module.Identifier_Prototype);
        });
    
    
    
        it("Has _v_Type Identifier", function () {
            expect( aM_identifier_svce._v_Type).toBe( "Identifier");
        });
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( aM_identifier_svce.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof aM_identifier_svce.fFullTypeNameString).toBe( "function");
        });
    
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( aM_identifier_svce.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof aM_identifier_svce.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( aM_identifier_svce.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( aM_identifier_svce.fIdentifyingJSON().type).toBe( aM_identifier_svce._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( aM_identifier_svce.fIdentifyingJSON().id).toBe( aM_identifier_svce._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( aM_identifier_svce.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof aM_identifier_svce.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( aM_identifier_svce.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aM_identifier_svce.fIdentifyingString()).toBe( JSON.stringify( aM_identifier_svce.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof aM_identifier_svce.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleJSON().type).toBe( aM_identifier_svce._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleJSON().id).toBe( aM_identifier_svce._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleJSON().title).toBe( aM_identifier_svce._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof aM_identifier_svce.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( aM_identifier_svce.fIdentifyingWithTitleString()).toBe( JSON.stringify( aM_identifier_svce.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( aM_identifier_svce.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof aM_identifier_svce.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( aM_identifier_svce.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( aM_identifier_svce.fToResultJSON().type).toBe( aM_identifier_svce._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( aM_identifier_svce.fToResultJSON().id).toBe( aM_identifier_svce._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( aM_identifier_svce.fToResultJSON().title).toBe( aM_identifier_svce._v_Title);
        });
    
    
    
    
        var someFunctionNames = [
            "fReserveId"
        ];
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aM_identifier_svce[ aFunctionName_here];
                    
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
    define( "m_identifier_svce_structural_test",
        [
            "m_identifier_svce"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

