/*
 * dumpingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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
    var ModuleName     = "dumpingpolicy_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer =  ( function( theSS_typesregistry_svce,
                                    theSS_overrider_type,
                                    theSS_IdentifierSvce,
                                    theSS_ConsoleSvce) {
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_IdentifierSvce,
                                     theS_ConsoleSvce) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MAYDUMPRECORDS = true;
                
            };
            
            
            
            
            
            var InitFromModuleVariations = function( theToInit) {
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
            theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
    
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
                
                theToInit.DUMPINGPOLICY_DEFAULTTITLE = "DumpingPolicyDefaultName";
                
                theToInit.RECORDPOINTERNAME_LASTDUMPED = "RECORDPOINTERNAME_LASTDUMPED";
                
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
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
    
    
    
    
    
            var aDumpingPolicy_Prototype = (function() {
                
                
                var aPrototype = {};
                
                InitFromModuleConstants( aPrototype);
    
                aPrototype._v_IsPrototype = true;
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
                    
                    // this._v_Prototype = aPrototype;
                    // this._v_Type      = this._v_Prototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
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
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
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

                    var aLogString = theRecord.fLogString();
                    if( !aLogString) {
                        return;
                    }
                    
                    aConsoleService.log(  "," + aLogString);
    
                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }
    
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
                this._v_IsPrototype = false;
                this._v_Prototype = aDumpingPolicy_Prototype;
                // this._v_Prototype = null;
                // this._v_SuperPrototype = null;
                // this._v_Type = null;
                // this._v_Module = null;
                
                this._v_Identifier       = null;
                
                this._v_Id               = null;
                this._v_Title            = null;
                
                this._v_Recorder         = null;
                
                this._v_MayDumpRecords   = null;
                
                this._pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicy_Constructor.prototype = aDumpingPolicy_Prototype;
            
            
            
            
            
            var DumpingPolicy_SuperPrototypeConstructor = function() {
                this._v_IsPrototype = true;
                this._v_Prototype = aDumpingPolicy_Prototype;
                // this._v_SuperPrototype = null;
                // this._v_Type      = null;
                // this._v_Module    = null;
                
                this._v_Identifier       = null;
                
                this._v_Id               = null;
                this._v_Title            = null;
                
                this._v_Recorder         = null;
                
                this._v_MayDumpRecords   = null;
                
            };
            DumpingPolicy_SuperPrototypeConstructor.prototype = aDumpingPolicy_Prototype;
    
    
    
            var DumpingPolicy_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
    
                aModule.SuperPrototypeSingletonInstance = new DumpingPolicy_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
    
            var aModule = {
                "DumpingPolicy_Prototype": aDumpingPolicy_Prototype,
                "DumpingPolicy_Constructor": DumpingPolicy_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor": DumpingPolicy_SuperPrototypeConstructor,
                "DumpingPolicy_SuperPrototypeSingleton": DumpingPolicy_SuperPrototypeSingleton,
                "Prototype": aDumpingPolicy_Prototype,
                "Constructor": DumpingPolicy_Constructor,
                "SuperPrototypeConstructor": DumpingPolicy_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": DumpingPolicy_SuperPrototypeSingleton
            };
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
            
            aDumpingPolicy_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type,
                theSS_IdentifierSvce,
                theSS_ConsoleSvce
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
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
                "m_typesregistry_svce",
                "m_overrider_svce",
                "m_identifier_type",
                "m_console_svce"
            ],
                aMod_definer
        );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
                nomod.fComputeFullName( "prettytype", "modboot",     "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type"),
                nomod.fComputeFullName( "prettytype", "utils",       "console_svce")
            ],
            aMod_definer
        );
    
    }
    
})();






