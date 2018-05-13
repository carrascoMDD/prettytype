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
FG_logModLoads.ModuleSource   = FG_logModLoads.toString();;'use strict';

/*
 * roots_types.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused.  licensed under EUPL  http://www.uiwire.org

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


if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("modbootTypes", [ "typesRegistry"]);
}




;/*
 * typesregistry.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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
 
    /* Only module-like (or actual module under Angular, or RequireJS, or nodejs, or ...) with no dependencies.
    All other modules with want to make sure they's me instantiated only once may get this typesregistry injected
    and check with it whether the module(-like) has already been instantiated.
    
    Sample code snippet to inser at the end of the module instantiation function.
    See examples in other javascript src in this prettytype package.
    
    var anExistingModule = null;
    if(    !( typeof theSS_typesregistry === 'undefined')
        && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
        anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    }
    if( !anExistingModule) {
        var aModule = aMod_builder(
            theSS_typesregistry,
            theSS_Overrider
        );
        
        anExistingModule = aModule;
        
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }
    }
    */
    
    var ComponentName    = "prettytype";
    var ModuleName     = "typesregistry";
    var ModulePackages = "modboot";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var ModuleSymbolicName /* for RequireJS */ = "m_" + ModuleName.replace( /-/, "_");
    
    var aMod_definer = ( function(){
    
        var aMod_builder = function() {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.TYPESREGISTRYDEFAULTNAME = "TypesRegistry_DefaultName";
            };
            
            
            
            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            var aTypesRegistry_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "TypesRegistry";
                
                aPrototype._v_Prototype_TypesRegistry = aPrototype;
                
                aPrototype._v_Module = null;
                
                
                aPrototype._v_Title = null;
                
                aPrototype._v_ModulesByFullName = null;
                
                
                
                
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_TypesRegistry( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_TypesRegistry = function( theTitle) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.TYPESREGISTRYDEFAULTNAME;
                    }
                    
                    this._v_ModulesByFullName = { };
                };
                if( _pInit_TypesRegistry){}/* CQT */
                aPrototype._pInit_TypesRegistry = _pInit_TypesRegistry;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                var fRegisterModule = function( theModuleFullName, theModule) {
                    if( !theModule) {
                        return false;
                    }
                    
                    var aModuleFullName = theModuleFullName;
                    if( !aModuleFullName) {
                        aModuleFullName = theModule.ModuleFullName;
                    }
                    if( !aModuleFullName) {
                        return false;
                    }
                    
                    var anAlreadyRegisteredModule =  this._v_ModulesByFullName[ aModuleFullName];
                    if( anAlreadyRegisteredModule) {
                        console.log( "\nAttempt to register another module " + aModuleFullName + "\n");
                        return false;
                    }
                    
                    this._v_ModulesByFullName[ aModuleFullName] = theModule;
                    
                    if( ( typeof theModule === 'object') || ( typeof theModule === 'function')) {
                        theModule[ "TYPESREGISTRY"] = this;
                    }
                    
                    return true;
                };
                if( fRegisterModule){}/* CQT */
                aPrototype.fRegisterModule = fRegisterModule;
                
                
                
                
                
                
                
                
                var fRegisteredModule = function( theModuleFullName) {
                    if( !theModuleFullName) {
                        return null;
                    }
                    
                    
                    var aRegisteredModule =  this._v_ModulesByFullName[ theModuleFullName];
                    if( !aRegisteredModule) {
                        return null;
                    }
                    
                    return aRegisteredModule;
                };
                if( fRegisteredModule){}/* CQT */
                aPrototype.fRegisteredModule = fRegisteredModule;
    
    
    
                var fUnregisterModule = function( theModuleFullName, theModule) {
        
                    var aModuleFullName = theModuleFullName;
                    if( !aModuleFullName) {
                        if( theModule) {
                            aModuleFullName = theModule.ModuleFullName;
                        }
                    }
                    if( !aModuleFullName) {
                        return false;
                    }
        
                    var anAlreadyRegisteredModule =  this._v_ModulesByFullName[ aModuleFullName];
                    if( !anAlreadyRegisteredModule) {
                        return false;
                    }
                    
                    if( theModule) {
                        if( !( anAlreadyRegisteredModule === theModule)) {
                            return false;
                        }
    
                        delete anAlreadyRegisteredModule[ "TYPESREGISTRY"];
                    }
        
                    delete this._v_ModulesByFullName[ aModuleFullName];
                    
                    return true;
                };
                if( fUnregisterModule){}/* CQT */
                aPrototype.fUnregisterModule = fUnregisterModule;
    
    
    
    
    
    
                return aPrototype;
                
            })();
            
            
            
            
            var TypesRegistry_Constructor = function( theTitle) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Title = null;
                
                this._v_ModulesByFullName = null;
                
                this._pInit_TypesRegistry( theTitle);
            };
            TypesRegistry_Constructor.prototype = aTypesRegistry_Prototype;
            
            
            
            
            
            var TypesRegistry_SuperPrototypeConstructor = function() {
                this._v_Prototype = aTypesRegistry_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Title     = null;
                
                this._v_ModulesByFullName = null;
            };
            TypesRegistry_SuperPrototypeConstructor.prototype = aTypesRegistry_Prototype;
            
            
            
            var aModule = {
                "TypesRegistry_Prototype": aTypesRegistry_Prototype,
                "TypesRegistry_Constructor": TypesRegistry_Constructor,
                "TypesRegistry_SuperPrototypeConstructor": TypesRegistry_SuperPrototypeConstructor,
                "Prototype": aTypesRegistry_Prototype,
                "Constructor": TypesRegistry_Constructor,
                "SuperPrototypeConstructor": TypesRegistry_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            aTypesRegistry_Prototype._v_Module = aModule;
    
    
            
            
            return aModule;
        };
        
        
        
        
        var aModule = aMod_builder();
    
        aModule.ModuleBuilder = aMod_builder;
        aModule.ModuleSource  = aMod_builder.toString();
    
        var aService = new aModule.TypesRegistry_Constructor( "Types_Registry_singleton");
    
        /* Register, just for completion of the types registry, this very same module, and the instance by its name*/
        aService.fRegisterModule( ModuleFullName, aModule);
    
        /* Register, just for completion of the types registry, this very same service instance by its name
        as supplied above in the TypesRegistry_Constructor() or defaulted to module constant TYPESREGISTRYDEFAULTNAME
        */
        aService.fRegisterModule( ModuleFullName + "." + aService._v_Title, aService);
    
    
        /* Register, just for completion of the types registry, the utility function to log module loads, if such exists */
        if( typeof FG_logModLoads === 'function') {
            aService.fRegisterModule( FG_logModLoads.ModuleFullName ? FG_logModLoads.ModuleFullName : "FG_logModLoads", FG_logModLoads);
        }
    
    
        return aService;
        
    });
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        // typesRegistry dependencies declared here (as none) because there is no separate file defining the angular.module("typesRegistry"
        // other modules with multiple factories, i.e. identifyingTypes, declare the module and its dependiencies in a separate file identifying_types.js
        angular.module("typesRegistry", []).factory("TypesRegistrySvce",
            aMod_definer
        );
    
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            return aMod_definer();
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleSymbolicName,
            aMod_definer
        );
        
    }
    
    
})();






;/*
 * overrider_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
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
    
    var aMod_definer =  ( function( theSS_typesregistry) {
    
        var ComponentName    = "prettytype";
        var ModuleName     = "overrider_type";
        var ModulePackages = "modboot";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function() {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.OVERRIDER_DEFAULTTITLE = "OverriderDefaultName";
    
                theToInit.MODULENAMESTEPSEPARATOR = "/";
    
                theToInit.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP = "\_\-\_";
                
                theToInit.LOGOVERRIDESFROMCOMMANDLINE = false;
            };
            
            
            
            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
            
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aOverrider_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);

                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "Overrider";
                
                aPrototype._v_Prototype_Overrider = aPrototype;
                
                aPrototype._v_Module = null;
    
                aPrototype._v_Overriderarguments = null;
                aPrototype._v_Custom = null;
                aPrototype._v_Overrides = null;
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Overrider( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Overrider = function( theTitle) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.OVERRIDER_DEFAULTTITLE;
                    }
    
                    this._v_Overriderarguments = null;
                    this._v_Custom = null;
                    this._v_Overrides = null;
                };
                if( _pInit_Overrider){}/* CQT */
                aPrototype._pInit_Overrider = _pInit_Overrider;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
    
    
     
    
           
                var pSetOverriderarguments = function( theOverriderarguments) {
                    this._v_Overriderarguments = theOverriderarguments;
                };
                if( pSetOverriderarguments){}/* CQT */
                aPrototype.pSetOverriderarguments = pSetOverriderarguments;
    
    
                var pSetCustom = function( theCustom) {
                    this._v_Custom = theCustom;
                };
                if( pSetCustom){}/* CQT */
                aPrototype.pSetCustom = pSetCustom;
    
    
                var pSetOverrides = function( theOverrides) {
                    this._v_Overrides = theOverrides;
                };
                if( pSetOverrides){}/* CQT */
                aPrototype.pSetOverrides = pSetOverrides;
    
    

    
    
    
    
                var pOverrideModuleVariations = function( theModuleFullName, theModuleVariations) {
                    if( !theModuleFullName) {
                        return;
                    }
        
                    if( !theModuleVariations) {
                        return;
                    }
        
        
                    if( this._v_Custom && ( typeof this._v_Custom === 'object')) {
                        this.pOverrideWithValuesFrom( theModuleFullName, theModuleVariations, this._v_Custom)
                    }
    
    
                    if( this._v_Overrides && ( typeof this._v_Overrides === 'object')) {
                        this.pOverrideWithValuesFrom( theModuleFullName, theModuleVariations, this._v_Overrides)
                    }
    
    
                    this.pOverrideWithArguments( theModuleFullName, theModuleVariations)
                };
                if( pOverrideModuleVariations){}/* CQT */
                aPrototype.pOverrideModuleVariations = pOverrideModuleVariations;
    
    
    
    
    
    
    
    
                var pOverrideWithValuesFrom = function( theModuleFullName, theToOverrride, theOverrideSource) {
                    if( !theModuleFullName) {
                        return;
                    }
        
                    if( !theToOverrride) {
                        return;
                    }
        
                    if( !theOverrideSource) {
                        return;
                    }
        
        
                    var aIgnoreOverrideValue = theOverrideSource.cIgnoreValue;
                    if( !aIgnoreOverrideValue) {
                        aIgnoreOverrideValue = null;
                    }
        
        
                    var aCurrentOverrides = theOverrideSource;
                    if( !aCurrentOverrides) {
                        return;
                    }
        
        
        
                    var someModuleNameSteps = theModuleFullName.split( this.MODULENAMESTEPSEPARATOR);
                    if( !someModuleNameSteps) {
                        return;
                    }
        
                    var aNumModuleNameSteps = someModuleNameSteps.length;
                    if( !aNumModuleNameSteps) {
                        return;
                    }
        
                    for( var aModuleNameStepIdx=0; aModuleNameStepIdx < aNumModuleNameSteps; aModuleNameStepIdx++) {
            
                        var aModuleNameStep = someModuleNameSteps[ aModuleNameStepIdx];
                        if( !aModuleNameStep) {
                            return;
                        }
            
                        if( !aCurrentOverrides.hasOwnProperty( aModuleNameStep)) {
                            return;
                        }
            
                        aCurrentOverrides = aCurrentOverrides[ aModuleNameStep];
                        if( aCurrentOverrides == null) {
                            return;
                        }
            
                        if( !( typeof aCurrentOverrides === "object")) {
                            return;
                        }
                    }
        
        
        
                    if( !( typeof aCurrentOverrides === "object")) {
                        return;
                    }
        
        
        
                    for( var aGlobalName in theToOverrride) {
                        if( theToOverrride.hasOwnProperty( aGlobalName)) {
                
                            if( aCurrentOverrides.hasOwnProperty( aGlobalName)) {
                    
                                var anOverrideValue = aCurrentOverrides[ aGlobalName];
                    
                                if( !aIgnoreOverrideValue || !( anOverrideValue === aIgnoreOverrideValue)) {
                        
                                    theToOverrride[ aGlobalName] = anOverrideValue;
                                }
                            }
                        }
                    }
                };
                if( pOverrideWithValuesFrom){}/* CQT */
                aPrototype.pOverrideWithValuesFrom = pOverrideWithValuesFrom;
    
    
    
    
    
    
    
    
    
    
    
                var pOverrideWithArguments = function( theModuleFullName, theToOverrride) {
                    if( !theModuleFullName) {
                        return;
                    }
        
                    if( !theToOverrride) {
                        return;
                    }
        
                    if( !this._v_Overriderarguments) {
                        return;
                    }
        
                    if( !this._v_Overriderarguments) {
                        return;
                    }
        
        
                    var aNumOverrides = this._v_Overriderarguments.length;
                    if( !aNumOverrides) {
                        return;
                    }
        
                    var aModuleFullNameWithFinalSeparator = theModuleFullName + this.MODULENAMESTEPSEPARATOR;
        
                    for( var anOverrideIdx= 0; anOverrideIdx < aNumOverrides; anOverrideIdx++) {
            
                        var anOverride = this._v_Overriderarguments[ anOverrideIdx];
                        if( anOverride) {
                
                            var anOverridenVariationFullNameWithSeparators = anOverride[ "name"];
                            if( !anOverridenVariationFullNameWithSeparators) {
                                continue;
                            }
                
                            if( !( typeof anOverridenVariationFullNameWithSeparators === "string")) {
                                continue;
                            }
                
                            var anOverridenValue = anOverride[ "value"];
                            if( !anOverridenValue) {
                                continue;
                            }
                
                            var aRegexp = new RegExp( this.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP, 'g');
                
                            var anOverridenVariationFullName = anOverridenVariationFullNameWithSeparators.replace( aRegexp, this.MODULENAMESTEPSEPARATOR);
                
                            if( !( anOverridenVariationFullName.indexOf( aModuleFullNameWithFinalSeparator) === 0)) {
                                continue;
                            }
                
                            if( !( anOverridenVariationFullName.length > aModuleFullNameWithFinalSeparator.length)) {
                                continue;
                            }
                
                            var anOverridenVariationName = anOverridenVariationFullName.substring( aModuleFullNameWithFinalSeparator.length);
                            if( !anOverridenVariationName) {
                                continue;
                            }
                
                            theToOverrride[ anOverridenVariationName] = anOverridenValue;
                
                            if( this.LOGOVERRIDESFROMCOMMANDLINE) {
                                console.log( "OVERRIDEFROMCOMMANDLINE " + aModuleFullNameWithFinalSeparator + anOverridenVariationName + "=" + anOverridenValue);
                            }
                        }
                    }
                };
                if( pOverrideWithArguments){}/* CQT */
                aPrototype.pOverrideWithArguments = pOverrideWithArguments;
    
    
    
    
    
    
    
    
                return aPrototype;
                
            })();
            
            
            
            
            var Overrider_Constructor = function( theTitle) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_Title = null;
    
                this._v_Overriderarguments = null;
                this._v_Custom = null;
                this._v_Overrides = null;
                
                this._pInit_Overrider( theTitle);
            };
            Overrider_Constructor.prototype = aOverrider_Prototype;
            
            
            
            
            
            var Overrider_SuperPrototypeConstructor = function() {
                this._v_Prototype = aOverrider_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Title     = null;
    
                this._v_Overriderarguments = null;
                this._v_Custom = null;
                this._v_Overrides = null;
            };
            Overrider_SuperPrototypeConstructor.prototype = aOverrider_Prototype;
            
            
            
            var aModule = {
                "Overrider_Prototype": aOverrider_Prototype,
                "Overrider_Constructor": Overrider_Constructor,
                "Overrider_SuperPrototypeConstructor": Overrider_SuperPrototypeConstructor,
                "Prototype": aOverrider_Prototype,
                "Constructor": Overrider_Constructor,
                "SuperPrototypeConstructor": Overrider_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.ModuleConstants = ModuleConstants;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            aOverrider_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder();
    
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
    
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
        
        angular.module("modbootTypes").factory("OverriderType",[
            "TypesRegistrySvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('./typesregistry');
            
            return aMod_definer(
                aM_typesregistry
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_overrider_type",
            [
                "m_typesregistry"
            ],
            aMod_definer);
        
    }
    
})();




;/*
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






;/*
 * decoratesystemprototypes_svce.js
 *
 * Created @author Antonio Carrasco Valero 201412070820
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


(function() {
    
    var aMod_definer = ( function(theSS_typesregistry,
                                  theSS_Overrider){
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "decoratesystemprototypes_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
        
        var aMod_builder = function( theS_Overrider) {
    
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
    
            var pgInitWithModuleVariations = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
        
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
    
    
    
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
            
    
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
        
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            
            
            
            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            
            
            
            var fStringExtend = function( theString, theLen) {
                
                if( !theLen) {
                    return "";
                }
                
                var aThisLen = theString.length;
                if( !aThisLen) {
                    return "";
                }
                
                var aSource = theString;
                var aNumRepeats = Math.floor( theLen / aThisLen);
                aNumRepeats += 1;
                if( aNumRepeats > 1) {
                    
                    if( aNumRepeats > 10000) {
                        aNumRepeats = 10000;
                    }
                    aSource = Array.apply(null, new Array( aNumRepeats)).map(String.prototype.valueOf, theString).join( "");
                }
                
                var aExtended = aSource.slice( 0, theLen);
                if( aExtended){}/* CQT */
                
                return aExtended;
            };
            if( fStringExtend){}/* CQT */
            aModule.fStringExtend = fStringExtend;
            
            
            
            
            
            if( !String.prototype.Xtnd) {
                String.prototype.Xtnd = function( theLen) {
                    
                    return aModule.fStringExtend( this, theLen);
                };
            }
    
            
            
            
            return aModule;
        };
    
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
        var aService = anExistingModule;
        if( aService){}/* CQT */
    
        return aService;
        
    });
    
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        
        angular.module("decoratesystemprototypes", [
            "typesRegistry",
            "modbootTypes"
        ]).factory("DecorateSystemPrototypesSvce",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_decoratesystemprototypes_svce",
            [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer
        );
    }
    
    
})();





;
/*
 * exceptiondetails_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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


(function() {
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_stacktraceSvce){
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "exceptiondetails_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_stacktraceSvce) {
    
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
    
            var pgInitWithModuleVariations = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
        
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
        

    
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
            
            
    
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.LOGEXCEPTIONDETAILS = false;
            };
            
            
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
            
            
    
            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            
            
            
            
            var fgExceptionDetail = function( theException) {
                if( !theException) {
                    return null;
                }
                
                
                var anExceptionDetail = {
                    exception: theException.toString()
                };
                
                
                var anExceptionTrace = theS_stacktraceSvce( { e: theException});
                if( anExceptionTrace) {
                    anExceptionDetail.trace = anExceptionTrace;
                }
                
                var aRecord = theException._v_Record;
                if( aRecord) {
                    if( aRecord.fIdentifyingJSON) {
                        aRecord = aRecord.fIdentifyingJSON();
                    }
                    else {
                        if( aRecord.fAsLogObject) {
                            aRecord = aRecord.fAsLogObject();
                        }
                    }
                    if( aRecord) {
                        anExceptionDetail.recex = aRecord;
                    }
                }
                
                if( this.LOGEXCEPTIONDETAILS) {
                    console.log( "exception:" + anExceptionDetail.exception);
                    console.log( anExceptionDetail.recex);
                    console.log( anExceptionDetail.trace);
                }
                
                anExceptionDetail.fIdentifyingJSON = function() {
                    return anExceptionDetail;
                };
                
                return anExceptionDetail;
            };
            if( fgExceptionDetail){}/* CQT */
            aModule.fgExceptionDetail = fgExceptionDetail;
    
    
    
    
    
            return aModule;
        };
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_stacktraceSvce
            );
    
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
            
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
        
        
        angular.module("exceptiondetails", [
            "typesRegistry",
            "modbootTypes",
            "stacktrace"
        ]).factory("ExceptionDetailsSvce",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "StacktraceSvce",
            aMod_definer
        ]);
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            var aM_stacktrace_svce = require('./stacktrace_svce');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_stacktrace_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_exceptiondetails_svce",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_stacktrace_svce"
            ],
            aMod_definer
            );
    }
    
    
})();







