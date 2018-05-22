/*
 * stacktrace_svce.js
 *
 * Created @author Antonio Carrasco Valero 201805212307
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

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
 {{Licensed2}}stacktrace_svce.js

 ***************************************************************************
 *
 */


'use strict';


(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "stacktrace_svce";
    var ModulePackages = "exceptionstack";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_stacktrace_type){
        
        
        var aMod_builder = function( theS_OverriderType,
                                     theSS_stacktrace_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aStackTraceInstance = new theSS_stacktrace_type.Stacktrace_Constructor( "StackTraceInstanceAt" + new Date().getTime().toString());
    
            var printStackTrace = function (options) {
                options = options || {guess: true};
                var ex = options.e || null, guess = !!options.guess, mode = options.mode || null;
                var p = aStackTraceInstance, result = p.run(ex, mode);
                return (guess) ? p.guessAnonymousFunctions(result) : result;
            };
            
            
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            printStackTrace._v_Kind        = "function";
            printStackTrace.stacktrace_type= theSS_stacktrace_type;
            printStackTrace.ComponentName  = ComponentName;
            printStackTrace.ModuleName     = ModuleName;
            printStackTrace.ModulePackages = ModulePackages;
            printStackTrace.ModuleFullName = ModuleFullName;
    
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return printStackTrace;
        };
        
        
        
        
        /* ***************************************************************
          Make sure that the module is built only once, and that the same instance is supplied anytime
          the module is required, as i.e. to resolve a dependency for another module.
          Attempt to retrieve a module with same name already registered in the typesregistry_svce singleton.
          If no such module exists then build the module and register it in the typesregistry_svce singleton.
        */
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder(
                theSS_overrider_svce,
                theSS_stacktrace_type
            );
            
            anExistingModule = aModule;
            
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
        
        
        /* ***************************************************************
         Return the module which was already built and registered in typesregistry_svce singleton, or just built.
        */
        return anExistingModule;
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "stacktrace_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce = require('../overrider/overrider_svce');
            var aM_stacktrace_type   = require('./stacktrace_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_stacktrace_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("stacktrace_svce",
            [
                "typesregistry_svce",
                "overrider_svce",
                "stacktrace_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "stacktrace_type")
            ],
            aMod_definer
        );
        
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




