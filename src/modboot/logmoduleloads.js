'donotuse strict';

/*
 logmoduleloads.js
 Creado 201409101529
 */

/*
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
 */

var LOGMODULELOADS = false;

FG_logModLoads = function( theBoolOrMessage) {
    
    if(    ( typeof theBoolOrMessage === 'undefined')
        || ( ( typeof theBoolOrMessage === 'object') && ( theBoolOrMessage === null))) {
        
        return LOGMODULELOADS === true;
    }
    
    if( ( typeof theBoolOrMessage === 'boolean')) {
        
        LOGMODULELOADS = theBoolOrMessage;
        if( theBoolOrMessage) {
            console.log( ',{"SHALL_LOG_MODULE_LOADS"}');
        }
        else {
            console.log( ',{"SHALL_NOT_LOG_MODULE_LOADS"}');
        }
        
        return LOGMODULELOADS === true;
    }
    
    if( LOGMODULELOADS) {
        if( theBoolOrMessage) {
        
        }
        console.log( ',{"MODULE", "' + theBoolOrMessage + '"}');
    }

    return LOGMODULELOADS;
};


FG_logModLoads._v_Type = "toplevelfunction";
FG_logModLoads.ModuleName     = "FG_logModLoads";
FG_logModLoads.ModulePackages = "modboot";
FG_logModLoads.ModuleFullName = FG_logModLoads.ModulePackages + "/" + FG_logModLoads.ModuleName;
FG_logModLoads.ModuleSource   = FG_logModLoads.toString();