;/*
 * console_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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




(function () {
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "console_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.WRITETOCONSOLE          = true;
                theToInit.COLLECTLOGS             = false;
                theToInit.MAXCOLLECTEDLOGSLENGTH  = 16 * 1024 * 1024;
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                    return;
                }
    
                theToInit._g_WriteToConsole          = ModuleConstants.WRITETOCONSOLE;
                theToInit._g_CollectLogs             = ModuleConstants.COLLECTLOGS;
                theToInit._g_MaxCollectedLogsLength  = ModuleConstants.MAXCOLLECTEDLOGSLENGTH;
    
                theToInit._g_CollectedLogs           = [ ];
                theToInit._g_CollectedLogsSize       = 0;
            };
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;

            
        
            
            
            
            
            
            
            
            var pSetWriteToConsole = function( theWriteToConsole) {
                
                aModule.ModuleGlobals._g_WriteToConsole = ( theWriteToConsole? true : false);
                
            };
            if( pSetWriteToConsole){}/* CQT */
            aModule.pSetWriteToConsole = pSetWriteToConsole;
            
            
            
            
            
            
            
            var pSetCollectLogs = function( theCollectLogs) {
                
                if( theCollectLogs) {
                    
                    aModule.ModuleGlobals._g_CollectLogs = true;
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs      = [ ];
                        aModule.ModuleGlobals._g_CollectedLogsSize  = 0;
                    }
                }
                else {
                    aModule.ModuleGlobals._g_CollectLogs        = false;
                    aModule.ModuleGlobals._g_CollectedLogs      = [ ];
                    aModule.ModuleGlobals._g_CollectedLogsSize  = 0;
                }
            };
            if( pSetCollectLogs){}/* CQT */
            aModule.pSetCollectLogs = pSetCollectLogs;
            
            
            
            
            
            var pSetMaxCollectedLogsLength = function( theMaxCollectedLogsLength) {
                
                aModule.ModuleGlobals._g_MaxCollectedLogsLength = theMaxCollectedLogsLength;
                
                aModule.pEnforceMaxCollectedLogsLength("");
                
            };
            if( pSetMaxCollectedLogsLength){}/* CQT */
            aModule.pSetMaxCollectedLogsLength = pSetMaxCollectedLogsLength;
            
            
            
            
            
            
            
            
            var fCollectedLogs = function() {
                
                return aModule.ModuleGlobals._g_CollectedLogs;
                
            };
            if( fCollectedLogs){}/* CQT */
            aModule.fCollectedLogs = fCollectedLogs;
            
            
            
            
            
            
            var fCollectedLogsCopy = function() {
                
                if( !aModule.ModuleGlobals._g_CollectedLogs) {
                    return null;
                }
                
                return aModule.ModuleGlobals._g_CollectedLogs.slice();
                
            };
            if( fCollectedLogsCopy){}/* CQT */
            aModule.fCollectedLogsCopy = fCollectedLogsCopy;
            
            
            
            
            
            
            
            var log = function( theMessage) {
                
                if( aModule.ModuleGlobals._g_CollectLogs) {
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs = [ ];
                    }
                    
                    aModule.ModuleGlobals._g_CollectedLogs.push( [ "log", theMessage]);
                    
                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }
                
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.log( theMessage);
                }
                
            };
            if( log){}/* CQT */
            aModule.log = log;
            
            
            
            
            
            
            
            var error = function( theMessage) {
                
                if( aModule.ModuleGlobals._g_CollectLogs) {
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs = [ ];
                    }
                    
                    aModule.ModuleGlobals._g_CollectedLogs.push( [ "error", theMessage]);
                    
                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }
                
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.error( theMessage);
                }
                
            };
            if( error){}/* CQT */
            aModule.error = error;
            
            
            
            
            
            
            
            
            var info = function( theMessage) {
                
                if( aModule.ModuleGlobals._g_CollectLogs) {
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs = [ ];
                    }
                    
                    aModule.ModuleGlobals._g_CollectedLogs.push( [ "info", theMessage]);
                    
                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }
                
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.log( theMessage);
                }
                
            };
            if( info){}/* CQT */
            aModule.info = info;
            
            
            
            
            
            
            var clear = function() {
                
                aModule.ModuleGlobals._g_CollectedLogs     = [ ];
                aModule.ModuleGlobals._g_CollectedLogsSize = 0;
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.clear();
                }
                
            };
            if( clear){}/* CQT */
            aModule.clear = clear;
            
            
            
            
            
            
            
            
            var pEnforceMaxCollectedLogsLength = function( theMessage) {
                
                if( !aModule.ModuleGlobals._g_CollectLogs) {
                    return;
                }
                
                var aMessageLen = ( ( typeof theMessage === "string") ? theMessage.length : 0);
                if( aMessageLen){}/* CQT */
    
                aModule.ModuleGlobals._g_CollectedLogsSize += aMessageLen;
                
                if( aModule.ModuleGlobals._g_MaxCollectedLogsLength <= 0) {
                    return;
                }
                
                
                while( true) {
                    
                    if( aModule.ModuleGlobals._g_CollectedLogsSize <= aModule.ModuleGlobals._g_MaxCollectedLogsLength) {
                        return;
                    }
                    
                    if( aModule.ModuleGlobals._g_CollectLogs.length <= 1) {
                        return;
                    }
                    
                    var aRemovedKindAndMessage = aModule.ModuleGlobals._g_CollectedLogs.shift();
                    
                    var aRemovedMessage = aRemovedKindAndMessage[ 1];
                    var aRemovedMessageLen = ( ( typeof aRemovedMessage === "string") ? aRemovedMessage.length : 0);
                    if( aRemovedMessageLen){}/* CQT */
    
                    aModule.ModuleGlobals._g_CollectedLogsSize -= aRemovedMessageLen;
                }
                
                
            };
            if( pEnforceMaxCollectedLogsLength){}/* CQT */
            aModule.pEnforceMaxCollectedLogsLength = pEnforceMaxCollectedLogsLength;
            
            
            
            
            
            
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("consoleSvce", [
            "typesRegistry",
            "modbootTypes"
        ]).factory("ConsoleSvce",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider_svce = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_console_svce",
            [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer);
        
    }
    
})();
    
    




