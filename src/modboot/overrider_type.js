/*
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
                    this._v_Module    = this._v_Prototype._v_Module;
                    
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




