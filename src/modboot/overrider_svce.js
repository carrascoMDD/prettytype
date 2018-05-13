/*
 * overider_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser with AngularJS or RequireJS modules, or in the server as node modules. Licensed under EUPL  http://www.uiwire.org

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
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_OverriderType){
    
        var ComponentName    = "prettytype";
        var ModuleName     = "overrider_svce";
        var ModulePackages = "modboot";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
        
        var aMod_builder = function( theS_OverriderType) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
            return new theS_OverriderType.Overrider_Constructor( "Overrider_Service");
        };
    
        

        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_OverriderType
            );

            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
        return anExistingModule;
    });
    
    

    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        angular.module("modbootTypes").factory("OverriderSvce",[
            "TypesRegistrySvce",
            "OverriderType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry = require('./typesregistry');
            var aM_overrider     = require('./overrider_type');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define("m_overrider_svce",
            [
                "m_typesregistry",
                "m_overrider_type"
            ],
            aMod_definer
        );
        
    }
    
})();






