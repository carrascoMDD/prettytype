/*
 * overrider_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
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
    
    var ComponentName    = "prettytype";
    var ModuleName     = "overrider_type";
    var ModulePackages = "modboot";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Overrider";
    
    var aMod_definer =  ( function( theSS_typesregistry) {

        var aMod_builder = function() {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
               
               If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleConstants.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different constants,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleConstants
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
                   
                   
                   The key-values in a prototype's module ModuleConstants shall be copied onto the prototype object
                   which then hold key-value pairs for all keys in ModuleConstants, with the initial values same as in the ModuleConstants,
                   but these values may be changed in the prototype object.
                   The prototype may access each constant defined in ModuleConstants
                   as this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"] .
                   
                   All sub-prototypes defined in other modules and their instances
                   may also access this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"]
                   the key-values defined in any prototype recursively upwards the prototype hierarchy
                   and therefore to the key-values copied into each prototype object from their respective module ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.OVERRIDER_DEFAULTTITLE = "OverriderDefaultName";
    
                theToInit.MODULENAMESTEPSEPARATOR = "/";
    
                theToInit.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP = "\_\-\_";
                
                theToInit.LOGOVERRIDESFROMCOMMANDLINE = false;
            };
            
            
            
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Protoype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
               
                If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleGlobals.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different globals,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleGlobals
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
            */
            var InitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            /* ***************************************************************
              Returns an object which shall be used as prototype in constructor functions
              <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor
              
              When the new prototype shall have no super-prototype, the object is created as new Object() or literal {}.
              
              When the new prototype shall have a super-prototype, the object is created by invoking a constructor function
                with the super-prototype as the function prototype.
                
              Initialise metatype variables in the prototype object.
                When accessing the prototype or its instances, these values shall override same keys in the super-prototype, if any.
            */
            var Overrider_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
    
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Overrider     = aPrototype;
                /* Shall be filled below, at the end of the function enclosing this (aMod_builder), when aModule is defined */
                aPrototype._v_Module                  = null;
        
                return aPrototype;
            };
    
    
    
            var Overrider_CreatePrototypeSlotsOn = function( theFrame) {
                if( !theFrame) {
                }
            };
    
    
    
            var Overrider_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
    
                theFrame._v_Overriderarguments = null;
                theFrame._v_Custom = null;
                theFrame._v_Overrides = null;
            };
    
    
    
    
    
            var Overrider_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
    

                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Overrider( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Overrider = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.OVERRIDER_DEFAULTTITLE;
                    }
    
                    this._v_Overriderarguments = null;
                    this._v_Custom = null;
                    this._v_Overrides = null;
                };
                if( _pInit_Overrider){}/* CQT */
                thePrototype._pInit_Overrider = _pInit_Overrider;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                thePrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                thePrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
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
                thePrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                thePrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
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
                thePrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                thePrototype.fToResultJSON = fToResultJSON;
    
    
     
    
           
                var pSetOverriderarguments = function( theOverriderarguments) {
                    this._v_Overriderarguments = theOverriderarguments;
                };
                if( pSetOverriderarguments){}/* CQT */
                thePrototype.pSetOverriderarguments = pSetOverriderarguments;
    
    
                var pSetCustom = function( theCustom) {
                    this._v_Custom = theCustom;
                };
                if( pSetCustom){}/* CQT */
                thePrototype.pSetCustom = pSetCustom;
    
    
                var pSetOverrides = function( theOverrides) {
                    this._v_Overrides = theOverrides;
                };
                if( pSetOverrides){}/* CQT */
                thePrototype.pSetOverrides = pSetOverrides;
    
    

    
    
    
    
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
                thePrototype.pOverrideModuleVariations = pOverrideModuleVariations;
    
    
    
    
    
    
    
    
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
                thePrototype.pOverrideWithValuesFrom = pOverrideWithValuesFrom;
    
    
    
    
    
    
    
    
    
    
    
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
                thePrototype.pOverrideWithArguments = pOverrideWithArguments;
    
                
            };
    
    
    
    
            var Overrider_ProtoFactory = function() {
        
                var aPrototype = Overrider_ProtoInstancer();
                InitFromModuleConstants( aPrototype);
                Overrider_CreatePrototypeSlotsOn( aPrototype);
                Overrider_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
    
            var anOverrider_Prototype = Overrider_ProtoFactory();
    
    
            var Overrider_Constructor = function( theTitle) {
                this._v_Prototype = anOverrider_Prototype;
        
                Overrider_CreateInstanceSlotsOn( this);
        
                this._pInit_Overrider( theTitle);
            };
            Overrider_Constructor.prototype = anOverrider_Prototype;
    
    
    
    
    
    
    
            var Overrider_SuperPrototypeConstructor = function() {
                this._v_Prototype = anOverrider_Prototype;
        
                Overrider_CreateInstanceSlotsOn( this);
                /* Does not invoke _pInit_Overrider on the newly created object,
                   because initialisation of values by super-protypes _pInit_Xxx
                   shall be invoked during the _pInit_Xxx of each instance of the subprototypes.
                */
            };
            Overrider_SuperPrototypeConstructor.prototype = anOverrider_Prototype;
    
    
    
    
    
            var aModule = {
                "_v_Type":                                 "module",
                "ComponentName":                           ComponentName,
                "ModuleName":                              ModuleName,
                "ModulePackages":                          ModulePackages,
                "ModuleFullName":                          ModuleFullName,
                "ModuleConstants":                         ModuleConstants,
                "ModuleGlobals":                           ModuleGlobals,
        
                "InitFromModuleConstants":               InitFromModuleConstants,
                "InitModuleGlobalsOn":                   InitModuleGlobalsOn,
        
                "Overrider_ProtoInstancer":                Overrider_ProtoInstancer,
                "Overrider_ProtoDefinerOn":                Overrider_ProtoDefinerOn,
                "Overrider_ProtoFactory":                  Overrider_ProtoFactory,
                "Overrider_Constructor":                   Overrider_Constructor,
                "Overrider_SuperPrototypeConstructor":     Overrider_SuperPrototypeConstructor,
                "Overrider_CreatePrototypeSlotsOn":        Overrider_CreatePrototypeSlotsOn,
                "Overrider_CreateInstanceSlotsOn":         Overrider_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          Overrider_ProtoInstancer,
                "ProtoDefinerOn":                          Overrider_ProtoDefinerOn,
                "ProtoFactory":                            Overrider_ProtoFactory,
                "Constructor":                             Overrider_Constructor,
                "SuperPrototypeConstructor":               Overrider_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Overrider_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Overrider_CreateInstanceSlotsOn,
        
                "Overrider_Prototype":                     anOverrider_Prototype,
                "Prototype":                               anOverrider_Prototype
        
            };
            InitFromModuleConstants( aModule);
    
            
            anOverrider_Prototype._v_Module = aModule;
            
            
            
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
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
    
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
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot", "typesregistry")
            ],
            aMod_definer
        );
    
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




