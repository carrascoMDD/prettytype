/*
 * commoneventkinds.js
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
                                   theSS_IdentifierType){
    
        var ModuleName     = "identifier_svce";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
        
        var aMod_builder = function( theS_IdentifierType) {
        
            return new theS_IdentifierType.Identifier_Constructor( "Service_Identifier");
        };
    
        

        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_IdentifierType
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
    
        angular.module("identifyingTypes").factory("IdentifierSvce",[
            "IdentifierType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_identifier = require('./identifier_type');
            
            return aMod_definer(
                aM_identifier
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define([
            "./identifier_type"
        ],
        aMod_definer
        /* function (
            theM_identifier
        ) {
            return aMod_definer(
                theM_identifier
            );
        }
        */
        );
        
    }
    
    
    
})();






