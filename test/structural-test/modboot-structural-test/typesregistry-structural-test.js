/*
 * typesregistry-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601261900
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


/// <reference path="src/common/typesregistry.js"/>
"use strict";


var aTest_spec = (function( theSS_typeregistry) {

    var ComponentName    = "prettytype-test";
    var ModuleName     = "typesregistry-structural-test";
    var ModulePackages = "test/structural-test/modboot-structural-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        var aM_typesregistry = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            
            beforeEach( module( 'typesRegistry'));
            
            beforeEach( inject(function( _TypesRegistrySvce_) {
                aM_typesregistry = _TypesRegistrySvce_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_typesregistry = require('../../../src/modboot/typesregistry');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_typesregistry = theSS_typeregistry;
        }
        
        it("Has module defined", function () {
            expect( aM_typesregistry._v_Module).not.toBeUndefined();
        });
        
        it("Has module not null", function () {
            expect( aM_typesregistry._v_Module).not.toBeNull( null);
        });
        
        it("Has module ModuleName typesregistry", function () {
            expect( aM_typesregistry._v_Module.ModuleName).toBe( "typesregistry");
        });
        
        it("Has module ModulePackages typesregistry", function () {
            expect( aM_typesregistry._v_Module.ModulePackages).toBe( "modboot");
        });
        
        it("Has module ModuleFullName modboot.typesregistry", function () {
            expect( aM_typesregistry._v_Module.ModuleFullName).toBe( "modboot/typesregistry");
        });
        
        it("Has module TypesRegistry_Prototype defined", function () {
            expect( aM_typesregistry._v_Module.TypesRegistry_Prototype).not.toBeUndefined();
        });
        
        it("Has module TypesRegistry_Prototype not null", function () {
            expect( aM_typesregistry._v_Module.TypesRegistry_Prototype).not.toBeNull( null);
        });
        
        it("Has module TypesRegistry_Constructor defined", function () {
            expect( aM_typesregistry._v_Module.TypesRegistry_Constructor).not.toBeUndefined();
        });
        
        it("Has module TypesRegistry_Constructor not null", function () {
            expect( aM_typesregistry._v_Module.TypesRegistry_Constructor).not.toBeNull( null);
        });
        
        it("Has module TypesRegistry_SuperPrototypeConstructor defined", function () {
            expect( aM_typesregistry._v_Module.TypesRegistry_SuperPrototypeConstructor).not.toBeUndefined();
        });
        
        it("Has module TypesRegistry_SuperPrototypeConstructor not null", function () {
            expect( aM_typesregistry._v_Module.TypesRegistry_SuperPrototypeConstructor).not.toBeNull( null);
        });
        
        
        
        it("Has _v_Prototype defined", function () {
            expect( aM_typesregistry._v_Prototype).not.toBeUndefined();
        });
        
        it("Has _v_Prototype module TypesRegistry_Prototype", function () {
            expect( aM_typesregistry._v_Prototype).toBe( aM_typesregistry._v_Module.TypesRegistry_Prototype);
        });
        
        it("Has _v_Prototype_TypesRegistry defined", function () {
            expect( aM_typesregistry._v_Prototype_TypesRegistry).not.toBeUndefined();
        });
        
        it("Has _v_Prototype_TypesRegistry module TypesRegistry_Prototype", function () {
            expect( aM_typesregistry._v_Prototype).toBe( aM_typesregistry._v_Module.TypesRegistry_Prototype);
        });
        
        
        it("Has _v_Type TypesRegistry", function () {
            expect( aM_typesregistry._v_Type).toBe( "TypesRegistry");
        });
        
        it("Has title TypesRegistry_DefaultName", function () {
            expect( aM_typesregistry._v_Title).toBe( "Types_Registry_singleton");
        });
    
    
        
        
        var someFunctionNames = [
            "fRegisterModule",
            "fRegisteredModule",
            "fUnregisterModule"
        ];
    
        var aNumFunctionNames = someFunctionNames.length;
        for( var aFunctionNameIdx=0; aFunctionNameIdx < aNumFunctionNames; aFunctionNameIdx++) {
            var aFunctionName = someFunctionNames[ aFunctionNameIdx];
            if( aFunctionName) {
                (function() {
                    var aFunctionName_here = aFunctionName;
                
                    it("Has function " + aFunctionName_here + " defined", function () {
                        var aFunction = aM_typesregistry[ aFunctionName_here];
                    
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
    define( "m_typesregistry_structural_test",
        [
            "m_typesregistry"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}