;
/*
 te2est-traversals-type.js refactoring of tes2est-traversals.js  to be Angular-agnostic , originally copy of traversals.js in te2est asyncshell project
 Creado 201505182205
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

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

(function () {
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider){
        
    
        var ComponentName    = "prettytype";
        var ModuleName     = "traversals";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
    
        var aMod_builder = function( theS_Overrider) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
            };
        
        
        
        
        
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
        
        
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            if( theS_Overrider) {
                theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            }
        
        
        
        
        
        
        
        
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
            
            
                theToInit.ROOTPATHSTEPSYMBOL = "#root";
            
            
                theToInit.SPECPATHROOTPATHSTEPSYMBOL = "#testsroot";
            
            
                theToInit.PATHSREPLACEABLESYMBOL = "#";
            
            
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
            
            
                theToInit.TRAVERSAL_WHOLE = "*";
            
                theToInit.TRAVERSALSTEPSSEPARATOR = ".";
            
                theToInit.TRAVERSALSTEP_LENGTH = "length";
                theToInit.TRAVERSALSTEP_LAST   = "last";
                theToInit.TRAVERSALSTEP_FIRST  = "first";
                theToInit.TRAVERSALSTEP_ALL    = "all";
            
            
                theToInit.TRAVERSALSTEP_KEYEDSEPARATOR  = "=";
            
                theToInit.REPLACEPARMVALUEWITHPARMPREFIX = "~";
            
                theToInit.REPLACEPARMVALUEDOT = ".";
            
            
            
                theToInit.ANYEXCEPTION = "*";
            
            
                theToInit.VALUEDIFFATTOP = "/";
            
            
                theToInit.SYMBOLICSTEPREGEXPSTR = "^\\?(\\w+)\\=(\\-?[0-9]+)$";
                theToInit.SYMBOLICSTEPREGEXP    = new RegExp( theToInit.SYMBOLICSTEPREGEXPSTR);
            
                theToInit.KEYEDSTEPREGEXPSTR = "^\\#(\\-?[0-9]+)$";
                theToInit.KEYEDSTEPREGEXP    = new RegExp( theToInit.KEYEDSTEPREGEXPSTR);
            };
        
        
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
        
        
        
        
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            var aModule = {};
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
                var aParmValueLen = theParmValue.length;
                if( !aParmValueLen) {
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                if( aParmValueLen < 2) {
                    return theParmValue;
                }
            
                if( theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT) > 0) {
                    return fgParmValueReplacement_DotNotation( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( !theConfiguration) {
                    return theParmValue;
                }
            
                var aReplacementValue = theParmValue;
            
                var otherReplacementParmName = theParmValue.substring( 1);
            
                var otherParmsToResolve = [ otherReplacementParmName];
            
                var otherParmResolutionsDict = theConfiguration.fParmResolutionsByName( otherParmsToResolve, theMapForStepsWithParmPrefix);
                if( otherParmResolutionsDict) {
                
                    var otherReplacementResolution = otherParmResolutionsDict[ otherReplacementParmName];
                    if( otherReplacementResolution && otherReplacementResolution._v_Success) {
                        aReplacementValue = otherReplacementResolution._v_ParmValue;
                    }
                }
            
                return aReplacementValue;
            };
            if( fgParmValueReplacement){}/* CQT */
            aModule.fgParmValueReplacement = fgParmValueReplacement;
        
        
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement_DotNotation= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
            
                var aParmValueLen = theParmValue.length;
                if( aParmValueLen < 4) { /* expresion minima es ~x.y  */
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                var aDotIndex = theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT);
                if( aDotIndex < 0) {
                    return fgParmValueReplacement( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( aDotIndex < 2) {
                    return theParmValue;
                }
            
            
            
                var aReplacementParmNameWOdot = theParmValue.substring( 0, aDotIndex);
                var aParmValueAfterDot        = theParmValue.substring( aDotIndex + 1);
            
                /* Unused 201805122138
                var aReplacementParmNameWOdotWoPrefix = aReplacementParmNameWOdot.substring( 1);
                 */
            
                var aParmValueReplacementWoDot = fgParmValueReplacement( theConfiguration, aReplacementParmNameWOdot, theMapForStepsWithParmPrefix);
            
                if( ( typeof aParmValueReplacementWoDot === "undefined")
                    || ( aParmValueReplacementWoDot == null)
                    || !( typeof aParmValueReplacementWoDot === "object") ) {
                
                    return aParmValueReplacementWoDot;
                }
            
                if( aDotIndex >= ( aParmValueLen - 1)) {
                    return aParmValueReplacementWoDot;
                }
            
                if( !aParmValueAfterDot) {
                    return aParmValueReplacementWoDot;
                }
            
            
                var aTraversalResult = fgTraverseToFromValue( aParmValueAfterDot, aParmValueReplacementWoDot, theMapForStepsWithParmPrefix);
                if( !( typeof aTraversalResult === "object") || ( aTraversalResult == null)) {
                    return aTraversalResult;
                }
            
                var aReplacementResult = aTraversalResult[ "value"];
                if( aReplacementResult){}/* CQT */
                return aReplacementResult;
            };
            if( fgParmValueReplacement_DotNotation){}/* CQT */
            aModule.fgParmValueReplacement_DotNotation = fgParmValueReplacement_DotNotation;
        
        
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValue = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return { "name": theSourceSteps, "value": theValue};
                }
            
                if( !theValue) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
            
            
            
            
            
                var aStepName = someCheckSourceSteps[ 0].trim();
            
            
            
                if( aNumCheckSourceSteps === 1) {
                
                    if( aStepName === aModule.TRAVERSALSTEP_LENGTH) {
                        return { "value": theValue.length};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_FIRST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ 0]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_LAST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ theValue.length - 1]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_ALL) {
                        if( !theValue.length) {
                            return { "value": []};
                        }
                        return { "value": theValue};
                    }
                
                
                
                
                    var aKeyedSeparatorIndex = aStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                    if ( ( aKeyedSeparatorIndex > 0) && ( aKeyedSeparatorIndex < ( aStepName.length - 1))) {
                        var aValueLen = theValue.length;
                        if( !aValueLen) {
                            return null;
                        }
                        var aKeyName  = aStepName.slice( 0, aKeyedSeparatorIndex);
                        var aKeyValue = aStepName.slice( aKeyedSeparatorIndex);
                        if( !aKeyName || !aKeyValue) {
                            return null;
                        }
                        var aMatchingParmValueElem = null;
                        for( var aValueElemIdx=0; aValueElemIdx < aValueLen; aValueElemIdx++) {
                            var aValueElem = theValue[ aValueElemIdx];
                            if( !aValueElem) {
                                continue;
                            }
                            if( !( typeof aValueElem === "object")) {
                                continue;
                            }
                            if( !aValueElem.hasOwnProperty( aKeyName)) {
                                continue;
                            }
                            var aValueElemKeyedValue    = aValueElem[ aKeyName];
                            if( !aValueElemKeyedValue) {
                                continue;
                            }
                            var aValueElemKeyedValueStr = aValueElemKeyedValue;
                            if( !( typeof aValueElemKeyedValueStr === "string")) {
                                aValueElemKeyedValueStr = new String( aValueElemKeyedValue);
                            }
                            if( !( aValueElemKeyedValueStr === aKeyValue)) {
                                continue;
                            }
                            aMatchingParmValueElem = aValueElem;
                            break;
                        }
                    
                        if( typeof aMatchingParmValueElem === "undefined") {
                            return  null;
                        }
                        if( aMatchingParmValueElem == null) {
                            return null;
                        }
                    
                        return { "value": aMatchingParmValueElem};
                    }
                
                
                
                
                
                    var aReplacedSingleStepName = aStepName;
                    if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                    
                        var aSingleStepNameWoPrefix = aStepName.slice( 1);
                        if( aSingleStepNameWoPrefix) {
                        
                            var aSingleParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSingleStepNameWoPrefix];
                        
                            if( typeof aSingleParmResolutionForStepWithParmPrefix === "undefined") {
                                return null;
                            }
                        
                            aReplacedSingleStepName = aSingleParmResolutionForStepWithParmPrefix;
                        }
                    }
                
                
                
                    var aOneStepTestValue = theValue[ aReplacedSingleStepName];
                
                    if( typeof aOneStepTestValue === "undefined") {
                        return  null;
                    }
                
                    return { "value": aOneStepTestValue};
                }
            
            
            
            
            
            
            
            
                var aReplacedStepName = aStepName;
                if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aStepNameWoPrefix = aStepName.slice( 1);
                    if( aStepNameWoPrefix) {
                    
                        var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aStepNameWoPrefix];
                    
                        if( typeof aParmResolutionForStepWithParmPrefix === "undefined") {
                            return null;
                        }
                    
                        aReplacedStepName = aParmResolutionForStepWithParmPrefix;
                    }
                }
            
            
                var aTestValue = theValue[ aReplacedStepName];
                if( typeof aTestValue === "undefined") {
                    return  null;
                }
            
                if( aTestValue == null) {
                    return  null;
                }
            
            
            
            
                var aNumStepsToTraverse = aNumCheckSourceSteps - 1;
            
                var aSubStepValue = aTestValue;
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                    var aSubStepName = someCheckSourceSteps[ aSubStepIdx];
                    if( aSubStepName) {
                        aSubStepName = aSubStepName.trim();
                    
                        if( aSubStepName === aModule.TRAVERSALSTEP_LENGTH) {
                            return { "value": aSubStepValue.length};
                        }
                        else {
                            if( aSubStepName === aModule.TRAVERSALSTEP_FIRST) {
                                if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                    return null;
                                }
                                aSubStepValue = aSubStepValue[ 0];
                            }
                            else {
                                if( aSubStepName === aModule.TRAVERSALSTEP_LAST) {
                                    if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                        return null;
                                    }
                                    aSubStepValue = aSubStepValue[ aSubStepValue.length - 1];
                                }
                                else {
                                
                                    if( aSubStepName === aModule.TRAVERSALSTEP_ALL) {
                                        if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                            return { "value": []};
                                        }
                                    
                                        var someStepsToCollect = someCheckSourceSteps.slice( aSubStepIdx + 1);
                                    
                                        var someCollected = [ ];
                                    
                                        var someToCollect = aSubStepValue.slice();
                                        var aNumToCollect = someToCollect.length;
                                        for( var aToCollectIdx=0; aToCollectIdx < aNumToCollect; aToCollectIdx++) {
                                        
                                            var aToCollect = someToCollect[ aToCollectIdx];
                                        
                                            var aCollectedTraversalResult = fgTraverseToFromValue( someStepsToCollect, aToCollect);
                                        
                                            if( aCollectedTraversalResult) {
                                                var aCollectedTraversalValue = aCollectedTraversalResult[ "value"];
                                                someCollected.push( aCollectedTraversalValue);
                                            }
                                        }
                                    
                                        return { "value": someCollected};
                                    }
                                    else {
                                    
                                        var aSubStepKeyedSeparatorIndex = aSubStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                                        if ( ( aSubStepKeyedSeparatorIndex > 0) && ( aSubStepKeyedSeparatorIndex < ( aSubStepName.length - 1))) {
                                            var aSubStepParmValueLen = aSubStepValue.length;
                                            if( !aSubStepParmValueLen) {
                                                return null;
                                            }
                                            var aSubStepKeyName  = aSubStepName.slice( 0, aSubStepKeyedSeparatorIndex);
                                            var aSubStepKeyValue = aSubStepName.slice( aSubStepKeyedSeparatorIndex + 1);
                                            if( !aSubStepKeyName || !aSubStepKeyValue) {
                                                return null;
                                            }
                                            var aSubStepMatchingParmValueElem = null;
                                            for( var aSubStepParmValueElemIdx=0; aSubStepParmValueElemIdx < aSubStepParmValueLen; aSubStepParmValueElemIdx++) {
                                                var aSubStepParmValueElem = aSubStepValue[ aSubStepParmValueElemIdx];
                                                if( !aSubStepParmValueElem) {
                                                    continue;
                                                }
                                                if( !( typeof aSubStepParmValueElem === "object")) {
                                                    continue;
                                                }
                                                if( !aSubStepParmValueElem.hasOwnProperty( aSubStepKeyName)) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValue    = aSubStepParmValueElem[ aSubStepKeyName];
                                                if( !aSubStepParmValueElemKeyedValue) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValueStr = aSubStepParmValueElemKeyedValue;
                                                if( !( typeof aSubStepParmValueElemKeyedValueStr === "string")) {
                                                    aSubStepParmValueElemKeyedValueStr = new String( aSubStepParmValueElemKeyedValue);
                                                }
                                                if( !( aSubStepParmValueElemKeyedValueStr === aSubStepKeyValue)) {
                                                    continue;
                                                }
                                                aSubStepMatchingParmValueElem = aSubStepParmValueElem;
                                                break;
                                            }
                                        
                                            if( typeof aSubStepMatchingParmValueElem === "undefined") {
                                                return null;
                                            }
                                        
                                            if( aSubStepMatchingParmValueElem == null) {
                                                return null;
                                            }
                                        
                                            aSubStepValue = aSubStepMatchingParmValueElem;
                                        }
                                    
                                    
                                    
                                    
                                        else {
                                            var aReplacedSubStepName = aSubStepName;
                                        
                                            if( aSubStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                                            
                                                var aSubStepNameWoPrefix = aSubStepName.slice( 1);
                                            
                                                var aParmResolutionForSubStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSubStepNameWoPrefix];
                                                if( typeof aParmResolutionForSubStepWithParmPrefix === "undefined") {
                                                    return null;
                                                }
                                            
                                                aReplacedSubStepName = aParmResolutionForSubStepWithParmPrefix;
                                            }
                                        
                                            aSubStepValue = aSubStepValue[ aReplacedSubStepName];
                                        }
                                    }
                                }
                            }
                        }
                    
                    
                        if( typeof aSubStepValue === "undefined") {
                            return null;
                        }
                    
                    
                        if( aSubStepValue == null) {
                            return { "value": null};
                        }
                    
                    }
                }
            
            
                if( aSubStepValue == null) {
                    return { "value": null};
                }
            
            
                var aLastStepName = someCheckSourceSteps[ aNumCheckSourceSteps - 1];
                if( !aLastStepName) {
                    return null;
                }
                aLastStepName = aLastStepName.trim();
                if( !aLastStepName) {
                    return null;
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LENGTH) {
                    return { "value": aSubStepValue.length};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_FIRST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ 0]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LAST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ aSubStepValue.length - 1]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_ALL) {
                    if( !aSubStepValue.length) {
                        return { "value": []};
                    }
                    return { "value": aSubStepValue};
                }
            
            
            
                var aLastKeyedSeparatorIndex = aLastStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                if ( ( aLastKeyedSeparatorIndex > 0) && ( aLastKeyedSeparatorIndex < ( aLastStepName.length - 1))) {
                    var aLastValueLen = aSubStepValue.length;
                    if( !aLastValueLen) {
                        return null;
                    }
                    var aLastKeyName  = aLastStepName.slice( 0, aLastKeyedSeparatorIndex);
                    var aLastKeyValue = aLastStepName.slice( aLastKeyedSeparatorIndex);
                    if( !aKeyName || !aKeyValue) {
                        return null;
                    }
                    var aLastMatchingParmValueElem = null;
                    for( var aLastValueElemIdx=0; aLastValueElemIdx < aLastValueLen; aLastValueElemIdx++) {
                        var aLastValueElem = aSubStepValue[ aLastValueElemIdx];
                        if( !aLastValueElem) {
                            continue;
                        }
                        if( !( typeof aLastValueElem === "object")) {
                            continue;
                        }
                        if( !aLastValueElem.hasOwnProperty( aLastKeyName)) {
                            continue;
                        }
                        var aLastValueElemKeyedValue    = aLastValueElem[ aLastKeyName];
                        if( !aLastValueElemKeyedValue) {
                            continue;
                        }
                        var aLastValueElemKeyedValueStr = aLastValueElemKeyedValue;
                        if( !( typeof aLastValueElemKeyedValueStr === "string")) {
                            aLastValueElemKeyedValueStr = new String( aLastValueElemKeyedValue);
                        }
                        if( !( aLastValueElemKeyedValueStr === aLastKeyValue)) {
                            continue;
                        }
                        aLastMatchingParmValueElem = aLastValueElem;
                        break;
                    }
                
                    if( typeof aLastMatchingParmValueElem === "undefined") {
                        return null;
                    }
                
                    if( aLastMatchingParmValueElem == null) {
                        return null;
                    }
                
                    return { "value": aLastMatchingParmValueElem};
                }
            
            
            
            
                var aReplacedLastStepName = aLastStepName;
            
                if( aLastStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aLastStepNameWoPrefix = aLastStepName.slice( 1);
                
                    var aParmResolutionForLastStepWithParmPrefix = theMapForStepsWithParmPrefix[ aLastStepNameWoPrefix];
                    if( typeof aParmResolutionForLastStepWithParmPrefix === "undefined") {
                        return null;
                    }
                
                    aReplacedLastStepName = aParmResolutionForLastStepWithParmPrefix;
                }
            
            
                var aLastStepTestValue = aSubStepValue[ aReplacedLastStepName];
                if( typeof aLastStepTestValue === "undefined") {
                    return  null;
                }
            
                return { "value": aLastStepTestValue};
            };
            if( fgTraverseToFromValue){}/* CQT */
            aModule.fgTraverseToFromValue = fgTraverseToFromValue;
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValueReturnValueOrNull = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
            
                var aTraversalResult = fgTraverseToFromValue( theSourceSteps, theValue, theMapForStepsWithParmPrefix);
                if( !aTraversalResult) {
                    return null;
                }
            
                var aTraversalValue = aTraversalResult[ "value"];
                if( aTraversalValue){}/* CQT */
            
                return aTraversalValue;
            
            };
            if( fgTraverseToFromValueReturnValueOrNull){}/* CQT */
            aModule.fgTraverseToFromValueReturnValueOrNull = fgTraverseToFromValueReturnValueOrNull;
        
        
        
        
        
        
        
        
        
            var fgHasAnyStepsWithParmPrefix = function( theSourceSteps) {
            
                if( !theSourceSteps) {
                    return false;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return false;
                }
            
                if( theSourceSteps.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) < 0) {
                    return false;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return false;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return false;
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                            return true;
                        }
                    }
                }
            
                return false;
            };
            if( fgHasAnyStepsWithParmPrefix){}/* CQT */
            aModule.fgHasAnyStepsWithParmPrefix = fgHasAnyStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgStepsWithParmPrefix = function( theSourceSteps, theStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
                var someStepsWithParmPrefix = theStepsWithParmPrefix;
                if( ( someStepsWithParmPrefix == null) || !( typeof someStepsWithParmPrefix === "object") || !( typeof someStepsWithParmPrefix.length === "number")) {
                    someStepsWithParmPrefix = [ ];
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                        
                            var aStepForWithParmPrefixWoPrefix = aStepForWithParmPrefix.substring( 1);
                            if( aStepForWithParmPrefixWoPrefix) {
                                if( someStepsWithParmPrefix.indexOf( aStepForWithParmPrefixWoPrefix) < 0) {
                                    someStepsWithParmPrefix.push( aStepForWithParmPrefixWoPrefix);
                                }
                            }
                        }
                    }
                }
            
                var aNumStepsWithParmPrefix = someStepsWithParmPrefix.length;
                if( !aNumStepsWithParmPrefix) {
                    return null;
                }
            
            
                return someStepsWithParmPrefix;
            };
            if( fgStepsWithParmPrefix){}/* CQT */
            aModule.fgStepsWithParmPrefix = fgStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgFirstDiff = function( theActualValue, theCheckValue) {
            
                var aDiff = fgFirstDiff_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
    
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
                
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
                
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiff){}/* CQT */
            aModule.fgFirstDiff = fgFirstDiff;
    
    
    
    
            var fgFirstDiff_inner = function( theActualValue, theCheckValue) {
        
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
        
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
        
        
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                    Just remains to drill down into an object list elements or keyed properties
                     */
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
        
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
            
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
            
            
                    /* It is a list, theCheckValue is also a list*/
            
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
            
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
                
                        var aSubsListDiff = fgFirstDiff_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                    
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
    
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                    
                            aSubsListDiff.push( aSubIdx);
                    
                            return aSubsListDiff;
                        }
                    }
            
                    return null;
                }
        
        
        
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
                var someOneKeys   = Object.keys( theActualValue);
                var someOtherKeys = Object.keys( theCheckValue);
        
        
                var allKeys = someOneKeys.slice();
                var aNumOtherKeys = someOtherKeys.length;
        
                for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                    var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                    if( allKeys.indexOf( aOtherKey) < 0) {
                        allKeys.push( aOtherKey);
                    }
                }
                allKeys.sort();
        
        
                var aNumKeys = allKeys.length;
        
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = allKeys[ aKeyIdx];
            
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
            
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
            
            
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
            
                    var aSubsDiff = fgFirstDiff_inner( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
                
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                
                        return aSubsDiff;
                    }
                }
        
        
                return null;
            };
            if( fgFirstDiff_inner){}/* CQT */
            aModule.fgFirstDiff_inner = fgFirstDiff_inner;
    
    
    
    
    
    
    
    
            var fgFirstDiffFromLeft = function( theActualValue, theCheckValue) {
        
                var aDiff = fgFirstDiffFromLeft_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
        
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
        
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiffFromLeft){}/* CQT */
            aModule.fgFirstDiffFromLeft = fgFirstDiffFromLeft;
    
    
    
    
    
            var fgFirstDiffFromLeft_inner = function( theActualValue, theCheckValue) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                       Just remains to drill down into an object list elements or keyed properties
                    */
                    return aModule.VALUEDIFFATTOP;
                }
    
    
    
    
    
    
    
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
    
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
        
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
        
        
                    /* It is a list, theCheckValue is also a list*/
        
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
        
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
            
                        var aSubsListDiff = fgFirstDiffFromLeft_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
                
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                
                            aSubsListDiff.push( aSubIdx);
                
                            return aSubsListDiff;
                        }
                    }
        
                    return null;
                }
    
    
    
    
    
    
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
    
                var someKeys   = Object.keys( theCheckValue);
            
                var aNumKeys = someKeys.length;
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
                
                    var aSubsDiff = fgFirstDiffFromLeft( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                    
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
    
    
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                    
                        return aSubsDiff;
                    }
                }
            
                return null;
            };
            if( fgFirstDiffFromLeft_inner){}/* CQT */
            aModule.fgFirstDiffFromLeft_inner = fgFirstDiffFromLeft_inner;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgAllDiffs = function( theActualValue, theCheckValue, theIgnoreKeys, theIgnorePaths) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( typeof theActualValue === "undefined") {
                    return [ fNewVoidDiff( "undefined", "UNCHECKED", "undefined", "UNCHECKED")];
                }
            
                if( typeof theCheckValue === "undefined") {
                    return [ fNewVoidDiff( theActualValue, "undefined", "something", "undefined")];
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( theActualValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "null", "something")];
                }
            
                if( theCheckValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "something", "null")];
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, typeof theActualValue, typeof theCheckValue)];
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                
                    if( !( typeof theCheckValue === "string")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a string")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                
                    if( !( typeof theCheckValue === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a number")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                
                    if( !( typeof theCheckValue === "boolean")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a boolean")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
    
    
                if( typeof theActualValue === "function" ) {
        
                    if( !( typeof theCheckValue === "function")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a function")];
                    }
        
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
                
    
                if( !( typeof theActualValue === "object" )) {
                    return [ fNewVoidDiff( "an object", "UNCHECKED")];
                }
            
            
                if( !( typeof theCheckValue === "object" )) {
                    return [ fNewVoidDiff( "an object'", "not an object")];
                }
            
            
            
            
            
            
                var allDiffs = [ ];
            
            
            
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
            
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number")) {
                
                    if( !( typeof aOneLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "not an array", "UNCHECKED")];
                    }
                
                    if( !( typeof aOtherLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "an array", "not an array")];
                    }
                
                    if( !( aOneLen === aOtherLen)) {
                        allDiffs.push( fNewVoidDiff( theActualValue, theCheckValue, "LEN=" + aOneLen, "LEN=" + aOtherLen));
                    }
                
                    var aMaxLen = Math.max( aOneLen, aOtherLen);
                
                    if( aMaxLen) {
                    
                        for( var aSubIdx=0; aSubIdx < aMaxLen; aSubIdx++) {
                        
                            var aOneListSub   = undefined;
                            var aOtherListSub = undefined;
                        
                            if( aSubIdx < aOneLen) {
                                aOneListSub   = theActualValue[ aSubIdx];
                            }
                        
                            if( aSubIdx < aOtherLen) {
                                aOtherListSub   = theCheckValue[ aSubIdx];
                            }
                        
                        
                            var someSubsListDiffs = fgAllDiffs( aOneListSub, aOtherListSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsListDiffs) {
                            
                                pUnshiftDiffsPath( someSubsListDiffs, aSubIdx);
                            
                                Array.prototype.push.apply( allDiffs, someSubsListDiffs);
                            }
                        }
                    }
                }
            
            
            
            
            
            
                var someOneKeysPossiblyWithNumbers   = Object.keys( theActualValue);
                var someOtherKeyPossiblyWithNumbers = Object.keys( theCheckValue);
            
                if( !( typeof someOneKeysPossiblyWithNumbers === "undefined") && !( typeof someOtherKeyPossiblyWithNumbers === "undefined")) {
                
                    var someOneKeys   = aModule.fgExcludeNumberStrings( someOneKeysPossiblyWithNumbers);
                    var someOtherKeys = aModule.fgExcludeNumberStrings( someOtherKeyPossiblyWithNumbers);
                
                
                    var allKeys = someOneKeys.slice();
                    var aNumOtherKeys = someOtherKeys.length;
                
                    for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                        var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                        if( allKeys.indexOf( aOtherKey) < 0) {
                            allKeys.push( aOtherKey);
                        }
                    }
                    allKeys.sort();
                
                
                    var aNumKeys = allKeys.length;
                
                    if( aNumKeys) {
                        for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                            var aKey = allKeys[ aKeyIdx];
                        
                            if( theIgnoreKeys && ( theIgnoreKeys.indexOf( aKey) >=0)) {
                                continue;
                            }
                        
                            var aOneSub   = undefined;
                            var aOtherSub = undefined;
                        
                            if( theActualValue.hasOwnProperty( aKey)) {
                                aOneSub   = theActualValue[ aKey];
                            }
                        
                            if( theCheckValue.hasOwnProperty( aKey)) {
                                aOtherSub = theCheckValue[ aKey];
                            }
                        
                            var someSubsDiffs = fgAllDiffs( aOneSub, aOtherSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsDiffs) {
                            
                                pUnshiftDiffsPath( someSubsDiffs, aKey);
                            
                                Array.prototype.push.apply( allDiffs, someSubsDiffs);
                            }
                        }
                    }
                }
            
            
                var aNumAllDiffs = allDiffs.length;
                if( !aNumAllDiffs) {
                    return null;
                }
            
                return allDiffs;
            };
            if( fgAllDiffs){}/* CQT */
            aModule.fgAllDiffs = fgAllDiffs;
        
        
        
        
        
        
        
            var fNewVoidDiff = function( theOneValue, theOtherValue, theOneDisplay, theOtherDisplay) {
            
                var aDiff = {
                    "oneValue":     theOneValue,
                    "otherValue":   theOtherValue,
                    "oneDisplay":   theOneDisplay,
                    "otherDisplay": theOtherDisplay,
                    "path":         undefined,
                    "diffKind":     null
                };
                if( aDiff){}/* CQT */
            
                return aDiff;
            };
        
        
        
        
        
        
        
        
        
            var fgExcludeNumberStrings = function( theStrings) {
            
                if( !theStrings) {
                    return theStrings;
                }
            
                var aNumStrings   = theStrings.length;
                if( !aNumStrings) {
                    return theStrings;
                }
            
                var someNotNumberStrings = [ ];
            
                for( var aOneStringIdx=0; aOneStringIdx < aNumStrings; aOneStringIdx++) {
                
                    var aOneString = theStrings[ aOneStringIdx];
                    if( aOneString) {
                    
                        var aIsNumber = false;
                        try {
                            var aNumber = parseInt( aOneString);
                            aIsNumber = !isNaN( aNumber);
                        }
                        catch( anException) {}
                        if( !aIsNumber) {
                            someNotNumberStrings.push( aOneString);
                        }
                    }
                }
            
                return someNotNumberStrings;
            
            };
            if( fgExcludeNumberStrings){}/* CQT */
            aModule.fgExcludeNumberStrings = fgExcludeNumberStrings;
        
        
        
        
        
        
        
            var pUnshiftDiffsPath = function( theDiffs, theToUnshift) {
            
                if( !theDiffs) {
                    return;
                }
            
                var aNumDiffs = theDiffs.length;
                if( !aNumDiffs) {
                    return;
                }
            
                if( typeof theToUnshift === "undefined") {
                    return;
                }
            
                if( theToUnshift == null) {
                    return;
                }
            
            
                for( var aDiffIdx=0; aDiffIdx < aNumDiffs; aDiffIdx++) {
                    var aDiff = theDiffs[ aDiffIdx];
                    if( aDiff) {
                    
                        var aPath = aDiff[ "path"];
                        if( !( typeof aPath === "object")) {
                            aDiff[ "path"] = [ theToUnshift];
                        }
                        else {
                            aPath.unshift( theToUnshift);
                        
                        }
                    }
                }
            };
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPath = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                        aSubStepValue = aSubStepValue[ aSubStepName];
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPath){}/* CQT */
            aModule.fgSetValueAtPath = fgSetValueAtPath;
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPathSymbolic = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                    
                        aSubStepValue = aModule.fgSymbolicGet( aSubStepValue, aSubStepName);
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPathSymbolic){}/* CQT */
            aModule.fgSetValueAtPathSymbolic = fgSetValueAtPathSymbolic;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSymbolicGet = function( theTarget, theStep) {
            
                var aSymbolicStepMatch = aModule.SYMBOLICSTEPREGEXP.exec( theStep);
            
                if( !aSymbolicStepMatch) {
                
                    var aGetValue = theTarget[ theStep];
                    if( aGetValue){}/* CQT */
                    return aGetValue;
                }
            
            
                var aSymbolicKey   = aSymbolicStepMatch[ 1];
                var aSymbolicValue = aSymbolicStepMatch[ 2];
            
                if( !aSymbolicKey) {
                    return undefined;
                }
            
                if( typeof aSymbolicValue === "undefined") {
                    return undefined;
                }
            
            
                var aTargetLength = theTarget.length;
                if( !( typeof aTargetLength === "number")) {
                    return undefined;
                }
            
            
                for( var aTargetIdx=0; aTargetIdx < aTargetLength; aTargetIdx++) {
                
                    var aTarget = theTarget[ aTargetIdx];
                    if( aTarget && ( typeof aTarget === "object")) {
                    
                        var aTargetSearch = aTarget[ aSymbolicKey];
                        if( !( typeof aTargetSearch === "undefined")) {
                        
                            if( aTargetSearch === aSymbolicValue) {
                            
                                return aTarget;
                            }
                        }
                    }
                }
            
                return undefined;
            
            };
            if( fgSymbolicGet){}/* CQT */
            aModule.fgSymbolicGet = fgSymbolicGet;
        
        
        
        
        
        
        
        
            var fgDeepCopy = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
            
                if( typeof theSource.length === "number") {
                    return aModule.fgDeepCopy_List( theSource)
                }
            
            
                return aModule.fgDeepCopy_Object( theSource)
            
            };
            if( fgDeepCopy){}/* CQT */
            aModule.fgDeepCopy = fgDeepCopy;
        
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_List = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aNumElements = theSource.length;
            
                if( !( typeof aNumElements === "number")) {
                    return undefined;
                }
            
            
                var aDeepCopy = [ ];
            
                for( var anElementIdx=0; anElementIdx < aNumElements; anElementIdx++) {
                
                    var anElement = theSource[ anElementIdx];
                
                    if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                        aDeepCopy.push( anElement);
                        continue;
                    }
                
                    var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                    if( aDeepCopiedElement){}/* CQT */
                
                    aDeepCopy.push( aDeepCopiedElement);
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_List){}/* CQT */
            aModule.fgDeepCopy_List = fgDeepCopy_List;
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_Object = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aDeepCopy = { };
            
                var someKeys = Object.keys( theSource);
                if( !someKeys) {
                    return aDeepCopy;
                }
            
                var aNumKeys = someKeys.length;
                if( !aNumKeys) {
                    return theSource;
                }
            
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                
                    var aKey = someKeys[ aKeyIdx];
                
                    var aKeyInt = undefined;
                    try {
                        aKeyInt = parseInt( aKey);
                    }
                    catch( anException) {
                    }
                    if( ( typeof aKeyInt === "number") && !isNaN( aKeyInt)) {
                        continue;
                    }
                
                
                    if( theSource.hasOwnProperty( aKey)) {
                    
                        var anElement = theSource[ aKey];
                    
                        if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                            aDeepCopy[ aKey] = anElement;
                            continue;
                        }
                    
                        var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                        if( aDeepCopiedElement){}/* CQT */
                    
                        aDeepCopy[ aKey] = aDeepCopiedElement;
                    }
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_Object){}/* CQT */
            aModule.fgDeepCopy_Object = fgDeepCopy_Object;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey = function( theList, theKeyPropertyName) {
            
                if( !theList) {
                    return {};
                }
            
                if( !theKeyPropertyName) {
                    return {};
                }
            
                var aDict = { };
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( ( typeof anElem === "object") && !( anElem == null)) {
                    
                        var aKey = anElem[ theKeyPropertyName];
                        if( ( typeof aKey === "number") || ( typeof aKey === "string") || ( typeof aKey === "boolean")) {
                        
                            aDict[ aKey] = anElem;
                        }
                    }
                }
            
                return aDict;
            
            };
            if( fgDictFromListByKey){}/* CQT */
            aModule.fDictFromListByKey = fgDictFromListByKey;
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey_AsLists = function( theList, theKeyPptyName) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPptyName) {
                    return {};
                }
            
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aKey = anElem[ theKeyPptyName];
                        if( !( typeof aKey === "undefined") && !( aKey == null)) {
                        
                        
                            var someForKey = aDict[ aKey];
                            if( !someForKey) {
                                someForKey = [ ];
                                aDict[ aKey] = someForKey;
                            }
                        
                            if( someForKey.indexOf( anElem) < 0) {
                                someForKey.push( anElem);
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKey_AsLists){}/* CQT */
            aModule.fgDictFromListByKey_AsLists = fgDictFromListByKey_AsLists;
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKeyPath = function( theList, theKeyPath) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPath) {
                    return {};
                }
            
                if( theKeyPath.indexOf( ".") < 0) {
                    return fgDictFromListByKey_AsLists( theList, theKeyPath);
                }
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                    
                        var aTraversalResult = theSS_Te2estTraversals.fgTraverseToFromValue( theKeyPath, anElem);
                        if( aTraversalResult) {
                        
                            var aKey = aTraversalResult[ "value"];
                            if( !( typeof aKey === "undefined") && !( aKey == null)) {
                            
                                aDict[ aKey] = anElem;
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKeyPath){}/* CQT */
            aModule.fgDictFromListByKeyPath = fgDictFromListByKeyPath;
        
        
        
        
        
        
        
        
        
            var fgCollectProperty = function( theList, thePptyName) {
            
                if( !theList) {
                    return null;
                }
            
                if( !thePptyName) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return [ ];
                }
            
                if( !thePptyName) {
                    return [ ];
                }
            
            
                var aList = [ ];
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aValue = anElem[ thePptyName];
                        if( !( typeof aValue === "undefined") && !( aValue == null)) {
                        
                            if( aList.indexOf( aValue) < 0) {
                                aList.push( aValue);
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectProperty){}/* CQT */
            aModule.fgCollectProperty = fgCollectProperty;
        
        
        
        
        
        
        
        
            var pgPushIntoIfNotAlready = function( theTargetList, theSourceList) {
            
                if( !theTargetList) {
                    return;
                }
            
                if( !theSourceList) {
                    return;
                }
            
                var aNumElems = theSourceList.length;
                if( !aNumElems) {
                    return;
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theSourceList[ anElemIdx];
                    if( !(typeof anElem === "undefined")) {
                    
                        if( theTargetList.indexOf( anElem) < 0) {
                            theTargetList.push( anElem);
                        }
                    }
                
                }
            };
            if( pgPushIntoIfNotAlready){}/* CQT */
            aModule.pgPushIntoIfNotAlready = pgPushIntoIfNotAlready;
        
        
        
        
        
        
        
        
        
        
            var fgCollectPath = function( theList, thePath) {
            
                if( !theList) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return [ ];
                }
            
                if( !thePath) {
                    return [ ];
                }
            
            
                var aList = [ ];
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aTraversalResult = theS_Te2estTraversals.fgTraverseToFromValue( thePath, anElem);
                        if( aTraversalResult) {
                            var aValue = aTraversalResult[ "value"];
                        
                            if( !( typeof aValue === "undefined") && !( aValue == null)) {
                            
                                if( aList.indexOf( aValue) < 0) {
                                    aList.push( aValue);
                                }
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectPath){}/* CQT */
            aModule.fgCollectPath = fgCollectPath;
        
        
        
        
        
        
        
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("traversals", [ 'typesRegistry', 'modbootTypes']).factory("Traversals",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_traversals", [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer
           );
    }
    
})();



