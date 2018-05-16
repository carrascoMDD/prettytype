/*
 * overrider_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601261930
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


/// <reference path="src/common/overrider_type.js"/>
"use strict";


var aTest_spec = (function( theSS_overrider_type) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "overrider_type-structural-test";
    var ModulePackages = "test/structural-test/modboot-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aOverrider_title = "OverriderType-Title-test";
        var aM_overrider_type = null;
        var anOverrider       = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( "typesRegistry", "modbootTypes"));
            
            beforeEach( inject(function( _OverriderType_) {
                aM_overrider_type = _OverriderType_;
                anOverrider       = new aM_overrider_type.Overrider_Constructor( aOverrider_title);
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_overrider_type = require('../../../src/modboot/overrider_type');
            anOverrider       = new aM_overrider_type.Overrider_Constructor( aOverrider_title);
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_overrider_type = theSS_overrider_type;
            anOverrider       = new aM_overrider_type.Overrider_Constructor( aOverrider_title);
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_overrider_type = nomod.resolve( nomod.fComputeFullName( "prettytype", "modboot", "overrider_type"));
            anOverrider       = new aM_overrider_type.Overrider_Constructor( aOverrider_title);
        }
        
        it("Has module defined", function () {
            expect( anOverrider._v_Module).not.toBeUndefined();
        });
    
        it("Has module not null", function () {
            expect( anOverrider._v_Module).not.toBeNull( null);
        });
    
        it("Has module ModuleName typesregistry", function () {
            expect( anOverrider._v_Module.ModuleName).toBe( "overrider_type");
        });
    
        it("Has module ModulePackages modboot", function () {
            expect( anOverrider._v_Module.ModulePackages).toBe( "modboot");
        });
    
        it("Has module ModuleFullName common.typesregistry", function () {
            expect( anOverrider._v_Module.ModuleFullName).toBe( "modboot/overrider_type");
        });
    
        it("Has module Overrider_Prototype defined", function () {
            expect( anOverrider._v_Module.Overrider_Prototype).not.toBeUndefined();
        });
    
        it("Has module Overrider_Prototype not null", function () {
            expect( anOverrider._v_Module.Overrider_Prototype).not.toBeNull( null);
        });
    
        it("Has module Overrider_Constructor defined", function () {
            expect( anOverrider._v_Module.Overrider_Constructor).not.toBeUndefined();
        });
    
        it("Has module Overrider_Constructor not null", function () {
            expect( anOverrider._v_Module.Overrider_Constructor).not.toBeNull( null);
        });
    
        it("Has module Overrider_SuperPrototypeConstructor defined", function () {
            expect( anOverrider._v_Module.Overrider_SuperPrototypeConstructor).not.toBeUndefined();
        });
    
        it("Has module Overrider_SuperPrototypeConstructor not null", function () {
            expect( anOverrider._v_Module.Overrider_SuperPrototypeConstructor).not.toBeNull( null);
        });
    
    
    
        it("Has _v_Prototype defined", function () {
            expect( anOverrider._v_Prototype).not.toBeUndefined();
        });
    
        it("Has _v_Prototype module Overrider_Prototype", function () {
            expect( anOverrider._v_Prototype).toBe( anOverrider._v_Module.Overrider_Prototype);
        });
    
        it("Has _v_Prototype_Overrider defined", function () {
            expect( anOverrider._v_Prototype_Overrider).not.toBeUndefined();
        });
    
        it("Has _v_Prototype_Overrider module Overrider_Prototype", function () {
            expect( anOverrider._v_Prototype).toBe( anOverrider._v_Module.Overrider_Prototype);
        });
    
    
    
        it("Has _v_Type Overrider", function () {
            expect( anOverrider._v_Type).toBe( "Overrider");
        });
    
        it("Has title Overrider_DefaultName", function () {
            expect( anOverrider._v_Title).toBe( aOverrider_title);
        });
    
    
    
    
        it("Has fFullTypeNameString defined", function () {
            expect( anOverrider.fFullTypeNameString).not.toBeUndefined();
        });
    
        it("Has fFullTypeNameString typeof function", function () {
            expect( typeof anOverrider.fFullTypeNameString).toBe( "function");
        });
    
    
    
        it("Has fIdentifyingJSON defined", function () {
            expect( anOverrider.fIdentifyingJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingJSON typeof function", function () {
            expect( typeof anOverrider.fIdentifyingJSON).toBe( "function");
        });
    
        it("Has fIdentifyingJSON() not null", function () {
            expect( anOverrider.fIdentifyingJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingJSON() type _v_Type", function () {
            expect( anOverrider.fIdentifyingJSON().type).toBe( anOverrider._v_Type);
        });
    
        it("Has fIdentifyingJSON() id _v_Id", function () {
            expect( anOverrider.fIdentifyingJSON().id).toBe( anOverrider._v_Id);
        });
    
    
    
    
        it("Has fIdentifyingString defined", function () {
            expect( anOverrider.fIdentifyingString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingString typeof function", function () {
            expect( typeof anOverrider.fIdentifyingString).toBe( "function");
        });
    
        it("Has fIdentifyingString() not null", function () {
            expect( anOverrider.fIdentifyingString()).not.toBeNull();
        });
    
        it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( anOverrider.fIdentifyingString()).toBe( JSON.stringify( anOverrider.fIdentifyingJSON()));
        });
    
    
    
    
    
        it("Has fIdentifyingWithTitleJSON defined", function () {
            expect( anOverrider.fIdentifyingWithTitleJSON).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleJSON typeof function", function () {
            expect( typeof anOverrider.fIdentifyingWithTitleJSON).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleJSON() not null", function () {
            expect( anOverrider.fIdentifyingWithTitleJSON()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
            expect( anOverrider.fIdentifyingWithTitleJSON().type).toBe( anOverrider._v_Type);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
            expect( anOverrider.fIdentifyingWithTitleJSON().id).toBe( anOverrider._v_Id);
        });
    
        it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
            expect( anOverrider.fIdentifyingWithTitleJSON().title).toBe( anOverrider._v_Title);
        });
    
    
    
    
    
    
        it("Has fIdentifyingWithTitleString defined", function () {
            expect( anOverrider.fIdentifyingWithTitleString).not.toBeUndefined();
        });
    
        it("Has fIdentifyingWithTitleString typeof function", function () {
            expect( typeof anOverrider.fIdentifyingWithTitleString).toBe( "function");
        });
    
        it("Has fIdentifyingWithTitleString() not null", function () {
            expect( anOverrider.fIdentifyingWithTitleString()).not.toBeNull();
        });
    
        it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
            expect( anOverrider.fIdentifyingWithTitleString()).toBe( JSON.stringify( anOverrider.fIdentifyingWithTitleJSON()));
        });
    
    
    
    
        it("Has fToResultJSON defined", function () {
            expect( anOverrider.fToResultJSON).not.toBeUndefined();
        });
    
        it("Has fToResultJSON typeof function", function () {
            expect( typeof anOverrider.fToResultJSON).toBe( "function");
        });
    
        it("Has fToResultJSON()not null", function () {
            expect( anOverrider.fToResultJSON()).not.toBeNull();
        });
    
    
        it("Has fToResultJSON() type _v_Type", function () {
            expect( anOverrider.fToResultJSON().type).toBe( anOverrider._v_Type);
        });
    
        it("Has fToResultJSON() id _v_Id", function () {
            expect( anOverrider.fToResultJSON().id).toBe( anOverrider._v_Id);
        });
    
        it("Has fToResultJSON() id _v_Title", function () {
            expect( anOverrider.fToResultJSON().title).toBe( anOverrider._v_Title);
        });
        
        
      
        var someFunctionNames = [
            "pSetOverriderarguments",
            "pSetCustom",
            "pSetOverrides",
            "pOverrideModuleVariations"
        ];
        
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                    
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = anOverrider[ aFunctionName_here];
                        
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
    define( "m_overrider_type_structural_test",
        [
            "m_overrider_type"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}




