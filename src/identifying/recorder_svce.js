/*
 * recorder_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
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
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_IdentifierSvce,
                                   theSS_RecorderType){
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recorder_svce";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
        
        var aMod_builder = function( theS_IdentifierSvce,
                                     theS_RecorderType) {
        
            return new theS_RecorderType.Recorder_Constructor( "Service_Recorder", theS_IdentifierSvce);
        };
    
        

        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_IdentifierSvce,
                theSS_RecorderType
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
    
        angular.module("identifyingTypes").factory("RecorderSvce",[
            "TypesRegistrySvce",
            "IdentifierSvce",
            "RecorderType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_identifier_svce = require('./identifier_svce');
            var aM_recorder        = require('./recorder_type');
    
            return aMod_definer(
                aM_typesregistry,
                aM_identifier_svce,
                aM_recorder
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define( "m_recorder_svce",
            [
                "m_typesregistry",
                "m_identifier_svce",
                "m_recorder_type"
            ],
            aMod_definer
        );
        
    }
    
    
    
})();