;'use strict';

/*
 checks.js
 Creado 201504010326
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

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


(function () {
    
    var aMod_definer = function( theSS_typesregistry,
                                 theSS_Overrider){
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "checks";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
    
        var aMod_builder = function( theS_Overrider) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
            };
        
        
        
        
        
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
        
        
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
        
        
        
        
        
        
        
        
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
                theToInit.JSONNAME_CHECKWHEN   = "checkWhen";
                theToInit.JSONNAME_CHECKNEGATE = "checkNegate";
                theToInit.JSONNAME_CHECKKIND   = "checkKind";
                theToInit.JSONNAME_CHECKORIGIN = "checkOrigin";
                theToInit.JSONNAME_CHECKSOURCE = "checkSource";
                theToInit.JSONNAME_CHECKVALUE  = "checkValue";
            
            
                theToInit.JSONNAMES_CHECKPARM = [
                    theToInit.JSONNAME_CHECKWHEN,
                    theToInit.JSONNAME_CHECKNEGATE,
                    theToInit.JSONNAME_CHECKKIND,
                    theToInit.JSONNAME_CHECKORIGIN,
                    theToInit.JSONNAME_CHECKSOURCE,
                    theToInit.JSONNAME_CHECKVALUE
                ];
            
            
            
                theToInit.REQUIREDJSONNAMES = [
                    theToInit.JSONNAME_CHECKWHEN,
                    theToInit.JSONNAME_CHECKKIND,
                    theToInit.JSONNAME_CHECKORIGIN,
                    theToInit.JSONNAME_CHECKSOURCE,
                    theToInit.JSONNAME_CHECKVALUE
                ];
            
            
            
                theToInit.CHECKKIND_TYPE_BOOL      = "TYPE_BOOL";
                theToInit.CHECKKIND_TYPE_STRING    = "TYPE_STRING";
                theToInit.CHECKKIND_TYPE_NUMBER    = "TYPE_NUMBER";
                theToInit.CHECKKIND_TYPE_OBJECT    = "TYPE_OBJECT";
                theToInit.CHECKKIND_TYPE_LIST      = "TYPE_LIST";
                theToInit.CHECKKIND_TYPE_FUNCTION  = "TYPE_FUNCTION";
                theToInit.CHECKKIND_NULL           = "NULL";
                theToInit.CHECKKIND_NOTNULL        = "NOTNULL";
                theToInit.CHECKKIND_EMPTYSTRING    = "EMPTYSTRING";
                theToInit.CHECKKIND_NOTEMPTYSTRING = "NOTEMPTYSTRING";
                theToInit.CHECKKIND_STRINGLEN      = "STRINGLEN";
                theToInit.CHECKKIND_EMPTYLIST      = "EMPTYLIST";
                theToInit.CHECKKIND_NOTEMPTYLIST   = "NOTEMPTYLIST";
                theToInit.CHECKKIND_LISTSIZE       = "LISTSIZE";
                theToInit.CHECKKIND_EMPTYDICT      = "EMPTYDICT";
                theToInit.CHECKKIND_NOTEMPTYDICT   = "NOTEMPTYDICT";
                theToInit.CHECKKIND_DICTSIZE       = "DICTSIZE";
                theToInit.CHECKKIND_EQ             = "EQ";
                theToInit.CHECKKIND_NEQ            = "NEQ";
                theToInit.CHECKKIND_GT             = "GT";
                theToInit.CHECKKIND_GTE            = "GTE";
                theToInit.CHECKKIND_LT             = "LT";
                theToInit.CHECKKIND_LTE            = "LTE";
                theToInit.CHECKKIND_INLIST         = "INLIST";
                theToInit.CHECKKIND_NOTINLIST      = "NOTINLIST";
                theToInit.CHECKKIND_LISTCONTAINS   = "LISTCONTAINS";
                theToInit.CHECKKIND_LISTNOTCONTAINS= "LISTNOTCONTAINS";
                theToInit.CHECKKIND_INKEYS         = "INKEYS";
                theToInit.CHECKKIND_NOTINKEYS      = "NOTINKEYS";
                theToInit.CHECKKIND_INVALUES       = "INVALUES";
                theToInit.CHECKKIND_NOTINVALUES    = "NOTINVALUES";
                theToInit.CHECKKIND_DICTCONTAINSKEY= "DICTCONTAINSKEY";
                theToInit.CHECKKIND_DICTNOTCONTAINSKEY= "DICTNOTCONTAINSKEY";
                theToInit.CHECKKIND_DICTCONTAINSVALUE= "DICTCONTAINSVALUE";
                theToInit.CHECKKIND_DICTNOTCONTAINSVALUE= "DICTNOTCONTAINSVALUE";
            
            
                theToInit.CHECKKINDS = [
                    theToInit.CHECKKIND_TYPE_BOOL,
                    theToInit.CHECKKIND_TYPE_STRING,
                    theToInit.CHECKKIND_TYPE_NUMBER,
                    theToInit.CHECKKIND_TYPE_OBJECT,
                    theToInit.CHECKKIND_TYPE_LIST,
                    theToInit.CHECKKIND_TYPE_FUNCTION,
                    theToInit.CHECKKIND_NULL,
                    theToInit.CHECKKIND_NOTNULL,
                    theToInit.CHECKKIND_EMPTYSTRING,
                    theToInit.CHECKKIND_NOTEMPTYSTRING,
                    theToInit.CHECKKIND_STRINGLEN,
                    theToInit.CHECKKIND_EMPTYLIST,
                    theToInit.CHECKKIND_NOTEMPTYLIST,
                    theToInit.CHECKKIND_LISTSIZE,
                    theToInit.CHECKKIND_EMPTYDICT,
                    theToInit.CHECKKIND_NOTEMPTYDICT,
                    theToInit.CHECKKIND_DICTSIZE,
                    theToInit.CHECKKIND_EQ,
                    theToInit.CHECKKIND_NEQ,
                    theToInit.CHECKKIND_GT,
                    theToInit.CHECKKIND_GTE,
                    theToInit.CHECKKIND_LT,
                    theToInit.CHECKKIND_LTE,
                    theToInit.CHECKKIND_INLIST,
                    theToInit.CHECKKIND_NOTINLIST,
                    theToInit.CHECKKIND_LISTCONTAINS,
                    theToInit.CHECKKIND_LISTNOTCONTAINS,
                    theToInit.CHECKKIND_INKEYS,
                    theToInit.CHECKKIND_NOTINKEYS,
                    theToInit.CHECKKIND_INVALUES,
                    theToInit.CHECKKIND_NOTINVALUES,
                    theToInit.CHECKKIND_DICTCONTAINSKEY,
                    theToInit.CHECKKIND_DICTNOTCONTAINSKEY,
                    theToInit.CHECKKIND_DICTCONTAINSVALUE,
                    theToInit.CHECKKIND_DICTNOTCONTAINSVALUE
                ];
            
            
            
            };
        
        
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
        
        
        
        
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            var aModule = {};
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
        
            var fgNewVoidCheckSpec = function() {
            
                var aCheckSpec = {
                    "checkNegate":     null,
                    "checkKind":       null,
                    "checkSource":     null,
                    "valueConversion": null,
                    "checkValue":      null
                
                };
                if( fgNewVoidCheckSpec){}/* CQT */
            
                return aCheckSpec;
            };
            if( fgNewVoidCheckSpec){}/* CQT */
            aModule.fgNewVoidCheckSpec = fgNewVoidCheckSpec;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgCheckCheck = function( theCheckKind, theCheckNegate, theActualValue, theCheckValue) {
            
                var aCheckResult = aModule.fgCheckCheck_inner( theCheckKind, theActualValue, theCheckValue);
                if( typeof aCheckResult === "undefined") {
                    return undefined;
                }
            
                var aFinalCheckResult = aCheckResult;
                if( aFinalCheckResult){}/* CQT */
                if( theCheckNegate) {
                    if( aFinalCheckResult) {
                        if( aFinalCheckResult){}/* CQT */
                        aFinalCheckResult = false;
                    }
                    else {
                        aFinalCheckResult = true;
                    }
                }
            
                return aFinalCheckResult;
            };
            if( fgCheckCheck){}/* CQT */
            aModule.fgCheckCheck = fgCheckCheck;
        
        
        
        
        
        
        
        
        
            var fgCheckCheck_inner = function( theCheckKind, theActualValue, theCheckValue) {
            
                if( !theCheckKind) {
                    return undefined;
                }
            
            
                var aCheckedCheckResult = undefined;
                var someKeys            = undefined;
                var aNumKeys            = undefined;
                var aValue              = undefined;
            
                try {
                
                    switch( theCheckKind) {
                    
                    
                        case aModule.CHECKKIND_TYPE_BOOL:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof true;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_STRING:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof "";
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_NUMBER:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof (1);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_OBJECT:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof {};
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_LIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0));
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_FUNCTION:
                        
                            aCheckedCheckResult = typeof theActualValue === "function";
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NULL:
                        
                            aCheckedCheckResult = theActualValue === null;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTNULL:
                        
                            aCheckedCheckResult = !( theActualValue === null);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYSTRING:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof "") && ( theActualValue === "");
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYSTRING:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof "") && !( theActualValue === "");
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_STRINGLEN:
                        
                            if( !( typeof theActualValue === typeof "")) {
                                return undefined;
                            }
                        
                            if( !( typeof theCheckValue === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYLIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0)) && ( theActualValue.length === 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYLIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0)) && ( theActualValue.length > 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LISTSIZE:
                        
                            if( !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !( typeof theCheckValue === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYDICT:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys === typeof []) && ( typeof someKeys.length === typeof (0)) && ( someKeys.length === 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYDICT:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys === typeof []) && ( typeof someKeys.length === typeof (0)) && ( someKeys.length > 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTSIZE:
                        
                            if( !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            if( !( typeof someKeys === typeof []) || !( typeof someKeys.length === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = someKeys.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EQ:
                            aCheckedCheckResult = aModule.fgIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NEQ:
                        
                            aCheckedCheckResult = !aModule.fgIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_GT:
                        
                            aCheckedCheckResult = theActualValue > theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_GTE:
                        
                            aCheckedCheckResult = theActualValue >= theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LT:
                        
                            aCheckedCheckResult = theActualValue < theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LTE:
                        
                            aCheckedCheckResult = theActualValue <= theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_INLIST:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof []) || !( typeof theCheckValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theCheckValue.indexOf || !( typeof theCheckValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) >= 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTINLIST:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof []) || !( typeof theCheckValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theCheckValue.indexOf || !( typeof theCheckValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) < 0;
                            return aCheckedCheckResult;
                    
                    
                    
                    
                        case aModule.CHECKKIND_LISTCONTAINS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theActualValue.indexOf || !( typeof theActualValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) >= 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LISTNOTCONTAINS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theActualValue.indexOf || !( typeof theActualValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) < 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTCONTAINSKEY:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTNOTCONTAINSKEY:
                        
                            if( typeof theActualValue === typeof undefined) {
                                return true;
                            }
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = !theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_INKEYS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTINKEYS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = !theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTCONTAINSVALUE:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;
                        
                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theActualValue.hasOwnProperty( aKey)) {
                                    aValue = theActualValue[ aKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return true;
                                    }
                                }
                            }
                        
                            return false;
                    
                    
                    
                        case aModule.CHECKKIND_DICTNOTCONTAINSVALUE:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;
                        
                            for( var otherKeyIdx=0; otherKeyIdx < aNumKeys; otherKeyIdx++) {
                                var otherKey = someKeys[ otherKeyIdx];
                                if( theActualValue.hasOwnProperty( otherKey)) {
                                    aValue = theActualValue[ otherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return false;
                                    }
                                }
                            }
                        
                            return true;
                    
                    
                    
                    
                        case aModule.CHECKKIND_INVALUES:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;
                        
                            for( var anotherKeyIdx=0; anotherKeyIdx < aNumKeys; anotherKeyIdx++) {
                                var anotherKey = someKeys[ anotherKeyIdx];
                                if( theCheckValue.hasOwnProperty( anotherKey)) {
                                    aValue = theCheckValue[ anotherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return true;
                                    }
                                }
                            }
                        
                            return false;
                    
                    
                    
                    
                        case aModule.CHECKKIND_NOTINVALUES:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;
                        
                            for( var yetanotherKeyIdx=0; yetanotherKeyIdx < aNumKeys; yetanotherKeyIdx++) {
                                var yetanotherKey = someKeys[ yetanotherKeyIdx];
                                if( theCheckValue.hasOwnProperty( yetanotherKey)) {
                                    aValue = theCheckValue[ yetanotherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return false;
                                    }
                                }
                            }
                        
                            return true;
                    
                    
                    
                    
                        default:
                    }
                }
                catch( anException) {}
            
            
                return undefined;
            };
            if( fgCheckCheck_inner){}/* CQT */
            aModule.fgCheckCheck_inner = fgCheckCheck_inner;
        
        
        
        
        
        
        
            var fgIsSameAsValueFromTest = function( theCheckValue, theActualValue) {
            
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return false;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return false;
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return true;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return false;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return false;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
            
                if( !( typeof theActualValue === "object" )) {
                    return false;
                }
            
            
            
            
            
                var someCheckValueKeys   = Object.keys( theCheckValue);
                var aNumCheckValueKeys = someCheckValueKeys.length;
            
                var someActualValueKeys = Object.keys( theActualValue);
                var aNumActualValueKeys = someActualValueKeys.length;
            
                if( !( aNumActualValueKeys === aNumCheckValueKeys)) {
                    return false;
                }
            
                for( var aKeyIdx=0; aKeyIdx < aNumCheckValueKeys; aKeyIdx++) {
                    var aKey = someCheckValueKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return false;
                    }
                
                    var aCheckValueSub = theCheckValue[ aKey];
                    var anActualSub   = theActualValue[ aKey];
                
                
                    if( !aModule.fgIsSameAsValueFromTest( aCheckValueSub, anActualSub)) {
                        return false;
                    }
                }
            
            
            
            
            
                var anActualLen    = theActualValue.length;
                var aCheckValueLen = theCheckValue.length;
            
                if( ( typeof anActualLen === "undefined") && ( typeof aCheckValueLen === "undefined")) {
                    return true;
                }
            
                if( ( typeof anActualLen === "undefined") || ( typeof aCheckValueLen === "undefined")) {
                    return false;
                }
            
                if( !( anActualLen === aCheckValueLen)) {
                    return false;
                }
            
                for( var aSubIdx=0; aSubIdx < anActualLen; aSubIdx++) {
                    var anActualListSub    = theActualValue[ aSubIdx];
                    var aCheckValueListSub = theCheckValue[ aSubIdx];
                
                    if( !aModule.fgIsSameAsValueFromTest( aCheckValueListSub, anActualListSub)) {
                        return false;
                    }
                
                }
            
                return true;
            };
            if( fgIsSameAsValueFromTest){}/* CQT */
            aModule.fgIsSameAsValueFromTest = fgIsSameAsValueFromTest;
        
        
        
        
        
            return aModule;
        };
    
    
    
    
    
    
    
      
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
        return anExistingModule;
    
    };
    

 
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("checks", [ 'typesRegistry', 'modbootTypes']).factory("Checks",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_checks", [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer
           );
    }

})();

