/*
 * typesregistry_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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
 {{Licensed2}}

 ***************************************************************************
 *
 */

'use strict';

(function () {
    
    /* Only module-like (or actual module under Angular, or RequireJS, or nodejs, or ...) with only the typesregistry_type dependency.
    All other modules use at least the typesregistry_svce (a singleton)
    where the modules may want to make sure they are instantiated only once may get this typesregistry injected
    and check with it whether the module(-like) has already been instantiated.
    See typesregistry_type.js for details.
    */
    
    
    var ComponentName  = "prettytype";
    var ModuleName     = "typesregistry_svce";
    var ModulePackages = "typesregistry";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "TypesRegistrySvce";
    
    var aMod_definer = function( theSS_TypesregistryType){
    
        if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
        /* ***************************************************************
          This Module is actually delivered as a singleton instance of the prototype defined in the module.
          The module definition object itself is not actually returned as the module, but the singleton instance is,
            which has a slot _v_Module through which it is possible to access the module definition object.
         */
        var aService = new theSS_TypesregistryType.TypesRegistry_Constructor( SingletonName);
    
        /* ***************************************************************
          Because this singleton becomes a registered module, fill in metainformation usually found in modules
        */
        aService._v_Kind        = "singleton";
        aService.ComponentName  = ComponentName;
        aService.ModuleName     = ModuleName;
        aService.ModulePackages = ModulePackages;
        aService.ModuleFullName = ModuleFullName;
        aService.SingletonName  = SingletonName;
    
        /* Register, just for completion of the types registry, the types registry module, which did not register because no singleton could be available */
        aService.fRegisterModule( ModuleFullName, theSS_TypesregistryType);
        
        /* ***************************************************************
          Register, just for completion of the types registry, this very same service instance by its name
          as supplied above in the TypesRegistry_Constructor()
          ( if not upplied, the name would be defaulted by the typesregistry module to its constant TYPESREGISTRYDEFAULTNAME
        */
        aService.fRegisterModule( ModuleFullName + "." + aService._v_Title, aService);
    
        
        /* ***************************************************************
          Register, just for completion of the types registry implementation, the utility function to log module loads, if such exists
        */
        if( typeof FG_logModLoads === 'function') {
            aService.fRegisterModule( FG_logModLoads.ModuleFullName ? FG_logModLoads.ModuleFullName : "FG_logModLoads", FG_logModLoads);
        }
    
        /* ***************************************************************
          Return the instantiated service singleton as the module object.
        */
        return aService;
        
    };
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        /* ***************************************************************
          typesRegistry dependencies declared here (as none)
            because there is no separate file defining the angular.module("typesregistry"
            other modules with multiple factories declare the module and its dependiencies in a separate file,
            i.e. identifyingTypes, identifying_types.js
        */
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry_type = require('./typesregistry_type');
            
            return aMod_definer( aM_typesregistry_type);
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_type" // "m_typesregistry_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type")
            ],
            aMod_definer
        );
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






