/*
 * typesregistry.js
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
    
    var aMod_definer = ( function(){
    
        var aMod_builder = function() {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
    
    
                theToInit.REGISTERMODULES = true;
                theToInit.RESOLVEMODULES  = true;
    
    
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
                    
                    // this._v_Prototype = aPrototype;
                    // this._v_Type      = this._v_Prototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
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
                    
                    if( !this.REGISTERMODULES) {
                        return false;
                    }
                    
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
    
                    if( !this.RESOLVEMODULES) {
                        return null;
                    }
    
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
    
                    if( !this.REGISTERMODULES) {
                        return false;
                    }
                    
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
                this._v_IsPrototype = false;
                this._v_Prototype = aTypesRegistry_Prototype;
                // this._v_Prototype = null;
                // this._v_SuperPrototype = null;
                // this._v_Type      = null;
                // this._v_Module    = null;
                
                this._v_Title = null;
                
                this._v_ModulesByFullName = null;
                
                this._pInit_TypesRegistry( theTitle);
            };
            TypesRegistry_Constructor.prototype = aTypesRegistry_Prototype;
            
            
            
            
            
            var TypesRegistry_SuperPrototypeConstructor = function() {
                this._v_IsPrototype = true;
                this._v_Prototype = aTypesRegistry_Prototype;
                // this._v_SuperPrototype = null;
                // this._v_Type      = null;
                // this._v_Module    = null;
                
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
        
        define( "m_typesregistry",
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            null /* theDependencies */,
            aMod_definer
        );
    
    }
    
    
})();