;'use strict';

/*
 * identifying_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused.  licensed under EUPL  http://www.uiwire.org

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

if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("identifyingTypes", [
        "typesRegistry",
        "modbootTypes",
        "consoleSvce",
        "eventKinds_Common"
    ]);
    
}





;/*
 * identifier_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
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
                                   theSS_Overrider) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "identifier_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.IDENTIFIER_DEFAULTTITLE = "IdentifierDefaultName";
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
            
            
            
            
            
            
            
            
            
            
            
            var pgInitModuleGlobalsOn = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
            
            
            
            
            
            
            
            
            var aIdentifier_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "Identifier";
                
                aPrototype._v_Prototype_Identifier = aPrototype;
                
                aPrototype._v_Module = null;
                
                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;
                
                aPrototype._v_IdsCounter = null;
                
                
                
                
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Identifier( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.IDENTIFIER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_Identifier = function( theTitle) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    this._v_IdsCounter = 0;
                    
                    this._v_Id = this.fReserveId();
                    
                };
                if( _pInit_Identifier){}/* CQT */
                aPrototype._pInit_Identifier = _pInit_Identifier;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                var fReserveId = function() {
                    
                    this._v_IdsCounter += 1;
                    
                    var anId = this._v_IdsCounter;
                    
                    return anId.toString();
                };
                if( fReserveId){}/* CQT */
                aPrototype.fReserveId = fReserveId;
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Identifier_Constructor = function( theTitle) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                
                this._v_Id    = null;
                this._v_Title = null;
                
                this._v_IdsCounter = null;
                
                this._pInit_Identifier( theTitle);
            };
            Identifier_Constructor.prototype = aIdentifier_Prototype;
            
            
            
            
            
            var Identifier_SuperPrototypeConstructor = function() {
                this._v_Prototype = aIdentifier_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Id    = null;
                this._v_Title = null;
                
                this._v_IdsCounter = null;
            };
            Identifier_SuperPrototypeConstructor.prototype = aIdentifier_Prototype;
            
            
            
            var aModule = {
                "Identifier_Prototype": aIdentifier_Prototype,
                "Identifier_Constructor": Identifier_Constructor,
                "Identifier_SuperPrototypeConstructor": Identifier_SuperPrototypeConstructor,
                "Prototype": aIdentifier_Prototype,
                "Constructor": Identifier_Constructor,
                "SuperPrototypeConstructor": Identifier_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;             aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aIdentifier_Prototype._v_Module = aModule;
            
            
            return aModule;
        };
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("IdentifierType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_identifier_type",
            [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer
        );
    }
    
})();







;/*
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
            "TypesRegistrySvce",
            "IdentifierType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_identifier    = require('./identifier_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_identifier
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define( "m_identifier_svce",
            [
                "m_typesregistry",
                "m_identifier_type"
            ],
            aMod_definer
        );
        
    }
    
    
    
})();






;/*
 * record.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
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
                                   theSS_Overrider) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "record_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MAXDATASTRINGLEN = 512;
                theToInit.MAXJSONSTRINGLEN = 2048;
                theToInit.MAXJSONELEMENTSTRINGLEN = 1024;
                
                theToInit.MAXDATASTRINGLEN = 1024;
                
                theToInit.MAXLOGSTRINGLEN = 4096;
                
                theToInit.LIMITLOGSTRINGLEN = true;
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
            
            
            
            
            
            
            
            
            var pgInitModuleGlobalsOn = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
            
            
            
            
            
            
            
            
            
            
            var aRecord_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "Record";
                
                aPrototype._v_Prototype_Record = aPrototype;
                
                aPrototype._v_Module = null;
                
                
                aPrototype._v_Timestamp    = null;
                aPrototype._v_Recorder     = null;
                aPrototype._v_RecordId     = null;
                aPrototype._v_Instance     = null;
                aPrototype._v_Step         = null;
                aPrototype._v_EventKind    = null;
                aPrototype._v_Data         = null;
                aPrototype._v_Reason       = null;
                aPrototype._v_Detail       = null;
                
                
                
                
                
                
                var _pInit = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                    
                    this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                var _pInit_Record = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type = aPrototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Timestamp    = Date.now();
                    this._v_Recorder     = theRecorder;
                    this._v_RecordId     = theRecordId;
                    this._v_Instance     = theInstance;
                    this._v_Step         = theStep;
                    this._v_EventKind    = theEventKind;
                    this._v_Data         = theData;
                    this._v_Reason       = theReason;
                    this._v_Detail       = theDetail;
                };
                if( _pInit_Record){}/* CQT */
                aPrototype._pInit_Record = _pInit_Record;
                
                
                
                
                
                
                
                
                
                
                var fCopyWithoutException = function() {
                    
                    var aCopy = new Record_Constructor(
                        this._v_Recorder,
                        this._v_RecordId,
                        this._v_Instance,
                        this._v_Step,
                        this._v_EventKind,
                        this._v_Data,
                        this._v_Reason,
                        this._v_Detail
                    );
                    
                    aCopy._v_Timestamp = this._v_Timestamp;
                    
                    if( aCopy._v_Data) {
                        if( aCopy._v_Data.name) {
                            
                            if(aCopy._v_Data.name == "Error") {
                                aCopy._v_Data = null;
                            }
                            
                            if( aCopy._v_Data.name == "ForcedException") {
                                aCopy._v_Data = null;
                            }
                        }
                    }
                    
                    if( aCopy._v_Reason) {
                        if( aCopy._v_Reason.name) {
                            
                            if(aCopy._v_Reason.name == "Error") {
                                aCopy._v_Reason = null;
                            }
                            
                            if( aCopy._v_Reason.name == "ForcedException") {
                                aCopy._v_Reason = null;
                            }
                        }
                    }
                    
                    if( aCopy._v_Detail) {
                        if( aCopy._v_Detail.name) {
                            
                            if(aCopy._v_Detail.name == "Error") {
                                aCopy._v_Detail = null;
                            }
                            
                            if( aCopy._v_Detail.name == "ForcedException") {
                                aCopy._v_Detail = null;
                            }
                        }
                    }
                    
                    return aCopy;
                };
                if( fCopyWithoutException){}/* CQT */
                aPrototype.fCopyWithoutException = fCopyWithoutException;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                /*
                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_RecordId
                    };
                    return aIdentifiyingJSON;
                };
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                */
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "recref": this._v_RecordId
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = new Date( this._v_Timestamp).toISOString();
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                var toString = function() {
                    return this.fLogString();
                };
                if( toString){}/* CQT */
                aPrototype.toString = toString;
                
                
                
                
                
                
                
                
                var fLogString = function() {
                    
                    if( !this.LIMITLOGSTRINGLEN) {
                        return this.fLogString_unlimited();
                    }
                    
                    return this.fLogString_limited();
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;
                
                
                
                
                
                
                
                
                var fLogString_unlimited = function() {
                    
                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }
                    
                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}
                    
                    return aLogString;
                };
                if( fLogString_unlimited){}/* CQT */
                aPrototype.fLogString_unlimited = fLogString_unlimited;
                
                
                
                
                
                
                
                
                var fLogString_limited = function() {
                    
                    var aLog = this.fAsLogObject_limited();
                    if( aLog == null) {
                        return "";
                    }
                    
                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}
                    
                    
                    if( aLogString.length < this.MAXLOGSTRINGLEN) {
                        
                        return aLogString;
                    }
                    
                    var aLogStringLimited = aLogString.slice( 0, this.MAXLOGSTRINGLEN);
                    if( aLogStringLimited){}/* CQT */
                    
                    return aLogStringLimited;
                };
                if( fLogString_limited){}/* CQT */
                aPrototype.fLogString_limited = fLogString_limited;
                
                
                
                
                
                
                
                
                
                var fString_NeedsToBeLimited = function( theValue) {
                    
                    if( theValue == null) {
                        return false;
                    }
                    
                    if( typeof theValue == "number") {
                        return false;
                    }
                    
                    if( !( typeof theValue == "string")) {
                        return false;
                    }
                    
                    var aNeedsToBeLimited = theValue.length > this.MAXJSONELEMENTSTRINGLEN;
                    if( aNeedsToBeLimited){}/* CQT */
                    
                    return aNeedsToBeLimited;
                };
                if( fString_NeedsToBeLimited){}/* CQT */
                aPrototype.fString_NeedsToBeLimited = fString_NeedsToBeLimited;
                
                
                
                
                
                
                
                
                
                var fString_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( !( typeof theValue == "string")) {
                        return null;
                    }
                    
                    if( theValue.length < this.MAXJSONELEMENTSTRINGLEN) {
                        
                        return theValue;
                    }
                    
                    var aStrLimited = theValue.slice( 0, this.MAXJSONELEMENTSTRINGLEN);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fString_limited){}/* CQT */
                aPrototype.fString_limited = fString_limited;
                
                
                
                
                
                
                
                
                
                var fJSONValue_orLimited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return this.fString_limited( theValue);
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}
                    
                    if( !( aJSONstr == null)) {
                        if( this.fString_NeedsToBeLimited( aJSONstr)) {
                            var aJSONstrLimited = this.fString_limited( aJSONstr);
                            if( aJSONstrLimited){}/* CQT */
                            
                            return aJSONstrLimited;
                        }
                        
                        return theValue;
                    }
                    
                    
                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */
                    
                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fJSONValue_orLimited){}/* CQT */
                aPrototype.fJSONValue_orLimited = fJSONValue_orLimited;
                
                
                
                
                
                
                
                
                
                
                var fAsLogObject = function() {
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }
                    
                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    var aStep = this.fConvertValueToJSON( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }
                    
                    
                    var aInstance = this.fConvertValueToJSON( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }
                    
                    
                    var aData = this.fConvertValueToJSON( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }
                    
                    var aReason = this.fConvertReasonToJSON( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }
                    
                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;
                
                
                
                
                
                
                
                
                
                
                
                var fAsLogObject_limited = function() {
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }
                    
                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    var aStep = this.fConvertValueToJSON_limited( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }
                    
                    
                    var aInstance = this.fConvertValueToJSON_limited( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }
                    
                    
                    var aData = this.fConvertValueToJSON_limited( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }
                    
                    var aReason = this.fConvertReasonToJSON_limited( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }
                    
                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsLogObject_limited){}/* CQT */
                aPrototype.fAsLogObject_limited = fAsLogObject_limited;
                
                
                
                
                
                
                
                
                
                
                
                var fConvertReasonToJSON = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue.fAsReasonChain) {
                        return theValue.fAsReasonChain();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }
                    
                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }
                    
                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertReasonToJSON){}/* CQT */
                aPrototype.fConvertReasonToJSON = fConvertReasonToJSON;
                
                
                
                
                
                
                
                
                
                
                var fConvertReasonToJSON_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue.fAsReasonChain_limited) {
                        return theValue.fAsReasonChain_limited();
                    }
                    
                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }
                    
                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }
                    
                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }
                    
                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString();
                    var aStr_limited = this.fString_limited( aStr);
                    if( aStr_limited){}/* CQT */
                    
                    return aStr_limited;
                };
                if( fConvertReasonToJSON_limited){}/* CQT */
                aPrototype.fConvertReasonToJSON_limited = fConvertReasonToJSON_limited;
                
                
                
                
                
                
                
                
                
                
                var fAsReasonChain = function( theAlready) {
                    
                    
                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }
                    
                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }
                    
                    anAlready.push( this);
                    
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this._v_Reason.fAsReasonChain( anAlready);
                        }
                        else {
                            aReason = this.fConvertValueToJSON( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }
                    
                    
                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsReasonChain){}/* CQT */
                aPrototype.fAsReasonChain = fAsReasonChain;
                
                
                
                
                
                
                
                
                
                var fAsReasonChain_limited = function( theAlready) {
                    
                    
                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }
                    
                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }
                    
                    anAlready.push( this);
                    
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason.fAsReasonChain_limited( anAlready));
                        }
                        else {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }
                    
                    
                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsReasonChain_limited){}/* CQT */
                aPrototype.fAsReasonChain_limited = fAsReasonChain_limited;
                
                
                
                
                
                
                
                
                
                var fConvertValueToJSON = function( theValue, theIncludeMembers) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }
                    
                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }
                    
                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    if( theIncludeMembers) {
                        if( theValue.fToResultJSON) {
                            return theValue.fToResultJSON();
                        }
                        
                        try {
                            var aJSONstr = JSON.stringify( theValue);
                            if( aJSONstr){}/* CQT */
                            return aJSONstr;
                        }
                        catch( anException) {}
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertValueToJSON){}/* CQT */
                aPrototype.fConvertValueToJSON = fConvertValueToJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fConvertValueToJSON_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fAsLogObject) {
                        return this.fJSONValue_orLimited( theValue.fAsLogObject());
                    }
                    
                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString);
                    }
                    
                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }
                    
                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */
                    
                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fConvertValueToJSON_limited){}/* CQT */
                aPrototype.fConvertValueToJSON_limited = fConvertValueToJSON_limited;
                
                
                
                
                
                
                
                
                
                
                
                
                var fAsJSONable = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fIdentifyingWithTitleString) {
                        return theValue.fIdentifyingWithTitleString();
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }
                    
                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }
                    
                    if( theValue.fToResultJSON) {
                        return theValue.fToResultJSON();
                    }
                    
                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}
                    
                    if( !( aJSONstr == null)) {
                        var aJSONstrlen = aJSONstr.length;
                        if ( aJSONstrlen > this.MAXJSONSTRINGLEN) {
                            return aJSONstr.substr( 0, this.MAXJSONSTRINGLEN);
                        }
                        return theValue;
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fAsJSONable){}/* CQT */
                aPrototype.fAsJSONable = fAsJSONable;
                
                
                
                
                
                
                
                
                
                var fAsJSONable_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fIdentifyingWithTitleString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleString());
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }
                    
                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fToResultJSON) {
                        return this.fJSONValue_orLimited( theValue.fToResultJSON());
                    }
                    
                    var aJSONorStr = this.fJSONValue_orLimited( theValue);
                    if( aJSONorStr){}/* CQT */
                    
                    return aJSONorStr;
                };
                if( fAsJSONable_limited){}/* CQT */
                aPrototype.fAsJSONable_limited = fAsJSONable_limited;
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecordHasEvent_recursive = function( theExpectedEvent, theAlready) {
                    
                    if( !theExpectedEvent) {
                        return false;
                    }
                    
                    if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
                        return false;
                    }
                    
                    if( this._v_EventKind && ( this._v_EventKind == theExpectedEvent)) {
                        return true;
                    }
                    
                    if( theAlready) {
                        theAlready.push( this);
                    }
                    
                    
                    if( this._v_Reason) {
                        if( this._v_Reason.fRecordHasEvent_recursive) {
                            return this._v_Reason.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }
                        
                        if( this._v_Reason._v_Record) {
                            return this._v_Reason._v_Record.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }
                    }
                    
                    return false;
                };
                if( fRecordHasEvent_recursive){}/* CQT */
                aPrototype.fRecordHasEvent_recursive = fRecordHasEvent_recursive;
                
                
                
                
                
                
                return aPrototype;
            })();
            
            
            
            
            var Record_Constructor = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module    = null;
                
                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;
                
                this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
            };
            Record_Constructor.prototype = aRecord_Prototype;
            
            
            
            
            
            var Record_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecord_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module    = null;
                
                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;
            };
            Record_SuperPrototypeConstructor.prototype = aRecord_Prototype;
            
            
            
            
            
            
            
            var aModule = {
                "Record_Prototype": aRecord_Prototype,
                "Record_Constructor": Record_Constructor,
                "Record_SuperPrototypeConstructor": Record_SuperPrototypeConstructor,
                "Prototype": aRecord_Prototype,
                "Constructor": Record_Constructor,
                "SuperPrototypeConstructor": Record_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            aRecord_Prototype._v_Module = aModule;
            
            
            
            
            
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("RecordType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_record_type",
            [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer);
        
    }
    
})();




;/*
 * recordingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051422
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
    
    var aMod_definer =  ( function( theSS_typesregistry,
                                    theSS_Overrider,
                                    theSS_IdentifierSvce) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recordingpolicy_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_IdentifierSvce) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICY_DEFAULTTITLE = "RecordingPolicyDefaultName";
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
            
    
    
    
    
            var aRecordingPolicy_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "RecordingPolicy";
                
                aPrototype._v_Module = null;
                
                aPrototype._v_Prototype_RecordingPolicy = aPrototype;
                

                aPrototype._v_Identifier = null;
                
                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;
                
                aPrototype._v_Recorder    = null;
                
                
                
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_RecordingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicy = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Identifier = theIdentifier;
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }
                    
                    this._v_Id = this._v_Identifier.fReserveId();
                    
                    this._v_Recorder    = theRecorder;
                };
                if( _pInit_RecordingPolicy){}/* CQT */
                aPrototype._pInit_RecordingPolicy = _pInit_RecordingPolicy;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecorder = function() {
                    
                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                aPrototype.fRecorder = fRecorder;
                
                
                
                
                
                
                var pSetRecorder = function( theRecorder) {
                    
                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                aPrototype.pSetRecorder = pSetRecorder;
                
                
                
                
                
                
                
                
                var fRecordRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return null;
                    }
                    
                    /* Subtype responsibility */
                    return null;
                    
                };
                if( fRecordRecord){}/* CQT */
                aPrototype.fRecordRecord = fRecordRecord;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var pRelease = function() {
                    
                    this._v_Identifier       = null;
                    
                    this._v_Id               = null;
                    this._v_Title            = null;
                    
                    this._v_Recorder         = null;
                    
                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;
                
                
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var RecordingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_Identifier = null;
                
                this._v_Id         = null;
                this._v_Title      = null;
                
                this._v_Recorder    = null;
                
                this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicy_Constructor.prototype = aRecordingPolicy_Prototype;
            
            
            
            
            
            var RecordingPolicy_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecordingPolicy_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Identifier = null;
                
                this._v_Id         = null;
                this._v_Title      = null;
                
                this._v_Recorder    = null;
                
            };
            RecordingPolicy_SuperPrototypeConstructor.prototype = aRecordingPolicy_Prototype;
            
            
            
            var aModule = {
                "RecordingPolicy_Prototype": aRecordingPolicy_Prototype,
                "RecordingPolicy_Constructor": RecordingPolicy_Constructor,
                "RecordingPolicy_SuperPrototypeConstructor": RecordingPolicy_SuperPrototypeConstructor,
                "Prototype": aRecordingPolicy_Prototype,
                "Constructor": RecordingPolicy_Constructor,
                "SuperPrototypeConstructor": RecordingPolicy_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aRecordingPolicy_Prototype._v_Module = aModule;
            
            
            return aModule;
        };
    
    
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_IdentifierSvce
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("RecordingPolicyType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_identifier    = require('./identifier_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_identifier
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_recordingpolicy_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_identifier_type"
            ],
            aMod_definer
        );
    }
    
    
    
})();


;/*
 * recordingpolicy_keepall_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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



/* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
 and shall prevent reclamation of their memory by the garbage collector
 Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
 which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
 */

(function () {
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_RecordingPolicyType) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recordingpolicy_keepall_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_RecordingPolicyType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MUSTKEEPRECORDS = true;
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICYKEEPALL_DEFAULTTITLE = "RecordingPolicyKeepAllDefaultName";
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
    
            var aRecordingPolicyKeepAll_Prototype = (function() {
                
                
                
                var aPrototype = new theS_RecordingPolicyType.RecordingPolicy_SuperPrototypeConstructor();
                
                pgInitFromModuleConstants( aPrototype);
                
                
                aPrototype._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;
                
                
                aPrototype._v_Type = "RecordingPolicyKeepAll";
                
                aPrototype._v_Prototype_RecordingPolicyKeepAll = aPrototype;
                
                aPrototype._v_Module = null;
                
                
                
                aPrototype._v_MustKeepRecords = null;
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);
                    
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICYKEEPALL_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicyKeepAll = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_MustKeepRecords = this.MUSTKEEPRECORDS;
                    
                };
                if( _pInit_RecordingPolicyKeepAll){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepAll = _pInit_RecordingPolicyKeepAll;
                
                
                
                
                
                
                
                
                
                
                var pSetMustKeepRecords = function( theMustKeepRecords) {
                    
                    this._v_MustKeepRecords = theMustKeepRecords ? true : false;
                    
                };
                if( pSetMustKeepRecords){}/* CQT */
                aPrototype.pSetMustKeepRecords = pSetMustKeepRecords;
                
                
                
                
                var fMustKeepRecords = function() {
                    
                    return this._v_MustKeepRecords;
                    
                };
                if( fMustKeepRecords){}/* CQT */
                aPrototype.fMustKeepRecords = fMustKeepRecords;
                
                
                
                
                
                
                
                var fRecordRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return null;
                    }
                    
                    if( !this.fMustKeepRecords()) {
                        return null;
                    }
                    
                    
                    if( this._v_Recorder) {
                        this._v_Recorder.pKeepRecord( theRecord);
                    }
                    
                    this.pPruneRecords();
                    
                    var aRecordedRecordPointer = this._v_Recorder.fLastKeptRecordPointer();
                    
                    return aRecordedRecordPointer;
                    
                };
                if( fRecordRecord){}/* CQT */
                aPrototype.fRecordRecord = fRecordRecord;
                
                
                
                
                
                
                
                
                /* Subtype responsibility */
                var pPruneRecords = function() {
                
                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var RecordingPolicyKeepAll_Constructor = function( theTitle, theIdentifier, theRecorder) {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;
                
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_MustKeepRecords = null;
                
                this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepAll_Constructor.prototype = aRecordingPolicyKeepAll_Prototype;
            
            
            
            
            
            var RecordingPolicyKeepAll_SuperPrototypeConstructor = function() {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;
                
                this._v_Prototype = aRecordingPolicyKeepAll_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_MustKeepRecords = null;
                
            };
            RecordingPolicyKeepAll_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepAll_Prototype;
            
            
            
            var aModule = {
                "RecordingPolicyKeepAll_Prototype":   aRecordingPolicyKeepAll_Prototype,
                "RecordingPolicyKeepAll_Constructor": RecordingPolicyKeepAll_Constructor,
                "RecordingPolicy_Constructor":        RecordingPolicyKeepAll_Constructor,
                "RecordingPolicyKeepAll_SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "Prototype": aRecordingPolicyKeepAll_Prototype,
                "Constructor": RecordingPolicyKeepAll_Constructor,
                "SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
    
            aRecordingPolicyKeepAll_Prototype._v_Module = aModule;
            
            
            return aModule;
        };
        
        
        
        
        
        
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_RecordingPolicyType
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("RecordingPolicyKeepAllType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "RecordingPolicyType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            var aM_recordingpolicy = require('./recordingpolicy_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_recordingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recordingpolicy_keepall_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_recordingpolicy_type"
            ],
            aMod_definer
        );
    }
    
    
})();


;/*
 * recordingpolicy_keepsome_type.js
 *
 * Created @author Antonio Carrasco Valero 201510181424
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
                                   theSS_Overrider,
                                   theSS_RecordingPolicyKeepAllType) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recordingpolicy_keepsome_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_RecordingPolicyKeepAllType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MUSTKEEPRECORDSMAXNUMBER = 1000;
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE = "RecordingPolicyKeepSomeDefaultName";
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
            
            
            
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aRecordingPolicyKeepSome_Prototype = (function() {
                
                
                
                var aPrototype = new theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_SuperPrototypeConstructor();
                
                pgInitFromModuleConstants( aPrototype);
                
                
                aPrototype._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;
                
                aPrototype._v_Type = "RecordingPolicyKeepSome";
                
                aPrototype._v_Prototype_RecordingPolicyKeepSome = aPrototype;
                
                aPrototype._v_Module = null;
                
                
                
                aPrototype._v_MustKeepRecordsMaxNumber = null;
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);
                    
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicyKeepSome = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_MustKeepRecordsMaxNumber = this.MUSTKEEPRECORDSMAXNUMBER;
                    
                };
                if( _pInit_RecordingPolicyKeepSome){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepSome = _pInit_RecordingPolicyKeepSome;
                
                
                
                
                
                
                
                
                
                
                
                
                var pSetMustKeepRecordsMaxNumber = function( theMustKeepRecordsMaxNumber) {
                    
                    this._v_MustKeepRecordsMaxNumber = theMustKeepRecordsMaxNumber;
                    
                };
                if( pSetMustKeepRecordsMaxNumber){}/* CQT */
                aPrototype.pSetMustKeepRecordsMaxNumber = pSetMustKeepRecordsMaxNumber;
                
                
                
                
                
                
                var fMustKeepRecordsMaxNumber = function() {
                    
                    return this._v_MustKeepRecordsMaxNumber;
                    
                };
                if( fMustKeepRecordsMaxNumber){}/* CQT */
                aPrototype.fMustKeepRecordsMaxNumber = fMustKeepRecordsMaxNumber;
                
                
                
                
                
                
                
                
                
                
                var pPruneRecords = function() {
                    
                    this._v_Prototype_RecordingPolicyKeepAll.pPruneRecords.apply( this);
                    
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    this._v_Recorder.pDiscardRecordsToMaxNumber( this.fMustKeepRecordsMaxNumber());
                    
                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var RecordingPolicyKeepSome_Constructor = function( theTitle, theIdentifier, theRecorder) {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;
                
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_MustKeepRecordsMaxNumber = null;
                
                this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepSome_Constructor.prototype = aRecordingPolicyKeepSome_Prototype;
            
            
            
            
            
            var RecordingPolicyKeepSome_SuperPrototypeConstructor = function() {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;
                
                this._v_Prototype = aRecordingPolicyKeepSome_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_MustKeepRecordsMaxNumber = null;
                
            };
            RecordingPolicyKeepSome_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepSome_Prototype;
            
            
            
            var aModule = {
                "RecordingPolicyKeepSome_Prototype":   aRecordingPolicyKeepSome_Prototype,
                "RecordingPolicyKeepSome_Constructor": RecordingPolicyKeepSome_Constructor,
                "RecordingPolicy_Constructor":         RecordingPolicyKeepSome_Constructor,
                "RecordingPolicyKeepSome_SuperPrototypeConstructor": RecordingPolicyKeepSome_SuperPrototypeConstructor,
                "Prototype": aRecordingPolicyKeepSome_Prototype,
                "Constructor": RecordingPolicyKeepSome_Constructor,
                "SuperPrototypeConstructor": RecordingPolicyKeepSome_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aRecordingPolicyKeepSome_Prototype._v_Module = aModule;
            
            
            
            
            
            return aModule;
        };
        
        
        
        
      
        
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_RecordingPolicyKeepAllType
        
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("RecordingPolicyKeepSomeType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "RecordingPolicyKeepAllType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            var aM_recordingpolicy = require('./recordingpolicy_keepall_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_recordingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recordingpolicy_keepsome_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_recordingpolicy_keepall_type"
            ],
            aMod_definer
        );
    }
    
    
})();





;/*
 * recordingpolicy_keeprecent_type.js
 *
 * Created @author Antonio Carrasco Valero 201510171137
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
                                   theSS_Overrider,
                                   theSS_RecordingPolicyKeepSomeType) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recordingpolicy_keeprecent_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_RecordingPolicyKeepSomeType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MUSTKEEPRECORDSRECENTMILLIS = 5 * 60 * 1000;
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE = "RecordingPolicyKeepRecentDefaultName";
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aRecordingPolicyKeepRecent_Prototype = (function() {
                
                
                
                var aPrototype = new theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_SuperPrototypeConstructor();
                
                pgInitFromModuleConstants( aPrototype);
                
                
                aPrototype._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;
                
                aPrototype._v_Type = "RecordingPolicyKeepRecent";
                
                aPrototype._v_Prototype_RecordingPolicyKeepRecent = aPrototype;
                
                aPrototype._v_Module = null;
                
                
                
                aPrototype._v_MustKeepRecordsRecentMillis = null;
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);
                    
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicyKeepRecent = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_MustKeepRecordsRecentMillis = this.MUSTKEEPRECORDSRECENTMILLIS;
                    
                };
                if( _pInit_RecordingPolicyKeepRecent){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepRecent = _pInit_RecordingPolicyKeepRecent;
                
                
                
                
                
                
                
                
                
                
                var pSetMustKeepRecordsRecentMillis = function( theMustKeepRecordsRecentMillis) {
                    
                    this._v_MustKeepRecordsRecentMillis = theMustKeepRecordsRecentMillis;
                    
                };
                if( pSetMustKeepRecordsRecentMillis){}/* CQT */
                aPrototype.pSetMustKeepRecordsRecentMillis = pSetMustKeepRecordsRecentMillis;
                
                
                
                
                
                
                
                var fMustKeepRecordsRecentMillis = function() {
                    
                    return this._v_MustKeepRecordsRecentMillis;
                    
                };
                if( fMustKeepRecordsRecentMillis){}/* CQT */
                aPrototype.fMustKeepRecordsRecentMillis = fMustKeepRecordsRecentMillis;
                
                
                
                
                
                
                
                
                
                
                var pPruneRecords = function() {
                    
                    this._v_Prototype_RecordingPolicyKeepSome.pPruneRecords.apply( this);
                    
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    this._v_Recorder.pDiscardRecordsOlderThan( this.fMustKeepRecordsRecentMillis());
                    
                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var RecordingPolicyKeepRecent_Constructor = function( theTitle, theIdentifier, theRecorder) {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;
                
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_MustKeepRecordsRecentMillis = null;
                
                this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepRecent_Constructor.prototype = aRecordingPolicyKeepRecent_Prototype;
            
            
            
            
            
            var RecordingPolicyKeepRecent_SuperPrototypeConstructor = function() {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;
                
                this._v_Prototype = aRecordingPolicyKeepRecent_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_MustKeepRecordsRecentMillis = null;
                
            };
            RecordingPolicyKeepRecent_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepRecent_Prototype;
            
            
            
            var aModule = {
                "RecordingPolicyKeepRecent_Prototype":   aRecordingPolicyKeepRecent_Prototype,
                "RecordingPolicyKeepRecent_Constructor": RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicy_Constructor":           RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicyKeepRecent_SuperPrototypeConstructor": RecordingPolicyKeepRecent_SuperPrototypeConstructor,
                "Prototype": aRecordingPolicyKeepRecent_Prototype,
                "Constructor": RecordingPolicyKeepRecent_Constructor,
                "SuperPrototypeConstructor": RecordingPolicyKeepRecent_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aRecordingPolicyKeepRecent_Prototype._v_Module = aModule;
            
            
            
            
            
            return aModule;
        };
        
        
        
        
        
        
     
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_RecordingPolicyKeepSomeType
        
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("RecordingPolicyKeepRecentType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "RecordingPolicyKeepSomeType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_recordingpolicy = require('./recordingpolicy_keepsome_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_recordingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recordingpolicy_keeprecent_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_recordingpolicy_keepsome_type"
            ],
            aMod_definer
        );
    }
    
    
})();


;/*
 * dumpingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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
    
    var aMod_definer =  ( function( theSS_typesregistry,
                                    theSS_Overrider,
                                    theSS_IdentifierSvce,
                                    theSS_ConsoleSvce) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "dumpingpolicy_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_ConsoleSvce) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MAYDUMPRECORDS = true;
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.DUMPINGPOLICY_DEFAULTTITLE = "DumpingPolicyDefaultName";
                
                theToInit.RECORDPOINTERNAME_LASTDUMPED = "RECORDPOINTERNAME_LASTDUMPED";
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            var aDumpingPolicy_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "DumpingPolicy";
                
                aPrototype._v_Module = null;
                
                aPrototype._v_Prototype_DumpingPolicy = aPrototype;
                
                
                aPrototype._v_Identifier = null;
                
                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;
                
                aPrototype._v_Recorder    = null;
                
                
                aPrototype._v_MayDumpRecords   = null;
                
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_DumpingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.DUMPINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_DumpingPolicy = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Identifier = theIdentifier;
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }
                    
                    this._v_Id = this._v_Identifier.fReserveId();
                    
                    this._v_Recorder    = theRecorder;
                    
                    this._v_MayDumpRecords   = this.MAYDUMPRECORDS;
                    
                };
                if( _pInit_DumpingPolicy){}/* CQT */
                aPrototype._pInit_DumpingPolicy = _pInit_DumpingPolicy;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                var fConsoleService = function() {
                    
                    return theS_ConsoleSvce;
                    
                };
                if( fConsoleService){}/* CQT */
                aPrototype.fConsoleService = fConsoleService;
                
                
                
                
                
                
                
                
                var fRecorder = function() {
                    
                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                aPrototype.fRecorder = fRecorder;
                
                
                
                
                
                
                var pSetRecorder = function( theRecorder) {
                    
                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                aPrototype.pSetRecorder = pSetRecorder;
                
                
                
                
                
                
                
                
                
                var pSetMayDumpRecords = function( theMayDumpRecords) {
                    
                    this._v_MayDumpRecords = !!theMayDumpRecords;
                    
                };
                if( pSetMayDumpRecords){}/* CQT */
                aPrototype.pSetMayDumpRecords = pSetMayDumpRecords;
                
                
                
                
                var fMayDumpRecords = function() {
                    
                    return this._v_MayDumpRecords;
                    
                };
                if( fMayDumpRecords){}/* CQT */
                aPrototype.fMayDumpRecords = fMayDumpRecords;
                
                
                
                
                
                
                
                var fMustDumpRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return false;
                    }
                    
                    if( !this.fMayDumpRecords()) {
                        return false;
                    }
                    
                    /* Subtype responsibility */
                    
                    return true;
                    
                };
                if( fMustDumpRecord){}/* CQT */
                aPrototype.fMustDumpRecord = fMustDumpRecord;
                
                
                
                
                
                
                var pDumpRecord = function( theRecord, theRecordedRecordPointer) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    if( !this.fMustDumpRecord( theRecord)) {
                        return;
                    }
                    
                    var aConsoleService = this.fConsoleService();
                    if( !aConsoleService) {
                        return;
                    }
                    
                    
                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }
                    
                    
                    var aLogString = theRecord.fLogString();
                    if( !aLogString) {
                        return;
                    }
                    
                    aConsoleService.log(  "," + aLogString);
                    
                    
                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, theRecordedRecordPointer);
                    
                };
                if( pDumpRecord){}/* CQT */
                aPrototype.pDumpRecord = pDumpRecord;
                
                
                
                
                
                
                
                
                var pRelease = function() {
                    
                    this._v_Identifier       = null;
                    
                    this._v_Id               = null;
                    this._v_Title            = null;
                    
                    this._v_Recorder         = null;
                    
                    this._v_MayDumpRecords   = null;
                    
                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var DumpingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_Identifier       = null;
                
                this._v_Id               = null;
                this._v_Title            = null;
                
                this._v_Recorder         = null;
                
                this._v_MayDumpRecords   = null;
                
                this._pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicy_Constructor.prototype = aDumpingPolicy_Prototype;
            
            
            
            
            
            var DumpingPolicy_SuperPrototypeConstructor = function() {
                this._v_Prototype = aDumpingPolicy_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Identifier       = null;
                
                this._v_Id               = null;
                this._v_Title            = null;
                
                this._v_Recorder         = null;
                
                this._v_MayDumpRecords   = null;
                
            };
            DumpingPolicy_SuperPrototypeConstructor.prototype = aDumpingPolicy_Prototype;
            
            
            
            var aModule = {
                "DumpingPolicy_Prototype": aDumpingPolicy_Prototype,
                "DumpingPolicy_Constructor": DumpingPolicy_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor": DumpingPolicy_SuperPrototypeConstructor,
                "Prototype": aDumpingPolicy_Prototype,
                "Constructor": DumpingPolicy_Constructor,
                "SuperPrototypeConstructor": DumpingPolicy_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            aDumpingPolicy_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_ConsoleSvce
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("DumpingPolicyType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "ConsoleSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_identifier    = require('./identifier_type');
            var aM_console       = require('../utils/console_svce');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_identifier,
                aM_console
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_dumpingpolicy_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_identifier_type",
                "m_console_svce"
            ],
                aMod_definer
        );
    }
    
})();







;/*
 * dumpingpolicy_filterkinds_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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
                                   theSS_Overrider,
                                   theSS_DumpingPolicyType,
                                   theSS_EventKinds_Common) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "dumpingpolicy_filterkinds_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_DumpingPolicyType,
                                     theS_EventKinds_Common) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE = true;
                
                
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
                
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                
                
                if( !theToInit) {
                    return;
                }
                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyFilterKindsDefaultName";
                
                
                
                
                if( theToInit.EVENTSSETNOTFORCONSOLE) {
                    
                    if( typeof theToInit.EVENTSSETNOTFORCONSOLE === "string") {
                        var anEventsSetNotForConsole = theS_EventKinds_Common[ theToInit.EVENTSSETNOTFORCONSOLE];
                        if( anEventsSetNotForConsole) {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTSSETNOTFORCONSOLE;
                    }
                }
                else {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_EventKinds_Common.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_EventKinds_Common.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aDumpingPolicyFilterKinds_Prototype = (function() {
                
                
                var aPrototype = new theS_DumpingPolicyType.DumpingPolicy_SuperPrototypeConstructor();
                
                pgInitFromModuleConstants( aPrototype);
                
                aPrototype._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicy_Prototype;
                
                aPrototype._v_Type = "DumpingPolicyFilterKinds";
    
                aPrototype._v_Module = null;
    
                aPrototype._v_Prototype_DumpingPolicyFilterKinds = aPrototype;
                
                
                aPrototype._v_EventKindsNotForConsole = null;
                
                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                if( aPrototype.EVENTKINDS_NOTFORCONSOLE) {
                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE.slice();
                }
                
                
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_DumpingPolicyFilterKinds = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_DumpingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                };
                if( _pInit_DumpingPolicyFilterKinds){}/* CQT */
                aPrototype._pInit_DumpingPolicyFilterKinds = _pInit_DumpingPolicyFilterKinds;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    aPrototype._v_EventKindsNotForConsole = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_inPrototype = fSetEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                var fFewerEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }
                    
                    
                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {
                                
                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }
                    
                    
                    aPrototype._v_EventKindsNotForConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fFewerEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsNotForConsole_inPrototype = fFewerEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                
                
                var fMoreEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }
                    
                    
                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    aPrototype._v_EventKindsNotForConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fMoreEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsNotForConsole_inPrototype = fMoreEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsNotForConsole = function( theEventKinds) {
                    
                    this._v_EventKindsNotForConsole = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole = fSetEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                var fFewerEventKindsNotForConsole = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsNotForConsole.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {
                                
                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }
                    
                    
                    this._v_EventKindsNotForConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotForConsole
                };
                if( fFewerEventKindsNotForConsole){}/* CQT */
                aPrototype.fFewerEventKindsNotForConsole = fFewerEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                var fMoreEventKindsNotForConsole = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsNotForConsole.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    this._v_EventKindsNotForConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotForConsole
                };
                if( fMoreEventKindsNotForConsole){}/* CQT */
                aPrototype.fMoreEventKindsNotForConsole = fMoreEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fMustDumpRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return false;
                    }
                    
                    if( !this.fMayDumpRecords()) {
                        return false;
                    }
                    
                    
                    var anEventKind = theRecord._v_EventKind;
                    if( !anEventKind) {
                        return false;
                    }
                    
                    var someEventKindsNotForConsole = this.fEventKindsNotForConsole();
                    if( !someEventKindsNotForConsole) {
                        return true;
                    }
                    
                    if( someEventKindsNotForConsole.indexOf( anEventKind) < 0) {
                        return true;
                    }
                    if( null){}/* CQT */
    
                    return false;
                    
                };
                if( fMustDumpRecord){}/* CQT */
                aPrototype.fMustDumpRecord = fMustDumpRecord;
                
                
                
                
                
                
                
                var fEventKindsNotForConsole = function() {
                    
                    /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                    
                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsNotForConsole */
                    if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {
                        
                        if( !this._v_EventKindsNotForConsole) {
                            return null;
                        }
                        
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    
                    if( !this._v_EventKindsNotForConsole) {
                        return null;
                    }
                    
                    return this._v_EventKindsNotForConsole;
                    
                };
                if( fEventKindsNotForConsole){}/* CQT */
                aPrototype.fEventKindsNotForConsole = fEventKindsNotForConsole;
                
                
                
                
                
                var pRelease = function() {
                    
                    this._v_Prototype_DumpingPolicy.pRelease.apply( this);
                    
                    if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {
                        delete( this._v_EventKindsNotForConsole);
                    }
                    
                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var DumpingPolicyFilterKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicyFilterKinds_Prototype;
                
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                
                this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyFilterKinds_Constructor.prototype = aDumpingPolicyFilterKinds_Prototype;
            
            
            
            
            
            var DumpingPolicyFilterKinds_SuperPrototypeConstructor = function() {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicyFilterKinds_Prototype;
                
                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
                
                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                
            };
            DumpingPolicyFilterKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyFilterKinds_Prototype;
            
            
            
            var aModule = {
                "DumpingPolicyFilterKinds_Prototype":                 aDumpingPolicyFilterKinds_Prototype,
                "DumpingPolicyFilterKinds_Constructor":               DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicy_Constructor":                          DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicyFilterKinds_SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeConstructor,
                "Prototype": aDumpingPolicyFilterKinds_Prototype,
                "Constructor": DumpingPolicyFilterKinds_Constructor,
                "SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
        
            aDumpingPolicyFilterKinds_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_DumpingPolicyType,
                theSS_EventKinds_Common
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("DumpingPolicyFilterKindsType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "DumpingPolicyType",
            "EventKinds_Common",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_dumpingpolicy = require('./dumpingpolicy_type');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_dumpingpolicy,
                aM_eventkinds_common
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_dumpingpolicy_filterkinds_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_dumpingpolicy_type",
                "m_eventkinds_common"
            ],
            aMod_definer
            
        );
    }
    
    
    
})();

;/*
 * dumpingpolicy_triggerkinds_type.js
 *
 * Created @author Antonio Carrasco Valero 201610191704
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
                                   theSS_Overrider,
                                   theSS_DumpingPolicyFilterKindsType,
                                   theSS_EventKinds_Common) {
                
    
        var ComponentName    = "prettytype";
        var ModuleName     = "dumpingpolicy_triggerkinds_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_DumpingPolicyFilterKindsType,
                                     theS_EventKinds_Common) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP = true;
                
                theToInit.EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ALL";
                theToInit.EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ERRORS";
                
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                
                
                if( !theToInit) {
                    return;
                }
                
                
                
                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyTriggerKindsDefaultName";
                
                
                
                if( theToInit.EVENTSSETTRIGGERINGDUMP) {
                    
                    if( typeof theToInit.EVENTSSETTRIGGERINGDUMP === "string") {
                        var anEventsSetTriggeringDump = theS_EventKinds_Common[ theToInit.EVENTSSETTRIGGERINGDUMP];
                        if( anEventsSetTriggeringDump) {
                            theToInit.EVENTKINDS_TRIGGERINGDUMP = anEventsSetTriggeringDump.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_TRIGGERINGDUMP = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_TRIGGERINGDUMP = theToInit.EVENTSSETTRIGGERINGDUMP;
                    }
                }
                else {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_EventKinds_Common.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_TRIGGERINGDUMP) {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_EventKinds_Common.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
                }
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aDumpingPolicyTriggerKinds_Prototype = (function() {
                
                
                var aPrototype = new theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_SuperPrototypeConstructor();
                
                pgInitFromModuleConstants( aPrototype);
                
                aPrototype._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_Prototype;
                
                aPrototype._v_Type = "DumpingPolicyTriggerKinds";
    
                aPrototype._v_Module = null;

                aPrototype._v_Prototype_DumpingPolicyTriggerKinds = aPrototype;
                
                
                aPrototype._v_EventKindsTriggeringDump = null;
                
                /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
                if( aPrototype.EVENTKINDS_TRIGGERINGDUMP) {
                    aPrototype._v_EventKindsTriggeringDump = aPrototype.EVENTKINDS_TRIGGERINGDUMP.slice();
                }
                
                
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_DumpingPolicyTriggerKinds = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_DumpingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                };
                if( _pInit_DumpingPolicyTriggerKinds){}/* CQT */
                aPrototype._pInit_DumpingPolicyTriggerKinds = _pInit_DumpingPolicyTriggerKinds;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsTriggeringDump_inPrototype = function( theEventKinds) {
                    
                    aPrototype._v_EventKindsTriggeringDump = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return aPrototype._v_EventKindsTriggeringDump;
                };
                if( fSetEventKindsTriggeringDump_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsTriggeringDump_inPrototype = fSetEventKindsTriggeringDump_inPrototype;
                
                
                
                
                
                var fFewerEventKindsTriggeringDump_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = aPrototype._v_EventKindsTriggeringDump.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {
                                
                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }
                    
                    
                    aPrototype._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return aPrototype._v_EventKindsTriggeringDump;
                };
                if( fFewerEventKindsTriggeringDump_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsTriggeringDump_inPrototype = fFewerEventKindsTriggeringDump_inPrototype;
                
                
                
                
                
                
                
                var fMoreEventKindsTriggeringDump_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = aPrototype._v_EventKindsTriggeringDump.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    aPrototype._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return aPrototype._v_EventKindsTriggeringDump;
                };
                if( fMoreEventKindsTriggeringDump_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsTriggeringDump_inPrototype = fMoreEventKindsTriggeringDump_inPrototype;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsTriggeringDump = function( theEventKinds) {
                    
                    this._v_EventKindsTriggeringDump = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return this._v_EventKindsTriggeringDump;
                };
                if( fSetEventKindsTriggeringDump){}/* CQT */
                aPrototype.fSetEventKindsTriggeringDump = fSetEventKindsTriggeringDump;
                
                
                
                
                
                
                
                
                
                
                var fFewerEventKindsTriggeringDump = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    if( !this._v_EventKindsTriggeringDump) {
                        this._v_EventKindsTriggeringDump = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsTriggeringDump.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {
                                
                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }
                    
                    
                    this._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return this._v_EventKindsTriggeringDump
                };
                if( fFewerEventKindsTriggeringDump){}/* CQT */
                aPrototype.fFewerEventKindsTriggeringDump = fFewerEventKindsTriggeringDump;
                
                
                
                
                
                
                
                
                
                
                var fMoreEventKindsTriggeringDump = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    if( !this._v_EventKindsTriggeringDump) {
                        this._v_EventKindsTriggeringDump = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsTriggeringDump.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    this._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return this._v_EventKindsTriggeringDump
                };
                if( fMoreEventKindsTriggeringDump){}/* CQT */
                aPrototype.fMoreEventKindsTriggeringDump = fMoreEventKindsTriggeringDump;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var pDumpRecord = function( theRecord, theRecordedRecordPointer) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    var aConsoleService = this.fConsoleService();
                    if( !aConsoleService) {
                        return;
                    }
                    
                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }
                    
                    
                    if( !this.fRecordTriggersDump( theRecord)) {
                        return;
                    }
                    
                    
                    
                    
                    var aRecordPointerLastDumped = -1;
                    
                    var aRecordPointerLastDumpedValue = aRecorder.fGetRecordPointerNamed( this.RECORDPOINTERNAME_LASTDUMPED);
                    
                    if( typeof aRecordPointerLastDumpedValue === "number") {
                        
                        if( !isNaN( aRecordPointerLastDumpedValue)) {
                            
                            if( aRecordPointerLastDumpedValue >= 0) {
                                
                                aRecordPointerLastDumped = aRecordPointerLastDumpedValue;
                            }
                        }
                    }
                    
                    
                    
                    
                    var aFirstRecordIndexToDump = 0;
                    if( aRecordPointerLastDumped >= 0) {
                        aFirstRecordIndexToDump = aRecordPointerLastDumped + 1;
                    }
                    
                    var someRecordsToDump = aRecorder.fKeptRecordsSlice( aFirstRecordIndexToDump);
                    if( !someRecordsToDump) {
                        return;
                    }
                    
                    
                    var aNumRecordsToDump = someRecordsToDump.length;
                    if( !aNumRecordsToDump) {
                        return;
                    }
                    
                    for( var aRecordToDumpIdx=0; aRecordToDumpIdx < aNumRecordsToDump; aRecordToDumpIdx++) {
                        var aRecordToDump = someRecordsToDump[ aRecordToDumpIdx];
                        if( aRecordToDump) {
                            
                            if( !this.fMustDumpRecord( aRecordToDump)) {
                                continue;
                            }
                            
                            var aLogString = aRecordToDump.fLogString();
                            if( !aLogString) {
                                return;
                            }
                            
                            aConsoleService.log(  "," + aLogString);
                        }
                    }
                    
                    
                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, null /* /* If not a record pointer in range by array index then point to last record */);
                    
                };
                if( pDumpRecord){}/* CQT */
                aPrototype.pDumpRecord = pDumpRecord;
                
                
                
                
                
                
                
                
                
                
                var fRecordTriggersDump = function( theRecord) {
                    
                    if( !theRecord) {
                        return false;
                    }
                    
                    if( !this.fMayDumpRecords()) {
                        return false;
                    }
                    
                    
                    var anEventKind = theRecord._v_EventKind;
                    if( !anEventKind) {
                        return false;
                    }
                    
                    var someEventKindsTriggeringDump = this.fEventKindsTriggeringDump();
                    if( !someEventKindsTriggeringDump) {
                        return false;
                    }
                    
                    if( someEventKindsTriggeringDump.indexOf( anEventKind) < 0) {
                        return false;
                    }
                    if( 0){}/* CQT */
    
                    return true;
                    
                };
                if( fRecordTriggersDump){}/* CQT */
                aPrototype.fRecordTriggersDump = fRecordTriggersDump;
                
                
                
                
                
                
                
                var fEventKindsTriggeringDump = function() {
                    
                    /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
                    
                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsTriggeringDump */
                    if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {
                        
                        if( !this._v_EventKindsTriggeringDump) {
                            return null;
                        }
                        
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    
                    if( !this._v_EventKindsTriggeringDump) {
                        return null;
                    }
                    
                    return this._v_EventKindsTriggeringDump;
                    
                };
                if( fEventKindsTriggeringDump){}/* CQT */
                aPrototype.fEventKindsTriggeringDump = fEventKindsTriggeringDump;
                
                
                
                
                
                var pRelease = function() {
                    
                    this._v_Prototype_DumpingPolicyFilterKinds.pRelease.apply( this);
                    
                    if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {
                        delete( this._v_EventKindsTriggeringDump);
                    }
                    
                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var DumpingPolicyTriggerKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyTriggerKinds_Prototype;
                
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
                
                this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyTriggerKinds_Constructor.prototype = aDumpingPolicyTriggerKinds_Prototype;
            
            
            
            
            
            var DumpingPolicyTriggerKinds_SuperPrototypeConstructor = function() {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyTriggerKinds_Prototype;
                
                this._v_Prototype = aDumpingPolicyTriggerKinds_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
                
                /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
                
            };
            DumpingPolicyTriggerKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyTriggerKinds_Prototype;
            
            
            
            var aModule = {
                "DumpingPolicyTriggerKinds_Prototype":                 aDumpingPolicyTriggerKinds_Prototype,
                "DumpingPolicyTriggerKinds_Constructor":               DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicy_Constructor":                           DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicyTriggerKinds_SuperPrototypeConstructor": DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "Prototype": aDumpingPolicyTriggerKinds_Prototype,
                "Constructor": DumpingPolicyTriggerKinds_Constructor,
                "SuperPrototypeConstructor": DumpingPolicyTriggerKinds_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            aDumpingPolicyTriggerKinds_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        

    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_DumpingPolicyFilterKindsType,
                theSS_EventKinds_Common
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("DumpingPolicyTriggerKindsType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "DumpingPolicyFilterKindsType",
            "EventKinds_Common",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_dumpingpolicy = require('./dumpingpolicy_filterkinds_type');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_dumpingpolicy,
                aM_eventkinds_common
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_dumpingpolicy_triggerkinds_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_dumpingpolicy_filterkinds_type",
                "m_eventkinds_common"
            ],
            aMod_definer
        );
    }
    
})();

;/*
 * recorder_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
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
                                   theSS_Overrider,
                                   theSS_IdentifierSvce,
                                   theSS_IdentifierType,
                                   theSS_RecordType,
                                   theSS_RecordingPolicyType,
                                   theSS_DumpingPolicyType) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recorder_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_IdentifierType,
                                     theS_RecordType,
                                     theS_RecordingPolicyType,
                                     theS_DumpingPolicyType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.RECORDER_DEFAULTTITLE = "RecorderDefaultName";
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aRecorder_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "Recorder";
                
                aPrototype._v_Module = null;
                
                aPrototype._v_Prototype_Recorder = aPrototype;
                
                
                aPrototype._v_Identifier = null;
                
                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;
                
                aPrototype._v_Records    = null;
                aPrototype._v_RecordPointersByName = null;
                
                
                aPrototype._v_RecordsIdentifier    = null;
                
                aPrototype._v_RecordingPolicy = null;
                aPrototype._v_DumpingPolicy   = null;
                
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_Recorder( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_Recorder = function( theTitle, theIdentifier) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Identifier = theIdentifier;
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }
                    
                    this._v_Id = this._v_Identifier.fReserveId();
                    
                    this._v_RecordsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");
                    
                    
                    this._v_Records    = [ ];
                    this._v_RecordPointersByName = { };
                    
                    this.pClearKeptRecords();
                    
                    /* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
                     and shall prevent reclamation of their memory by the garbage collector
                     Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
                     which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
                     */
                    this._v_RecordingPolicy = new theS_RecordingPolicyType.RecordingPolicy_Constructor(     "(For-" + this._v_Title + ")", this._v_Identifier, this);
                    
                    this._v_DumpingPolicy   = new theS_DumpingPolicyType.DumpingPolicy_Constructor( "(For-" + this._v_Title + ")", this._v_Identifier, this);
                    
                };
                if( _pInit_Recorder){}/* CQT */
                aPrototype._pInit_Recorder = _pInit_Recorder;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                var fEventsToResultJSON = function( ) {
                    
                    var someCommonObjects = null;
                    var aJSON = this.fToResultJSON( someCommonObjects);
                    
                    var someRecordLogObjects = [];
                    aJSON.records = someRecordLogObjects;
                    
                    if( this._v_Records) {
                        var aNumRecords = this._v_Records.length;
                        for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                            var aRecord = this._v_Records[ aRecordIdx];
                            var aRecordLogObject = aRecord.fAsLogObject();
                            if( aRecordLogObject) {
                                someRecordLogObjects.push( aRecordLogObject);
                            }
                        }
                    }
                    
                    return aJSON;
                };
                if( fEventsToResultJSON){}/* CQT */
                aPrototype.fEventsToResultJSON = fEventsToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecordingPolicy = function() {
                    
                    return this._v_RecordingPolicy;
                    
                };
                if( fRecordingPolicy){}/* CQT */
                aPrototype.fRecordingPolicy = fRecordingPolicy;
                
                
                
                
                
                
                
                var pSetRecordingPolicy = function( theRecordingPolicy) {
                    
                    if( this._v_RecordingPolicy) {
                        if( this._v_RecordingPolicy === theRecordingPolicy) {
                            return;
                        }
                        
                        if( this._v_RecordingPolicy.pRelease && ( typeof this._v_RecordingPolicy.pRelease === "function")) {
                            this._v_RecordingPolicy.pRelease();
                        }
                    }
                    
                    this._v_RecordingPolicy = theRecordingPolicy;
                    
                    var aRecordingPolicy_recorder = null;
                    if( theRecordingPolicy.fRecorder && ( typeof theRecordingPolicy.fRecorder === "function")) {
                        aRecordingPolicy_recorder = theRecordingPolicy.fRecorder();
                    }
                    
                    if( !aRecordingPolicy_recorder) {
                        return;
                    }
                    
                    if( !( aRecordingPolicy_recorder === this)) {
                        theRecordingPolicy.pSetRecorder( this);
                    }
                    
                };
                if( pSetRecordingPolicy){}/* CQT */
                aPrototype.pSetRecordingPolicy = pSetRecordingPolicy;
                
                
                
                
                
                
                
                
                
                var fDumpingPolicy = function() {
                    
                    return this._v_DumpingPolicy;
                    
                };
                if( fDumpingPolicy){}/* CQT */
                aPrototype.fDumpingPolicy = fDumpingPolicy;
                
                
                
                
                
                
                
                var pSetDumpingPolicy = function( theDumpingPolicy) {
                    
                    if( this._v_DumpingPolicy) {
                        if( this._v_DumpingPolicy.pRelease && ( typeof this._v_DumpingPolicy.pRelease === "function")) {
                            this._v_DumpingPolicy.pRelease();
                        }
                    }
                    
                    this._v_DumpingPolicy = theDumpingPolicy;
                    
                    var aDumpingPolicy_recorder = null;
                    if( theDumpingPolicy.fRecorder && ( typeof theDumpingPolicy.fRecorder === "function")) {
                        aDumpingPolicy_recorder = theDumpingPolicy.fRecorder();
                    }
                    
                    if( !aDumpingPolicy_recorder) {
                        return;
                    }
                    
                    if( !( aDumpingPolicy_recorder === this)) {
                        theDumpingPolicy.pSetRecorder( this);
                    }
                    
                };
                if( pSetDumpingPolicy){}/* CQT */
                aPrototype.pSetDumpingPolicy = pSetDumpingPolicy;
                
                
                
                
                
                
                
                
                
                
                
                var fCreateAndRegisterRecord = function( theInstance, theStep, theEventKind, theData, theReason, theDetails) {
                    
                    var aRecordId = this._v_RecordsIdentifier.fReserveId();
                    
                    var aRecord = new theS_RecordType.Record_Constructor( this, aRecordId,  theInstance, theStep, theEventKind, theData, theReason, theDetails);
                    
                    try {
                        if( aRecord) {
                            
                            var aRecordedRecordPointer = null;
                            
                            if( this._v_RecordingPolicy) {
                                aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( aRecord);
                            }
                            
                            if( this._v_DumpingPolicy) {
                                this._v_DumpingPolicy.pDumpRecord( aRecord, aRecordedRecordPointer);
                            }
                        }
                    }
                    catch( anException) {
                    
                    }
                    
                    return aRecord;
                };
                if( fCreateAndRegisterRecord){}/* CQT */
                aPrototype.fCreateAndRegisterRecord = fCreateAndRegisterRecord;
                
                
                
                
                
                
                
                /* Deprecated. Kept in support of common type pLogRecord . Use common type fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    var aRecordedRecordPointer = null;
                    
                    if( this._v_RecordingPolicy) {
                        aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( theRecord);
                    }
                    
                    if( this._v_DumpingPolicy) {
                        this._v_DumpingPolicy.pDumpRecord( theRecord, aRecordedRecordPointer);
                    }
                    
                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;
                
                
                
                
                
                
                
                
                /* Invoked from RecordingPolicy fRecordRecord() */
                var pKeepRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    if( !this._v_Records) {
                        this._v_Records = [ ];
                    }
                    
                    this._v_Records.push( theRecord);
                    
                };
                if( pKeepRecord){}/* CQT */
                aPrototype.pKeepRecord = pKeepRecord;
                
                
                
                
                
                
                
                
                var fKeptRecords = function() {
                    
                    if( !this._v_Records) {
                        return null;
                    }
                    
                    if( !( typeof this._v_Records.slice === "function")) {
                        return null;
                    }
                    
                    return this._v_Records.slice();
                    
                };
                if( fKeptRecords){}/* CQT */
                aPrototype.fKeptRecords = fKeptRecords;
                
                
                
                
                
                var fKeptRecordsSlice = function( theFirstIndex) {
                    
                    if( theFirstIndex < 0) {
                        return this._v_Records.slice();
                    }
                    
                    
                    if( !this._v_Records) {
                        return [];
                    }
                    
                    if( !( typeof this._v_Records.slice === "function")) {
                        return [];
                    }
                    
                    return this._v_Records.slice( theFirstIndex);
                    
                };
                if( fKeptRecordsSlice){}/* CQT */
                aPrototype.fKeptRecordsSlice = fKeptRecordsSlice;
                
                
                
                
                
                var pClearKeptRecords = function() {
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    this._v_Records = [ ];
                    this._v_RecordPointersByName = { };
                    
                };
                if( pClearKeptRecords){}/* CQT */
                aPrototype.pClearKeptRecords = pClearKeptRecords;
                
                
                
                
                
                
                
                var fLastKeptRecordPointer = function() {
                    
                    if( !this._v_Records) {
                        return null;
                    }
                    
                    return this._v_Records.length;
                    
                };
                if( fLastKeptRecordPointer){}/* CQT */
                aPrototype.fLastKeptRecordPointer = fLastKeptRecordPointer;
                
                
                
                
                
                
                
                
                
                var pSetRecordPointer = function( theRecordPointerName, theRecordPointer /* If not a record pointer in range by array index then point to last record */ ) {
                    
                    if( !theRecordPointerName) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName) {
                        this._v_RecordPointersByName = { };
                    }
                    
                    
                    var aRecordPointer = -1;
                    
                    if( typeof theRecordPointer === "number") {
                        
                        if( !isNaN( theRecordPointer)) {
                            
                            if( theRecordPointer >= 0) {
                                
                                if( this._v_Records) {
                                    
                                    var aNumRecords = this._v_Records.length;
                                    if( aNumRecords) {
                                        
                                        if( theRecordPointer < aNumRecords) {
                                            
                                            aRecordPointer = theRecordPointer;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                    
                    if( aRecordPointer < 0) {
                        if( this._v_Records) {
                            
                            var otherNumRecords = this._v_Records.length;
                            if( otherNumRecords) {
                                
                                aRecordPointer = otherNumRecords - 1;
                            }
                        }
                    }
                    
                    this._v_RecordPointersByName[ theRecordPointerName] = aRecordPointer;
                    
                };
                if( pSetRecordPointer){}/* CQT */
                aPrototype.pSetRecordPointer = pSetRecordPointer;
                
                
                
                
                
                
                var pClearRecordPointer = function( theRecordPointerName) {
                    
                    if( !theRecordPointerName) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName.hasOwnProperty( theRecordPointerName)) {
                        return;
                    }
                    
                    delete this._v_RecordPointersByName[ theRecordPointerName];
                    
                };
                if( pClearRecordPointer){}/* CQT */
                aPrototype.pClearRecordPointer = pClearRecordPointer;
                
                
                
                
                
                var fGetRecordPointerNamed = function( theRecordPointerName) {
                    
                    if( !theRecordPointerName) {
                        return null;
                    }
                    
                    return this._v_RecordPointersByName[ theRecordPointerName];
                    
                };
                if( fGetRecordPointerNamed){}/* CQT */
                aPrototype.fGetRecordPointerNamed = fGetRecordPointerNamed;
                
                
                
                
                
                
                
                var pSubstractFromAllRecordPointers = function( theAmountToSubstract) {
                    
                    if( !theAmountToSubstract || ( theAmountToSubstract < 0)) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName) {
                        return;
                    }
                    
                    var someRecordPointersByNameKeys = Object.keys( this._v_RecordPointersByName);
                    if( !someRecordPointersByNameKeys) {
                        return;
                    }
                    
                    var aNumRecordPointersByNameKeysLen = someRecordPointersByNameKeys.length;
                    if( !aNumRecordPointersByNameKeysLen) {
                        return;
                    }
                    
                    for( var aRecordPointerByNameKeyIdx=0; aRecordPointerByNameKeyIdx < aNumRecordPointersByNameKeysLen; aRecordPointerByNameKeyIdx++) {
                        var aRecordPointerByNameKey = someRecordPointersByNameKeys[ aRecordPointerByNameKeyIdx];
                        if( aRecordPointerByNameKey) {
                            if( this._v_RecordPointersByName.hasOwnProperty( aRecordPointerByNameKey)) {
                                
                                var aRecordPointerValue = this._v_RecordPointersByName[ aRecordPointerByNameKey];
                                if( typeof aRecordPointerValue === "number") {
                                    if( !isNaN( aRecordPointerValue)) {
                                        
                                        var anUpdatedRecordPointerValue = aRecordPointerValue - theAmountToSubstract;
                                        if( anUpdatedRecordPointerValue){}/* CQT */
                                        this._v_RecordPointersByName[ aRecordPointerByNameKey] = anUpdatedRecordPointerValue;
                                    }
                                }
                            }
                        }
                    }
                    
                };
                if( pSubstractFromAllRecordPointers){}/* CQT */
                aPrototype.pSubstractFromAllRecordPointers = pSubstractFromAllRecordPointers;
                
                
                
                
                
                
                
                
                var pDiscardRecordsToMaxNumber = function( theMaxNumberOfRecords) {
                    
                    if( !theMaxNumberOfRecords || ( theMaxNumberOfRecords < 0)) {
                        return;
                    }
                    
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    var aNumRecords = this._v_Records.length;
                    if( !aNumRecords) {
                        return;
                    }
                    
                    if( aNumRecords <= theMaxNumberOfRecords) {
                        return;
                    }
                    
                    var aFirstRecordIndexToKeep = aNumRecords - theMaxNumberOfRecords;
                    if( aFirstRecordIndexToKeep <= 0) {
                        return;
                    }
                    
                    this._v_Records.splice( 0, aFirstRecordIndexToKeep);
                    
                    this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);
                    
                };
                if( pDiscardRecordsToMaxNumber){}/* CQT */
                aPrototype.pDiscardRecordsToMaxNumber = pDiscardRecordsToMaxNumber;
                
                
                
                
                
                
                
                
                
                
                
                var pDiscardRecordsOlderThan = function( theOlderThanMillis) {
                    
                    if( !theOlderThanMillis || ( theOlderThanMillis < 0)) {
                        return;
                    }
                    
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    var aNumRecords = this._v_Records.length;
                    if( !aNumRecords) {
                        return;
                    }
                    
                    
                    var aNowMillis = new Date().getTime();
                    var anEarlierMillis = aNowMillis - theOlderThanMillis;
                    if( anEarlierMillis <= 0) {
                        return;
                    }
                    
                    
                    var aFirstRecordIndexToKeep = 0;
                    
                    for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                        
                        aFirstRecordIndexToKeep = aRecordIdx;
                        
                        var aRecord = this._v_Records[ aRecordIdx];
                        if( aRecord) {
                            
                            var aRecord_timestamp_millis = aRecord._v_Timestamp;
                            if( aRecord_timestamp_millis) {
                                
                                if( aRecord_timestamp_millis >= anEarlierMillis) {
                                    break;
                                }
                            }
                        }
                    }
                    
                    
                    if( !aFirstRecordIndexToKeep) {
                        return;
                    }
                    
                    this._v_Records.splice( 0, aFirstRecordIndexToKeep);
                    
                    this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);
                    
                };
                if( pDiscardRecordsOlderThan){}/* CQT */
                aPrototype.pDiscardRecordsOlderThan = pDiscardRecordsOlderThan;
                
                
                
                
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Recorder_Constructor = function( theTitle, theIdentifier) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_Identifier = null;
                
                this._v_Id         = null;
                this._v_Title      = null;
                
                this._v_Records    = null;
                this._v_RecordPointersByName = null;
                
                this._v_RecordsIdentifier = null;
                
                this._v_RecordingPolicy = null;
                this._v_DumpingPolicy   = null;
                
                this._pInit_Recorder( theTitle, theIdentifier);
            };
            Recorder_Constructor.prototype = aRecorder_Prototype;
            
            
            
            
            
            var Recorder_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecorder_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Identifier = null;
                
                this._v_Id         = null;
                this._v_Title      = null;
                
                this._v_Records    = null;
                this._v_RecordPointersByName = null;
                
                this._v_RecordsIdentifier = null;
                
                this._v_RecordingPolicy = null;
                this._v_DumpingPolicy   = null;
            };
            Recorder_SuperPrototypeConstructor.prototype = aRecorder_Prototype;
            
            
            
            var aModule = {
                "Recorder_Prototype": aRecorder_Prototype,
                "Recorder_Constructor": Recorder_Constructor,
                "Recorder_SuperPrototypeConstructor": Recorder_SuperPrototypeConstructor,
                "Prototype": aRecorder_Prototype,
                "Constructor": Recorder_Constructor,
                "SuperPrototypeConstructor": Recorder_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aRecorder_Prototype._v_Module = aModule;
            
            
            return aModule;
        };
        
        
        
        
        
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_IdentifierType,
                theSS_RecordType,
                theSS_RecordingPolicyType,
                theSS_DumpingPolicyType
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("identifyingTypes").factory("RecorderType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "IdentifierType",
            "RecordType",
            "RecordingPolicyKeepAllType",
            "DumpingPolicyFilterKindsType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            var aM_identifierSvce = require('./identifier_svce');
            var aM_identifier     = require('./identifier_type');
            var aM_record         = require('./record_type');
            var aM_recordingpolicy= require('./recordingpolicy_keepall_type');
            var aM_dumpingpolicy  = require('./dumpingpolicy_filterkinds_type');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_identifierSvce,
                aM_identifier,
                aM_record,
                aM_recordingpolicy,
                aM_dumpingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recorder_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_identifier_svce",
                "m_identifier_type",
                "m_record_type",
                "m_recordingpolicy_keepall_type",
                "m_dumpingpolicy_filterkinds_type"
            ],
            aMod_definer);
    }
    
    
})();







;/*
 * recorder_svce.js
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






;/*
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
                                   theSS_Overrider){
    
        var ComponentName    = "prettytype";
        var ModuleName     = "eventkinds_common";
        var ModulePackages = "eventkinds";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
        
        var aMod_builder = function( theS_Overrider) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
            var pgInitWithModuleVariations = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
        
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
                theToInit.EVENTKIND_NEWOBJECTCREATED        = "EVT_NEWOBJECTCREATED";
                theToInit.EVENTKIND_NEWOBJECTFAILED         = "EVT_NEWOBJECTFAILED";
            
            
                theToInit.EVENTKINDS_NOPROMISE_FAILURES = [
                    theToInit.EVENTKIND_NEWOBJECTFAILED
                ];
            
            
            
                theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES = [
                    theToInit.EVENTKIND_NEWOBJECTCREATED
                ];
            
            
            
                theToInit.EVENTKINDS_NOPROMISE = [];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
            
            
            
            
                theToInit.EVENTKINDS_FAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
            
            
            
            
                theToInit.EVENTKINDS_NOTFAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
            
            
            
            
            
            
            
                theToInit.EVENTKINDS = theToInit.EVENTKINDS_NOPROMISE.slice();
            
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                    theToInit.EVENTKIND_NEWOBJECTCREATED
                ];
            
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE = theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES.slice();
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
                theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NONE;
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;
            
            
            
            
            
            
                theToInit.EVENTKINDS_ERRORS = [
                    theToInit.EVENTKIND_NEWOBJECTFAILED
                ];
            
            
                theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS  = theToInit.EVENTKINDS_ERRORS.slice();
            
                theToInit.EVENTKINDS_TRIGGERDUMP_ALL     = theToInit.EVENTKINDS.slice();
            
                theToInit.EVENTKINDS_TRIGGERDUMP_DEFAULT = theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS;
            
            
            
            };
        
        
        
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
        
        
        
        
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
        
        
            return aModule;
        };
    
        

        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
    
        angular.module("eventKinds_Common", [ "typesRegistry", "modbootTypes"]).factory("EventKinds_Common",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define( "m_eventkinds_common",
            [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer
        );
        
    }
    
    
})();






;'use strict';

/*
 * common_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused.  licensed under EUPL  http://www.uiwire.org

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



if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("commonTypes", [
        "typesRegistry",
        "modbootTypes",
        "eventKinds_Common",
        "identifyingTypes",
        "traversals"
    ]);
    
    
}



;/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030426
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
                                   theSS_Overrider,
                                   theSS_IdentifierSvce,
                                   theSS_RecorderSvce,
                                   theSS_EventTypes_Common,
                                   theSS_Travesals){
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "common_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce,
                                     theS_EventTypes_Common,
                                     theS_Travesals) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                
                /* BeWare: keeping references to record instances shall prevent reclamation of their memory by the garbage collector
                   Note that when a recordingpolicy_keepall is plugged into the recorder, all records shall be kept in memory in the _v_Records slot property of the recorder instance
                   */
                theToInit.KEEPOWNRECORDS = false;
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                if( theS_EventTypes_Common && theS_EventTypes_Common.pgInitFromModuleConstants) {
                    theS_EventTypes_Common.pgInitFromModuleConstants( theToInit);
                }
                
                theToInit.COMMON_DEFAULTTITLE = "CommonDefaultName";
                
                theToInit.UNKNOWNID = "?i?";
                
                theToInit.VALUEDIFFATTOP = "/";
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
                
                
                
                
                
                theToInit.FIELDNAMEDOT = ".";
                
                theToInit.URLPATHSEPARATOR   = "/";
                theToInit.HTTPQUERYCHAR      = "?";
                theToInit.HTTPPARMASSIGN     = "=";
                theToInit.HTTPEXTRAPARMCHAR  = "&";
                
                
                theToInit.DATATYPE_FILE = "File";
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            var aCommon_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
                
                aPrototype._v_Type = "Common";
                
                aPrototype._v_Module = null;
    
                aPrototype._v_Prototype_Common = aPrototype;
    
                
                aPrototype._v_Identifier = null;
                aPrototype._v_Recorder   = null;
                
                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;
                
                aPrototype._v_OwnRecords = null;
                
                
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_Common( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.COMMON_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                
                
                var _pInit_Common = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_Identifier = theIdentifier;
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }
                    
                    this._v_Recorder   = theRecorder;
                    if( !this._v_Recorder) {
                        this._v_Recorder = theS_RecorderSvce;
                    }
                    
                    if( this._v_Identifier) {
                        this._v_Id = this._v_Identifier.fReserveId();
                    }
                    
                    if( !this._v_Id) {
                        this._v_Id = this.UNKNOWNID;
                    }
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    this._v_OwnRecords = [ ];
                };
                if( _pInit_Common){}/* CQT */
                aPrototype._pInit_Common = _pInit_Common;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                var fAsLogObject = function() {
                    
                    var aLog = this.fIdentifyingWithTitleJSON();
                    if( aLog){}/* CQT */
                    
                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;
                
                
                
                
                
                
                var fLogString = function() {
                    
                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }
                    
                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {
                        aLogString = "Error_while_fLogString_JSON_stringify"
                    }
                    
                    return aLogString;
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;
                
                
                
                
                /*
                var toString = function() {
                    return this.fLogString();
                };
                aPrototype.toString = toString;
                */
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecord = function( theMethodName, theEventKind, theData, theReason, theDetail) {
                    
                    if( this._v_Recorder == null) {
                        return null;
                    }
                    
                    var aRecord = this._v_Recorder.fCreateAndRegisterRecord( this, theMethodName, theEventKind, theData, theReason, theDetail);
                    
                    if( this.KEEPOWNRECORDS) {
                        this._v_OwnRecords.push( aRecord);
                    }
                    
                    return aRecord;
                };
                if( fRecord){}/* CQT */
                aPrototype.fRecord = fRecord;
                
                
                
                
                
                
                
                
                
                
                /* Deprecated. Kept in support of common type pLogRecord . Use fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    
                    this._v_Recorder.pLogRecord( theRecord);
                    
                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;
                
                
                
                
                
                
                
                
                
                var fFirstDiff = function( theActualValue, theCheckValue) {
                    
                    return theS_Travesals.fFirstDiff( theActualValue, theCheckValue);
                };
                if( fFirstDiff){}/* CQT */
                aPrototype.fFirstDiff = fFirstDiff;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Common_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
                
                this._pInit_Common( theTitle, theIdentifier, theRecorder);
            };
            Common_Constructor.prototype = aCommon_Prototype;
            
            
            
            
            
            var Common_SuperPrototypeConstructor = function() {
                this._v_Prototype = aCommon_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
    
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
            };
            Common_SuperPrototypeConstructor.prototype = aCommon_Prototype;
            
            
            
            var aModule = {
                "Common_Prototype": aCommon_Prototype,
                "Common_Constructor": Common_Constructor,
                "Common_SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "Prototype": aCommon_Prototype,
                "Constructor": Common_Constructor,
                "SuperPrototypeConstructor": Common_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aCommon_Prototype._v_Module = aModule;
            
            
            
            
            return aModule;
        };
        
        
        
        
        
      
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_RecorderSvce,
                theSS_EventTypes_Common,
                theSS_Travesals
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
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
        
        angular.module("commonTypes").factory("CommonType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "RecorderSvce",
            "EventKinds_Common",
            "Traversals",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry     = require('../modboot/typesregistry');
            var aM_overrider         = require('../modboot/overrider_svce');
            var aM_identifierSvce    = require('../identifying/identifier_svce');
            var aM_recorderSvce      = require('../identifying/recorder_svce');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
            var aM_traversals        = require('../utils/traversals');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_identifierSvce,
                aM_recorderSvce,
                aM_eventkinds_common,
                aM_traversals
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_common_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_identifier_svce",
                "m_recorder_svce",
                "m_eventkinds_common",
                "m_traversals"
            ],
            aMod_definer
           );
    }
    
})();






//# sourceMappingURL=prettytype.js.map